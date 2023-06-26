import { useFormik } from 'formik';
import React from 'react';
import { Form_YupSchema } from './Form_YupSchema';

import {Button , TextField} from '@mui/material'




export default function Form_UseFormik() {

    
 // 2nd we use useFormik Hook , it returns an object
      const formik =  useFormik({
          initialValues : {
            name : '',
            email : '',
            age : '',
            pass : '',
            confirm_pass : ''
          },
          
      validationSchema : Form_YupSchema,   // this is for validation which comes from Form_yupSchema.js file
          
         onSubmit : async(values , action)=>{   // yaha values mai jo niche humne form mai onSubmit mai {formik.handleSubmit}  li hai uska sara data get hoker ye values mai ayega
               
               console.log(values);  // yaha name & email dono display hoge
               console.log(values.email)   // only values mai se email show hoga
               console.log(values.age)   // only display age value
               action.resetForm();   // for reset the form
            } 

     })
  return (
     /* jo bhi hum simple form banate hai usme value name ke 
     attribute  = jo state mai
     var ka name liya hai wo.name ese lete hai. for eg {tutorial.name}
     & onChange method mai ek method ko call karte hai, jo method
     humne define ki hoti hai. for eg onChange{Handler}. then form pe bhi
     onSubmit method mai {handleSubmit} esi kuch method ko call karte hai
     jo humne define ki hoti hai.
     
     bt use of useFormik  Hook in our form we dont need to define
     any methods ,  yaha formik ki library mai se handleChange , handleBlur,
      handleSubmit name ki
     methods bydefault call ho h jati hai. & value = {formik.values.name}
     it means formik library mai se jo initialValues hai wo then dot then
     name ese lete hai. yaha jo form pe onSubmit mai method call ki hai
     {formik.handleSubmit} wo define karne ki zarurat nhai hai, wo 
     formik library mai se by default h ati hai. jo form ke data ko 
     get karti hai.
     
     */
    <div className='m-5'>
       <h1> Formik Form </h1>
       <form onSubmit={formik.handleSubmit} >
       

         <TextField sx={{mb:2}}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

         <TextField sx={{mb:2}}
          fullWidth
          id="email"
          name="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField sx={{mb:2}}
          fullWidth
          id="age"
          name="age"
          label="Age"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />

         <TextField sx={{mb:2}}
          fullWidth
          id="pass"
          name="pass"
          label="pass"
          value={formik.values.pass}
          onChange={formik.handleChange}
          error={formik.touched.pass && Boolean(formik.errors.pass)}
          helperText={formik.touched.pass && formik.errors.pass}
        />

         <TextField sx={{mb:2}}
          fullWidth
          id="confirm_pass"
          name="confirm_pass"
          label="confirm_pass"
          value={formik.values.confirm_pass}
          onChange={formik.handleChange}
          error={formik.touched.confirm_pass && Boolean(formik.errors.confirm_pass)}
          helperText={formik.touched.confirm_pass && formik.errors.confirm_pass}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>


          
       </form>
    </div>
  )
}
