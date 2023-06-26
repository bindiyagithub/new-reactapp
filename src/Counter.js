import React, {useState} from 'react';
import {Button} from '@mui/material';


export default function Counter() {

     console.log("reload");

     /* here we store 0 in useState() fun which returns an array, it
     destructuring(return) the 2 state(value). 1st- current state(value) 
     2nd- updated state(value).
     here 5 value(which is current value) is stored in data. 
     yaha 5 jo number hai  unki jagah koi
     bhi string ya koi bhi object , array , boolean ho sakte hai. 
     jub hum state ki value 
      change karenge (5 se 6 ese...) to wo updated value 
      setdata( jo ek function hai) mai store hogi  */ 

  const [data,setdata] = useState(5); 


    // let counter = 1;

    const AddCounter = ()=> 
    {
        setdata(data+1);

    }
    const SubCounter = ()=>
    {
      setdata(data-1);
    } 
  const MultiplyCounter = ()=> 
  {
    setdata(data*4);
  }
const DivideCounter = ()=> 
{
  setdata(data/2);

}

  return (
     <div className='d'>
         <h4 className='ms-2 text-danger'> {data}</h4>
         <Button onClick={AddCounter} variant="contained" className='ms-2' 
          color="success">+</Button>
         <Button onClick={SubCounter} variant="contained"
         className='ms-2' color="warning">-</Button>
         <Button onClick={MultiplyCounter} variant="contained" 
         className='ms-2'  color="primary">*</Button>
         <Button onClick={DivideCounter} variant="contained" 
         className='ms-2'  color="error">/</Button>


     
    </div>
  )
}
