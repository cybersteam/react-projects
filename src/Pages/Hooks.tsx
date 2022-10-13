import React, { useReducer } from "react";
import { useState } from "react";
import UseEffectHook from "../Components/UseEffect";
import UseTheState from "../Components/UseStateHook";
import UseTheReducer from "../Components/UseTheReducer";



const Hooks = () => {
    
    return (
        <div>
            <UseTheState />
            <UseTheReducer />
            <UseEffectHook />
        </div>
    )
}

export default Hooks