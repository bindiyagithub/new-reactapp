import React, { useState } from 'react'

export default function USWithString() {

     const [name , setname]= useState("Bindiya")

     const ChangeName = ()=>{
          setname("Arjun")
     }
  return (
    <div>

         <h1 className='text-center text-primary'>{name} </h1>
         <button onClick={ChangeName} className='btn btn-outline-danger rounded-pill ms-5'>
          Change Name</button>
    </div>
  );
}
