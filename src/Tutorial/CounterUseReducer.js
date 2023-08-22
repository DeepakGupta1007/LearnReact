import React, { useReducer } from 'react'

const initialState =0;
const reducer =(state,action)=>{
    switch (action){
        case "Increment":
            return state+1;
        case "Decrement":
            return state-1;
        default:
            return state;
    }
}

function CounterUseReducer() {

  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='app'>

        <h1> {count}</h1>
        <button onClick={()=>dispatch("Increment")}> Increment </button>
        <br/>
        <button onClick={()=>dispatch("Decrement")}> Decrement </button>
    </div>
  )
}

export default CounterUseReducer