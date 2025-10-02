import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';

function Add() {
        const [ open, setOpen ] = useState(false)

  return (
    <>
      <Tooltip  title='Add Post' sx={{backgroundColor:'primary.main',color:'default',position:'fixed', bottom:20, left:{xs:"40%",md:30}}}>
        <Fab >
            <AddCircleIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} >

      </Modal>
    </>
  )
}

export default Add
