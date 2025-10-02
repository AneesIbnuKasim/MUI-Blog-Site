import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TopicIcon from '@mui/icons-material/Topic';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DateRangeIcon from '@mui/icons-material/DateRange';

const UserBox = styled(Stack)(({theme})=>({

}))

function Add() {
        const [ open, setOpen ] = useState(false)

  return (
    <>
      <Tooltip  title='Add Post' sx={{backgroundColor:'primary.main',color:'default',position:'fixed', bottom:20, left:{xs:"40%",md:30}}}>
        <Fab onClick={()=>setOpen(true)} >
            <AddCircleIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}  onClose={()=>setOpen(false)} >
                <Stack p={5} spacing={4} width={{xs:'98%',sm:600}}  height={500} sx={{backgroundColor:'default',borderRadius:2, position:'absolute', margin:'auto',top:0,left:0,right:0,bottom:0}}>
                    <Typography textAlign={'center'} variant='h4' fontWeight={200} >Create Post</Typography>
                    <UserBox spacing={2} direction={'row'}>
                        <Avatar src='https://randomuser.me/api/portraits/men/28.jpg' />
                        <Typography variant='h6'>John Doe</Typography>
                    </UserBox>
                    <TextField placeholder='Whats on your mind...' variant='standard' multiline rows={5} />
                    <Stack direction={'row'} mb={5} spacing={2}>
                        <EmojiEmotionsIcon color='warning' />
                        <AddPhotoAlternateIcon color='primary'/>
                        <SlideshowIcon color='error'/>
                        <TopicIcon color='success'/>
                    </Stack>
                    <ButtonGroup fullWidth variant='contained' aria-label='primary button group'>
                        <Button>Post</Button>
                        <Button sx={{width:100}} ><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Stack>
      </Modal>
    </>
  )
}

export default Add
