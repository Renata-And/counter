import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEYS, Settings } from './components/settings/Settings';
import { Counter } from './components/counter/Counter';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [startValue, setStartValue] = useState<number>(0);
  const [error, setError] = useState('')

  useEffect(() => {
    let maxValueAsString = localStorage.getItem(LOCAL_STORAGE_KEYS.MAX)
    let startValueAsString = localStorage.getItem(LOCAL_STORAGE_KEYS.MIN)
    if (startValueAsString) {
      setStartValue(JSON.parse(startValueAsString))
      setCount(JSON.parse(startValueAsString))
    }
    if (maxValueAsString) {
      setMaxValue(JSON.parse(maxValueAsString))
    }
  }, [])

  const setIncValue = () => {
    if (count < maxValue) {
      setCount(prev => prev + 1)
    }
  }
  const setResetValue = () => {
    setCount(startValue);
  }

  const setAllValues = (payload: { newMaxValue: string, newStartValue: string }) => {
    const { newMaxValue, newStartValue } = payload;
    setMaxValue(+newMaxValue);
    setStartValue(+newStartValue);
    setCount(+newStartValue);

    if (+newMaxValue > +newStartValue) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.MAX, newMaxValue)
    }

    if (+newStartValue >= 0 && +newStartValue < +newMaxValue) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.MIN, newStartValue)
    }
  }

  const checkForError = (payload: { min: number, max: number }) => {
    const { min, max } = payload;
    if (min === max || min > max || min < 0) {
      setError('incorrect values')
    } else {
      setError('enter values and press set')
    }
  }

  return (
    <div className="App">
      <Settings
        setAllValues={setAllValues}
        error={error}
        setError={setError}
        checkForError={checkForError} />
      <Counter
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        setIncValue={setIncValue}
        setResetValue={setResetValue}
        error={error} />
    </div>
  );
}

export default App;
