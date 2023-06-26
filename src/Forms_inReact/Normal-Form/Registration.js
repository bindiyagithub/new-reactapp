import React, { useState } from 'react'



export default function Registration() {
     
     const [data , setData] = useState({
          name: "",
          email: "",
          password:"",
          terms : false
     })

     const myChange = (e)=>
        {
          if(e.target.type != "checkbox")
          {
             setData({...data , [e.target.name] : e.target.value});   
          }
          else
          {
            setData({...data , [e.target.name] : e.target.checked});
          }
        }

     

     /* when we click on submit button ,at a time onsubmit event will 
     be fired & we get the data from an api */
     const saveData = (e) =>
     {
          e.preventDefault(); 
          fetch("https://pear-shy-caterpillar.cyclic.app/api/users/signup",{
          method : "post",
          headers :{
               'content-Type' : "Application/json"
          },
          body : JSON.stringify(data)
          })
          .then(y=>y.json())
          .then(y=>
               {
              console.log(y);
              //alert("Registration Successful!");
              alert(JSON.stringify(y, null, 2));
          }) 
     }
     
    return (
    <form onSubmit={saveData}>
     
     <input type="text" name="name" placeholder='Enter Name'  
         value={data.name}  onChange={myChange} />

         <input type="text" name="email" placeholder='Enter Email_Id'
         value={data.email} onChange={myChange} />

         <input type="password" name="password" placeholder='Enter Password' 
         value={data.password} onChange={myChange} /> <br/> <br/>

         <input type='checkbox' name='terms' 
         value={data.terms} onChange={myChange}/>
         Accept all terms & conditions

         <input type="submit" value="Save" className='btn btn-success'/>
     
    </form>
  )
}

  

