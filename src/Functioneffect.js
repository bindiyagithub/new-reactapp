import React, { useEffect, useState } from 'react'

export default function Functioneffect() {

    const[count , setCount] = useState(0)
    let [name , setName] = useState('Bindiya')

    useEffect(()=>{
          console.log("Hello my Value is:" + count);  // isme console mai count ki value 0 hogi
    },[count]); // [] liya it menas humara useEffect fun only count state ko h render hoga

    const addData = ()=>{
     setCount(count+1);
     }

     useEffect(()=>{
           console.log("Hello" + "my name is:" + name);
     },[name])  // jub name state update hoga tub ye useEffect() fun run hoga

    const updateName = ()=>{
     setName(name = 'Arjun');

    }


  return (
    <div>
     <h2>{count}</h2>
     <h1>{name}</h1>
     <button onClick={addData}>Update State</button>
     <button onClick={updateName}>Update Name</button>
    </div>
  )
}
