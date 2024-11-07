import React, { useEffect, useState } from 'react'
import { ValueDisplay } from '../valueDisplay/ValueDisplay'
import { Input } from '../input/Input'
import { Button } from '../button/Button'

type SettingsProps = {
  setAllValues: (preload: { newMaxValue: string, newStartValue: string }) => void
  setMessageShown: (value: boolean) => void
  error: boolean
  checkForError: (startValue: number, maxValue: number) => void
}

export const Settings = (props: SettingsProps) => {
  const { setAllValues, setMessageShown, error, checkForError } = props;

  const [newMaxValue, setNewMaxValue] = useState<string>('5');
  const [newStartValue, setNewStartValue] = useState<string>('0');
  const [isDisabled, setIsDisabled] = useState(true);


  useEffect(() => {
    setIsDisabled(false)
  }, [])

  const changeSettings = () => {
    setMessageShown(true)
    setIsDisabled(false)
  }

  const maxValueHandler = (value: string) => {
    setNewMaxValue(value)
    changeSettings()
    checkForError(+newStartValue, +value);
  }

  const minValueHandler = (value: string) => {
    setNewStartValue(value)
    changeSettings()
    checkForError(+value, +newMaxValue)
  }

  const onClickHandler = () => {
    setAllValues({ newMaxValue: newMaxValue, newStartValue: newStartValue })
    setMessageShown(false)
    setIsDisabled(true)
  }

  return (
    <div className='card'>
      <ValueDisplay>
        <label>
          max value: <Input type={'number'} onChange={maxValueHandler} value={newMaxValue} className={error ? 'errorInput' : ''} />
        </label>
        <label>
          start value: <Input type={'number'} onChange={minValueHandler} value={newStartValue} className={error ? 'errorInput' : ''} />
        </label>
      </ValueDisplay>
      <div className='btn-wrapper'>
        <Button title={'set'} onClick={onClickHandler} disabled={isDisabled || error} />
      </div>
    </div>
  )
}
