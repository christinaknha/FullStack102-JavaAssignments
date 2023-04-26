// import ReactDOM from "react-dom"
import {useState} from "react"
import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () =>{
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount (count - 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {Increment}>Increment by 1</button>
            <button onClick = {Decrement}>Decrement by 1</button>
        </div>
    )
}

export default Counter;
