import React, { useEffect, useRef } from 'react'

export default function UseRef_Hook_eg1() {
  const newRef = useRef();
  
  useEffect(()=>{
    console.log(newRef)  // yaha newRef mai h1 ka refrence hai.
    console.log(newRef.current.innerHTML)  // it means h1 mai jo innerHtml mai likha hoga wo show hoga
  })
  /*  yaha humne <h1> mai newref var liya , it means <h1> tag ki jitni
  bhi properties hai wo isme store ho jayegi.*/

  const HandleHeading = ()=>{
    newRef.current.style.color = 'red';  // jub bhi hum button per click karenge to ye sub h1 ki properties apply hogi
    newRef.current.style.fontFamily = 'cooper';
    newRef.current.style.textAlign = 'center';
    
    //newRef.current.hidden = true; // yaha h1 ki bydefault valye false hogi bt jub bhi hum utton per ckick karenge tub ye h1 hide ho jayega 
  }
  return (
    <div>
      
      <h1 ref={newRef}> Learning Never Ends</h1>
      <button onClick={HandleHeading}>Click Me</button>

    </div>
  )
}
