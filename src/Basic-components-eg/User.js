import React from 'react'

let name = "Bindiya Virani";
const obj = {name:"Radha" , age:"26"};

let a = 10;
let msg = "";
if(a > 5)
{
   msg ="yes";        
}
else{
     msg = "no";
}

 function User() {
  return (
    <div className='App'>
     <h1> Hello </h1>
     <h2>{name}</h2>
     <h3> {5+6} </h3>
     <h4> 9+3 </h4> 
     <h4>{obj.name}</h4>
     <h1>{msg}</h1> 
     
     </div>
  );
}

export default User;
