import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';



const buttons = [
     <Button key="one">One</Button>,
     <Button key="two">Two</Button>,
     <Button key="three">Three</Button>,
   ];

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
     //    display: 'flex',
     //    flexDirection: 'column',
     //    alignItems: 'center',
     //    '& > *': {
     //      m: 1,
     //    },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group"
      className='me-4'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button> 
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group" className='me-4'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical"  className='me-4'
      aria-label="vertical outlined button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="vertical contained button group"
        variant="contained" className='me-4'>
         {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}