import React from 'react';
import Typography from '@mui/material/Typography';

export default function ListorArray_render(val) {  // here we take val name props
  return (
    <div>
      <Typography variant="h5" className='text-center'> 
        I m a {val.name}  and my ager is: {val.age} years old </Typography>
    </div>
  )
}
