import { useEffect, useState } from 'react'
import { ValueDisplay } from '../valueDisplay/ValueDisplay'
import { Input } from '../input/Input'
import { Button } from '../button/Button'

type SettingsProps = {
  setAllValues: (payload: { newMaxValue: string, newStartValue: string }) => void
  error: string
  setError: (value: string) => void
  checkForError: (payload: { min: number, max: number }) => void
}

export const LOCAL_STORAGE_KEYS = {
  MAX: 'max_value',
  MIN: 'min_value',
} as const

export const Settings = ({ setAllValues, error, setError, checkForError }: SettingsProps) => {
  const [newMaxValue, setNewMaxValue] = useState<string>('5');
  const [newStartValue, setNewStartValue] = useState<string>('0');

  useEffect(() => {
    let maxValueAsString = localStorage.getItem(LOCAL_STORAGE_KEYS.MAX)
    let startValueAsString = localStorage.getItem(LOCAL_STORAGE_KEYS.MIN)
    if (maxValueAsString) {
      setNewMaxValue(JSON.parse(maxValueAsString))
    }
    if (startValueAsString) {
      setNewStartValue(JSON.parse(startValueAsString))
    }
  }, [])

  const maxValueHandler = (value: string) => {
    setNewMaxValue(value)
    checkForError({ min: +newStartValue, max: +value })
  }

  const minValueHandler = (value: string) => {
    setNewStartValue(value)
    checkForError({ min: +value, max: +newMaxValue })
  }

  const setValuesHandler = () => {
    setAllValues({ newMaxValue, newStartValue })
    setError('')
  }

  return (
    <div className='card'>
      <ValueDisplay>
        <label>
          max value: <Input type={'number'} onChange={maxValueHandler} value={newMaxValue} error={error} />
        </label>
        <label>
          start value: <Input type={'number'} onChange={minValueHandler} value={newStartValue} error={error} />
        </label>
      </ValueDisplay>
      <div className='btn-wrapper'>
        <Button title={'set'} onClick={setValuesHandler} disabled={error === 'incorrect values' || error === ''} />
      </div>
    </div>
  )
}
