import React from 'react'
import { ValueDisplay } from '../valueDisplay/ValueDisplay'
import { Button } from '../button/Button'

type CounterProps = {
  count: number
  maxValue: number
  startValue: number
  setIncValue: () => void
  setResetValue: () => void
  error: string
}

export const Counter = (props: CounterProps) => {
  const { count, maxValue, startValue, setIncValue, setResetValue, error } = props;

  return (
    <div className='card'>
      <ValueDisplay>
        <div className={count >= maxValue ? 'count max' : 'count'}>
          {error ? <span className='message'>{error}</span> : count}
        </div>
      </ValueDisplay>
      <div className='btn-wrapper'>
        <Button title={'inc'} onClick={setIncValue} disabled={count >= maxValue || !!error} />
        <Button title={'reset'} onClick={setResetValue} disabled={count === startValue} />
      </div>
    </div>
  )
}
