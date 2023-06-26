import React, { useState } from 'react'

export default function ControlledForm() {
 const [data , setData] =  useState({
  name:"" , 
  email:"" ,
  comments:"" ,
  countries:"" ,
  terms:false
});

  /* here data is an object(obj of name & email)  
   & setData is a function on which we update our value by using onChange event */
 const Handler = (e)=>{

   // console.log(e.target.name);   // yaha jo bhi text box mai likhenge uska name display hoga
   // console.log(e.target.value);   // yaha wo textbox ki value denge wo store hogi=data.name or data.image mai se value milegi
     
   if(e.target.type != "checkbox")
          {
             setData({...data , [e.target.name] : e.target.value});   
          }
          else
          {
            setData({...data , [e.target.name] : e.target.checked});
          }
   
}

 const SubmitData = (e)=>{
    e.preventDefault();
   // console.log(e);
  
   console.log(data);   // yaha jo name & email , contries etc textbox mai enter karenge wo object display hoga , wo obj data mai store kiya hai
   
  alert(JSON.stringify(data, null, 2));
  
  }

  // here &nbsp; means non breakable space
  return (
    <div className='m-3'>
     
     <form onSubmit={SubmitData}>
      
      <label htmlFor=''> Enter Name : &nbsp; </label>
      <input type='text'  name='name' value={data.name} onChange={Handler}/>
       <br/> <br/>
      <label htmlFor=''> Enter Email : &nbsp; </label> 
      <input type='text'  name='email' value={data.email} onChange={Handler}/><br/> <br/> 
      
      <textarea name='comments' id='' value={data.comments}  onChange={Handler}
      cols="30" rows="4" placeholder='Comments here....' ><br/> <br/>
      </textarea> <br/> <br/>

      <label htmlFor=''>Select Country: &nbsp;</label>
          <select name='countries' value={data.countries} onChange={Handler}>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="U.K">U.K</option>
            <option value="USA">USA</option>    
            
          </select> <br/> <br/>

          <input type='checkbox' name='terms' value ={data.terms} 
          onChange={Handler}/> 
          <label htmlFor=''>Yes I Agree The Terms &nbsp;</label>
           
          <br/> <br/>
          
        <input type='submit' value="Submit" className='btn btn-primary w-25' />
     </form>
    </div>
  )
}
