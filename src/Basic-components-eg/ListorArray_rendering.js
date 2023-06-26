import React from 'react';
import Typography from '@mui/material/Typography';
import ListorArray_render from './ListorArray_render';

export default function ListorArray_rendering() {

     const students = ["abc" ,"xyz" , "pqr" , "opq"];

     const num  = [2,3,4,5,6,7];

     // 2nd way to render(display) data :- is tarah karne se JSX fast execute ho jati hai.
     const result = students.map((value, index) =>{

           return(<h3 key={index} className='text-center'>
                      {value} 
                  </h3>);
     } );

     // eg of list of an object
     const stds = [{name:"Ali" , age:23}, {name:"Bindi" , age:27}, 
                  {name:"kumar" , age:45} , {name:"Radha" , age:29}]
  return (
    <div>
         {
           /* students.map((value,index)=>{
                   return( <ul key ={index}>
                     <li> {value}</li>
                     </ul>
                    )
              })   */ 

         /* num.map((n , ind)=>{
                   return(<div className='text-center text-info'
                               key={ind}> 
                           {n = n*2} </div>
                         )
          })    */

       /* stds.map((val , index)=>{
          return(<Typography variant="h5" key={index}> 
          I m a {val.name}  and my age is: {val.age} years old </Typography>)
          })   */  


          /* yaha hum data rendering ke liye ek alag se component banaker 
          wo component ko yaha call karvaker bhi ker sakte hai(using props)
          here we make ListorArray_rander.js component for it */

           stds.map((val , index)=>
           {
                return(<ListorArray_render val = {val} key={index}/>)
           })    
          
          }

         {/* {result} */}
    </div>
  )
}
