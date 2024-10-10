import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Display } from './components/display/Display';

function App() {
  const [count, setCount] = useState(0);
  const maxValue = 5;
  const minValue = 0;

  const setIncValue = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  }

  const setResetValue = () => {
    setCount(minValue);
  }

  return (
    <div className="App">
      <Display count={count} maxValue={maxValue} />
      <div className='button-wrapper'>
        <Button
          title={'inc'}
          onClick={setIncValue}
          disabled={count >= maxValue}
        />
        <Button
          title={'reset'}
          onClick={setResetValue}
          disabled={count === minValue}
        />
      </div>
    </div>
  );
}

export default App;
