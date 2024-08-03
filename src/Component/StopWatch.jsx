import React, { useEffect } from 'react'
import { useState } from 'react'
const StopWatch = () => {
    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const formatTime=(time)=>{
        let mins=Math.floor(time/60);
        const secs=time%60
       return `${mins}:${time<10?"0":""}${secs}`;
    }
    var timer;
     useEffect(()=>{
        if(isRunning)
        {
            timer=setInterval(()=>{
                setTime(prev=>prev+1);
            },1000)
        }
        return ()=>{
            clearInterval(timer)
        }

     },[isRunning])
    
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{border:"1px solid black",padding:"35px",borderRadius:'5px'}}>
     <div style={{fontSize:"45px",fontWeight:"700",fontFamily:"serif",marginBottom:"20px"}}>Stopwatch</div>
     <div style={{fontFamily:'serif',fontSize:'20px',marginBottom:"20px"}}>Time:{formatTime(time)}</div>
     <button onClick={()=>{setIsRunning(prev=>!prev)}}
        style={{fontFamily:'serif',fontSize:'20px'}}>{isRunning?"Stop":"Start"}</button>
     <button onClick={()=>{
        setTime(0)
        setIsRunning(
            false
        )
     }}  style={{fontFamily:'serif',fontSize:'20px'}}>Reset</button>
    </div>
    </div>
  )
}

export default StopWatch;