import '../App.css';
import React from 'react'
//Rendering of list in React
//How map works
// function RenderingList() {
//     const  IPL=["CSK","MI","RCB"]
//     const result =  IPL.map((ipl)=><><h1>{ipl}</h1></>)
//     return(
//         <>
//         <div className='app'>
//             {/* {IPL[0]}<br/>
//             {IPL[1]}<br/>
//             {IPL[2]}<br/> */}
//             {result}
           
//         </div>
//         </>
//     )
// }

// export default RenderingList;


//Rendering ist and key in react
function RenderingList() {
    const  IPL=[{key:1, value:"CSK"},{key:2,value:"MI"},{key:3,value:"RCB"},{key:4, value:"SRH"}]
    const result =  IPL.map((ipl)=><h1 key={ipl.key}>{ipl.value}</h1>)
    return(
        <>
        <div className='app'>
            {/* {IPL[0]}<br/>
            {IPL[1]}<br/>
            {IPL[2]}<br/> */}
            {result}
           
        </div>
        </>
    )
}

export default RenderingList;