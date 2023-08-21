import React, { useState } from 'react'


//UseState hooks wth array
function UseStateArray(){

    const [items,setItems]=useState([])

    function handleClick(){
        setItems([...items,{
            key:items.length+1,value:Math.random()}])
    }
    return (
        <>
        <h1> Learning UseState with Array</h1>
        <div className='app'>
            <ol>
                {items.map(item=>(
                    <li key={item.key}>{item.value}</li>
                ))}
            </ol>
        </div>

        <button className='button-3' onClick={handleClick}>Add Element</button>
        </>
    )
}

export default UseStateArray