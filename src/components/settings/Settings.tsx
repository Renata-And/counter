import { useEffect, useState } from 'react'
import { ValueDisplay } from '../valueDisplay/ValueDisplay'
import { Input } from '../input/Input'
import { Button } from '../button/Button'

type SettingsProps = {
  setAllValues: (payload: { newMaxValue: string, newStartValue: string }) => void
  setMessageIsShown: (value: boolean) => void
  error: string
  checkForError: (startValue: number, maxValue: number) => void
}

const LOCAL_STORAGE_KEYS = {
  MAX: 'max_value',
  MIN: 'min_value',
} as const

export const Settings = (props: SettingsProps) => {
  const { setAllValues, setMessageIsShown, error, checkForError } = props;

  const [newMaxValue, setNewMaxValue] = useState<string>('5');
  const [newStartValue, setNewStartValue] = useState<string>('0');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(false)
    let maxValueAsString = localStorage.getItem(LOCAL_STORAGE_KEYS.MAX)
    let startValueAsString = localStorage.getItem(LOCAL_STORAGE_KEYS.MIN)
    if (maxValueAsString) {
      setNewMaxValue(JSON.parse(maxValueAsString))
    }
    if (startValueAsString) {
      setNewStartValue(JSON.parse(startValueAsString))
    }
  }, [])

  const changeSettings = () => {
    setMessageIsShown(true)
    setIsDisabled(false)
  }

  const maxValueHandler = (value: string) => {
    setNewMaxValue(value)
    changeSettings()
    checkForError(+newStartValue, +value)
    localStorage.setItem(LOCAL_STORAGE_KEYS.MAX, JSON.stringify(value))
  }

  const minValueHandler = (value: string) => {
    setNewStartValue(value)
    changeSettings()
    checkForError(+value, +newMaxValue)
    localStorage.setItem(LOCAL_STORAGE_KEYS.MIN, JSON.stringify(value))
  }

  const setValuesHandler = () => {
    setAllValues({ newMaxValue, newStartValue })
    setMessageIsShown(false)
    setIsDisabled(true)
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
        <Button title={'set'} onClick={setValuesHandler} disabled={isDisabled || !!error} />
      </div>
    </div>
  )
}
