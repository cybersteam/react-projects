import { useReducer } from "react";

const reducer = (state: { count: number; showText: any; }, action: { type: any; }) => {
    switch(action.type){
        case "INCREMENT":
            return{count: state.count + 1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default:
            return state
    }
}

const ReducerThing = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true}) 
            return (
                <div>
                    <h1>{state.count}</h1>
                    <button onClick={() => {
                        dispatch({type: "INCREMENT"});
                        dispatch({type: "toggleShowText"});
                    }}>
                        Click this
                    </button>
                    
                    {state.showText && <p>this is trext</p>}
                </div>
            )
}


export default ReducerThing