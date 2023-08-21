import axios from 'axios'
import React,{useEffect,useState} from 'react'

function AxiosTutorial() {
    

    //Get Request
    // const [data, setdata] = useState([])
    // const [callAPI,setAPI]=useState(true);
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((response)=>{
    //         console.log(response.data);
    //         setdata(response.data)
    //     })
    // }, [callAPI])
    // function handleClick(){
    //     setdata([])
    //     setAPI(!callAPI);
    // }
    // return (
    //     <div>
    //        <h1>Axios Tutorial</h1> 

    //        {data.map((d,index) =><h6 key={index}>{d.name}</h6>)}
    //        <button onClick={handleClick}>Call API</button>
    //     </div>

        
    // )


    //Post Request
    // const data={fname:'',lastname:''}
    // const [Inputdata, setInputdata] = useState(data)


    // const handleChange = (e)=>{
    //     setInputdata({...Inputdata,[e.target.name]:e.target.value})
    // }

    // const onSubmit =(e)=>{
    //     e.preventDefault();


    //     axios.post("https://jsonplaceholder.typicode.com/users",Inputdata)
    //     .then((response)=>{
    //         console.log(response);
    //     })
    // }
    // return (
    //     <>
    //      <label> First Name</label>
    //      <input type='text' name='fname' value={Inputdata.fname} onChange={handleChange}></input><br/>
    //      <label> Last Name</label>
    //      <input type='text' name='lastname' value={Inputdata.lastname} onChange={handleChange}></input><br/>
    //      <button onClick={onSubmit}> Submit </button>
    //     </>

        
    // )


    //Update PUT request
    const data={fname:'',lastname:''}
    const [Inputdata, setInputdata] = useState(data)


    const handleChange = (e)=>{
        setInputdata({...Inputdata,[e.target.name]:e.target.value})
    }

    const onSubmit =(e)=>{
        e.preventDefault();


        axios.post("https://jsonplaceholder.typicode.com/users",Inputdata)
        .then((response)=>{
            console.log(response);
        })
    }

    const onUpdate =(e) =>{
        e.preventDefault();


        axios.put("https://jsonplaceholder.typicode.com/users/1",Inputdata)
        .then((response)=>{
            console.log(response);
        })
    }

    const onDelete =(e)=>{
        e.preventDefault();


        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response);
        })
    }
    return (
        <>
         <label> First Name</label>
         <input type='text' name='fname' value={Inputdata.fname} onChange={handleChange}></input><br/>
         <label> Last Name</label>
         <input type='text' name='lastname' value={Inputdata.lastname} onChange={handleChange}></input><br/>
         <button onClick={onSubmit}> Submit </button><br/>
         <button onClick={onUpdate}>Update</button><br/>
         <button onClick={onDelete}>Delete</button>
        </>
    )

    
    
}

export default AxiosTutorial
