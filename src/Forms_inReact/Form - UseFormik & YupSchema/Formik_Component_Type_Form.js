import React, { useState } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

// here we use Formik-components like <Formik> ,<Field> , <Form>

export default function Formik_Component_Type_Form() {

  //  for display form data on webpage  , we use useState

  // const[formData , setFormData] = useState({})


  // for form validation we create one schema here
  const NewValidations = yup.object({
    firstName: yup.string().required('F_Name must be Required').min(3).max(20),
    lastName: yup.string().required('L_Name must be Required').min(3).max(20),
    age : yup.number().required('Age must be Required').min(10).max(50),
    email: yup.string().required('Email must be Required').email('Invalid Email'),
    password: yup.string().required('Password Must be Required')
    .matches(/^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/ ,'Enter Strong Password'),  

     gender: yup.string().required('Gender must be Required'),
     hobby : yup.array().min(1),
     country : yup.string().required(),
     comments : yup.string().max(300).required()
  })

  return (
    <div>
     <h1 className='text-center text-danger mb-3'>Formik Form</h1>

    <Formik
       
      initialValues= {{
        firstName: '',
        lastName: '',
        age : '',
        email: '',
        password: '',
        toggle: false,   // for single checkbox
        hobby: [],      // for multiple checkbox
        gender: '',       // for radio button
        country:'',        // for dropdown
        comments:''  // for textarea
      }}

      validationSchema={NewValidations}   // for form validations

      onSubmit={async (values) => 
      {
        await new Promise((r) => 
        setTimeout(r, 500));
        console.log(values);
        //alert(JSON.stringify(values, null, 2));

        // setFormData(values)  // for display the formdata 
        
      }}
    >

   {
      ({ values , errors , touched }) => (
      <Form>
        <div className='container m-5'>
        <label htmlFor="firstName">First Name : &nbsp;</label>
        <Field  type='text' id="firstName" name="firstName" placeholder="Enter Firstname..." />
          
        {touched.firstName && errors.firstName && 
        <div className='text-danger'>{errors.firstName}</div>
        }
          
        <br/> <br/>

        <label htmlFor="lastName">Last Name : &nbsp;</label>
        <Field type='text' id="lastName" name="lastName" placeholder="Enter Lastname..." />
        
        {touched.lastName && errors.lastName && 
        <div className='text-danger'>{errors.lastName}</div>
        }

        <br/> <br/>
        <label htmlFor="age">Age : &nbsp;</label>
        <Field type='number' id="age" name="age" placeholder="Enter Age..." />

        {touched.age && errors.age && 
        <div className='text-danger'>{errors.age}</div>
        }
        <br/> <br/>
        <label htmlFor="email">Email : &nbsp;</label>
        <Field  id="email" name="email" placeholder="Enter Email...."
          type="email"/>

          {touched.email && errors.email && 
        <div className='text-danger'>{errors.email}</div>
        } 
          <br/> <br/> 

          <label htmlFor="password">Password : &nbsp;</label>
        <Field  id="password" name="password" placeholder="Enter password...."
          type="password"/>

          {touched.password && errors.password && 
        <div className='text-danger'>{errors.password}</div>
        } 
          <br/> <br/> 

           
          <label className='ms-2'>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          <br/> <br/>

          <div id="checkbox-group" className='ms-2'>Hobbies : &nbsp;</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hobby" value="cricket" /> 
              Cricket
            </label> &nbsp;
            <label>
              <Field type="checkbox" name="hobby" value="hockey" /> 
              Hockey
            </label> &nbsp;
            <label>
              <Field type="checkbox" name="hobby" value="kho-kho" /> 
              Kho-Kho
            </label>
          </div> 
          
          {touched.hobby && errors.hobby && 
            <div className='text-danger'>{errors.hobby}</div>
          } 

          <br/>

          <div id="my-radio-group" className='mt-2'>Gender : &nbsp;</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label> &nbsp;
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
            {/* <div>The gender is: {values.gender}</div> */}
          </div> 
          
          {touched.gender && errors.gender && 
            <div className='text-danger'>{errors.gender}</div>
          } 
          <br/> 

          <label htmlFor=''> Country : &nbsp; 
              
            <Field type="radio" name="country" as='select'>
              <option value=''>Select</option>
                 <option value="Canada"> Canada</option>
                 <option value="USA"> USA</option>
                 <option value="UK"> UK </option>
            </Field>
              
          </label> 
          {touched.country && errors.country && 
            <div className='text-danger'>{errors.country}</div>
          } 
          <br/> <br/>

          <label htmlFor=''> Comments : &nbsp; 
            <Field  as='textarea' name='comments'/>
          </label> 
          
          {touched.comments && errors.comments && 
            <div className='text-danger'>{errors.comments}</div>
          } 
          <br/> <br/>


        <button type="submit" className='ms-2 btn btn-primary'>Submit</button>
        </div>
      </Form> )
    }
      </Formik>

       
      {/* <h3>{JSON.stringify(formData)}</h3>   */}
    </div>
  );
}
