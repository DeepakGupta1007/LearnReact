import React from 'react'
import {useState,useEffect} from 'react'

function Form(){
    const data ={name:"",email:"",password:""};
    const [flag,setFlag] =useState(false);
    const [inputData, setInputData] = useState(data);

    useEffect(() => {
       console.log("Registered");
    }, [flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)


    }
    function handleSubmit(e){
        e.preventDefault();

        if(!inputData.name || !inputData.email || !inputData.email){
            alert("Please Enter all fields");
        }
        else{
            setFlag(true);
        }

    }
    return (
        <>
        <pre>
            {(flag)?<h2 className='ui-define'>"Hello {inputData.name} , You have Registered successfully."</h2>:""}
        </pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>
                    Registration Form
                </h1>
            </div>
            <div>
                <input type='text' placeholder='Enter Your Name' name ='name' value={inputData.name} onChange={handleData}></input>
                <input type='text' placeholder='Enter Your Email' name ='email' value={inputData.email} onChange={handleData}></input>
                <input type='text' placeholder='Enter Your Password' name ='password' value={inputData.password} onChange={handleData}></input>
            </div>
            <div>
            
                <button type= 'submit' className="button-3">
                    Submit
                </button>
            </div>

        </form>
        </>
    )
}

export default Form