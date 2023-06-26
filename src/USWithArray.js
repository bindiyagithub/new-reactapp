import React, { useState } from 'react'

export default function USWithArray() {

     let num = [11,22,33,44];
      let [numbers , setNumbers] = useState(num);  // here inside the numbers num name array will be stored. 

      let changList = () =>{
          //setNumbers([10,20,30,40]);   // for update all array value

          /*  for add new values in array*/
          setNumbers(preVal =>{
               return[ 
                    ...preVal,
                    98 , 34 ,38
               ]
          })
 
      }
  return (
    <div>
         <ul> {numbers.map((value , index)=>
                      <li key = {index}> {value} </li>
                      
         )} 
          </ul>

         <button onClick={changList} className='btn btn-success ms-2'>Change Array Value</button>
    </div>
  )
}
