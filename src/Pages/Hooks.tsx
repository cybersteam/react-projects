import React from "react";
import { useState } from "react";

const Hooks = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
    return (
        <div>
            {counter} <button onClick={increment} >Press me</button>
        </div>
    )
}

export default Hooks