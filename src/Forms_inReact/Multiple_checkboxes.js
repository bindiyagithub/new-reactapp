import React, { useState } from 'react'

export default function Multiple_checkboxes() {

    const [fruitsAry , setFruitsAry] = useState([])
     
     const HandleChange = (e)=>{
             const value = e.target.value;
             const checked = e.target.checked;
             console.log(value , checked); 

             if(checked)  // it means jub bhi chechbox checked hoga tab jo bhi fruits humne select kiye hai wo sub get honge
             {
               setFruitsAry([
                    ...fruitsAry , value
               ])
             }
             else
             {
               // jo bhi fruits checked nahi hoga tub hum jo bhi fruits checked hoge usko  filter karenge 
               setFruitsAry(
                        fruitsAry.filter( e => e !== value )
               );
             }
     }

     const handleSubmit = (e)=>{
          e.preventDefault();
          //console.log(fruitsAry)
          alert(fruitsAry)

     }
  return (
    <div className='m-2'>
     <from onSubmit={handleSubmit}>
          <label htmlFor=''>Select Fruits: &nbsp;</label>

          <input type='checkbox' name='fruits' value="Apple" onChange={HandleChange}/>
          <label htmlFor=''> Apple</label> &nbsp;
          
          <input type='checkbox' name='fruits' value="Banana" onChange={HandleChange}/>
          <label htmlFor=''> Banana</label> &nbsp;
          

          <input type='checkbox' name='fruits' value="Kiwi" onChange={HandleChange}/>
          <label htmlFor=''> Kiwi</label> &nbsp;
          

          <input type='checkbox' name='fruits' value="Grapes" onChange={HandleChange}/>
          <label htmlFor=''> Grapes</label>  <br/> <br/>

          <input type='submit' value="Save" className='btn btn-success ms-2'/>
     </from>
    </div>
  )
}
