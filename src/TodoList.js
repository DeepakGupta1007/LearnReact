import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData,setListData] =useState([]);

    function addActivity(){
        // setListData([...listData,activity])
    
        //Alternative
        setListData((listData)=>{
            const data=[...listData,activity]
            setActivity('')
            console.log(data);
            return data;
        })
    }

    function removeActivity(i){
        if(i==-1){
            setListData([]);
            return ;
        }
        const updatedListdata = listData.filter((elem,id)=>{
        return i!=id;
        }
        )
        setListData(updatedListdata);
    }
    return (
        <>
        <div className='container'>
            <div className='header'>
                To Do List
            </div>
            <input type='text' placeholder='Add activity' value={activity} onChange={(e)=>setActivity(e.target.value)}>
            </input>
            <button onClick={addActivity}>Add</button>

            <p className='List-heading'>
                Here is your list :{":)"}
            </p>

            {listData!=[] && listData.map((data,i)=>
            {
                return (
                    <>
                    <p key={i}>
                        <div className='listData'>{i+1}. {data} </div>
                        <div> <button onClick={()=>removeActivity(i)}> Remove </button> </div>
                    </p>
                    </>
                )
            })}
            {
                (listData.length>1)?
            <button onClick={()=>removeActivity(-1)}>Remove All</button>:""
            }
        </div>
        </>
    )
}

export default TodoList
