
import * as  Yup from 'yup';
 

 export const Form_YupSchema = Yup.object({
   //  name : Yup.string().min(3 , 'Too Short!').max(20 , 'Too Long!').required('Name is Required'),
  
    name :Yup.string().min(3).max(20).required('Name is Required'),
    email : Yup.string().email('Invalid Email').required(),
    age : Yup.number().min(10).max(50).required('Age Must Be Required'),
    pass : Yup.string().required('Password Must be Required')
    .matches(/^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/ ,'Enter Strong Password'),

    confirm_pass : Yup.string().required('Confirm Password must be required')
    .oneOf([Yup.ref('pass') , null] , 'Password & Confirm Password Does not Match!')

});