import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';   // for icon
import PhotoCamera from '@mui/icons-material/PhotoCamera';  // for camara icon
import Stack from '@mui/material/Stack';   // for camara icon
import DeleteIcon from '@mui/icons-material/Delete';  // for delete-icon button
import SendIcon from '@mui/icons-material/Send';  // for dend-icon button

import AlarmIcon from '@mui/icons-material/Alarm';  // for alaram-watch icon
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // for add-to-cart
import Fingerprint from '@mui/icons-material/Fingerprint'; // for finger-print
// for add-to cart icon



export default function  Btn_Typs()
{
  return (
    <>
      <div className='m-2'>
        <Button variant="contained" className='me-3'>Hello World</Button>
        <Button variant="text" className='me-3'>Text</Button>
        <Button variant="outlined">Outlined</Button>
      </div>

      <div className='mt-3'>
        <Button className='me-3'>Primary</Button>
        <Button disabled className='me-3'>Disabled</Button>
        <Button href="#text-buttons" className='me-3'>Link</Button>
      </div>

      <div className='mt-3'>
        <Button color="secondary" className='me-3'>Secondary</Button>
        <Button variant="contained" color="success" className='me-3'>Success</Button>

        <Button variant="outlined" color="error" className='me-3'>Error</Button>
      </div>

      <div className='mt-3 mx-3'>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <IconButton color="dark" aria-label="upload picture"
            className='me-2' component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>

          <IconButton color="secondary" className='me-2' aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>

        </Stack>

        <div className='m-3'>
          <Button variant="outlined" startIcon={<DeleteIcon />} className='me-2'>
            Delete</Button>
          <IconButton aria-label="delete" className='me-2'><DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary"><DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="small" />
          </IconButton>


          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>

        <div className='mt-2'>
        <IconButton aria-label="fingerprint" className='me-2' color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
        </div>

      </div>
    </>

  )
}
