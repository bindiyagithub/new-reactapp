import React, { useState } from 'react'

export default function Custom_Form_Validation() {

   const [name , setName] = useState();
   const [email , setEmail] = useState();
   
   const [nameError , setNameError] = useState(false);
   const [emailError , setEmailError] = useState(false);


   const HandleName = (e)=>{
          let name = e.target.value;
          if(name.length < 3)
          {
               setNameError(true);
          }
          else
          {
               setNameError(false);
          }

          setName(name);
          
   }

   let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   const HandleEmail = (e)=>{
      let email = e.target.value;
         if(!email.match(emailRegex))
         {
            setEmailError(true);
         }
         else
         {
          setEmailError(false);
         }

         setEmail(email);

         
     
     }

     const SubmitData= (e)=>{
            e.preventDefault();
            if( (!name.length < 3) && email.match(emailRegex) )
            {
              // alert("Form has been Submitted!");
              console.log('name = ' + name + ' ' + 'email = ' + email);
            }
            
     }
     
   return (
    <div>
     <h1 className='text-primary mb-2'> Form Validation</h1>
     
     <form onSubmit={SubmitData}>
          <label htmlFor=''>Enter Name: </label>
          <input type='text' name='name' value={name} required
          onChange={HandleName}/>
           <br/>
           { nameError ? <span style={{color : 'red'}}>
            Name Length must be greater than 2 characters </span> : ""}
          
             <br/> <br/>
          <label htmlFor=''>Enter Email: </label>
          <input type='text' name='email' value={email} required
          onChange={HandleEmail}/>  <br/>

          {emailError ? <span style={{color : 'red'}}>Invalid Email</span> : ""}  
          <br/> <br/>

          <input type='submit' value="Submit" />
     </form>
    </div>
  )
}
