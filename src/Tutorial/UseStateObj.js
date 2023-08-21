import React, { useState } from 'react'

function UseStateObject(){
    const [allValues,setValues] =useState({firstName:"Deepak",lastName:"Radhika"});

    function handleClick(){
        //Way to update value
        // const allv = {firstName:'Anumpriya',lastName:allValues.lastName};
        // setValues(allv);

        //Will remove the first name
        // setValues({lastName:'Jain'});

        //{...allValues} is copying the existing values and last elements are overriding
        setValues({...allValues,lastName:"Gupta"});
    }
    return (
        <div className='app'>
            <h1> First Name is {allValues.firstName} and last name is {allValues.lastName} </h1>
            <button className='button-3' onClick={handleClick} >Update</button>
        </div>
    )
}

export default UseStateObject