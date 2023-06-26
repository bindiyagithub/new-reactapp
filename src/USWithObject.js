import React, { useState } from 'react'

export default function USWithObject() {

     const obj = {name:"Bindi" , age:26 , isYoung:true , height:4.5}
     
    const [person , setPerson] = useState(obj)

    const OnChangeData = ()=>{
     // setPerson({name:"Diya" , age:21 ,isYoung:false, height:4.2});
            
     /* only update name  & age:- jub bhi humko koi obj ki ek property
     ki value update karni hoti hai tub setPerson ke ander ek
     previousState name ka fun banaya jisme humare person ka
     jo old data hai wo store hoga ,then spread operator mai 
     ye 4 property story hogi then jo name property hai usko update
     karke "Kumar" ker deta hai. */
          setPerson(previousState => {

               return{
                    ...previousState,
                    name:"Kumar",
                    age:12
               }


          });  
    }


// yaha isYoung:true jo boolean val hai usko string mai convert karna padta hai
  return (
    <div>
     
           <h3> {person.name}  {person.age}  {person.height} 
           {person.isYoung.toString()} 
           </h3>
            <button onClick={OnChangeData} className='btn btn-info ms-2'>OnChange</button>
    </div>
  )
}
