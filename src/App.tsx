import {useState} from 'react';
import {Settings} from './components/settings/Settings';
import {Counter} from './components/counter/Counter';

import './App.css';


function App() {
    const [count, setCount] = useState(0);
    const [messageIsShown, setMessageShown] = useState(true)
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);
    const [error, setError] = useState(false)

    const setIncValue = () => {
        if (count < maxValue) {
            setCount(prev => prev + 1)
        }
    }
    const setResetValue = () => {
        setCount(startValue);
    }

    const setAllValues = (preload: { newMaxValue: string, newStartValue: string }) => {
        const {newMaxValue, newStartValue} = preload;
        setMaxValue(+newMaxValue);
        setStartValue(+newStartValue);
        setCount(+newStartValue);
    }

    const checkForError = (startValue: number, maxValue: number) => {
        if (startValue === maxValue || startValue > maxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div className="App">
            <Settings
                setAllValues={setAllValues}
                setMessageShown={setMessageShown}
                error={error}
                checkForError={checkForError}/>
            <Counter
                count={count}
                messageIsShown={messageIsShown}
                maxValue={maxValue}
                startValue={startValue}
                setIncValue={setIncValue}
                setResetValue={setResetValue}
                error={error}/>
        </div>
    );
}

export default App;
