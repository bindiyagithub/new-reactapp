import React, { useEffect, useRef } from 'react'

export default function UseRef_Hook_eg2() {

    const firstRef =  useRef();
    const lastRef =  useRef();

    useEffect(()=>{
     console.log(firstRef);
     console.log(lastRef);
     firstRef.current.style.color = 'pink';  // to ye first textbox mai pink color mai text type honge
     lastRef.current.style.backgroundColor = 'yellow';  // yaha 2nd text box ka background color yellow ho jayega 
     firstRef.current.focus();  // yaha bydefault 1st textbox focus(means dark) show hoga
    })
  
  const HandleSubmit = (e)=>{
     e.preventDefault();
     console.log("full name = " , firstRef.current.value ,"" ,lastRef.current.value)
  }
  
    return (
    <div>
     <form onSubmit={HandleSubmit}>
          <input type='text' ref={firstRef} placeholder='Enter FirstName'/>  <br/> <br/>
          <input type='text' ref={lastRef} placeholder='Enter LastName'/>  <br/> <br/>

          <input type='submit' value="Save"/>
     </form>
    </div>
  )
}
