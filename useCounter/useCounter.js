import { useState } from "react";


export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value= 1) => {
        setCounter(c => c + value);
    }

    const decrement = (value =1) => {
        setCounter(c => c - value);
    }

    const reset = () => {
        setCounter(c => initialValue);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }

}