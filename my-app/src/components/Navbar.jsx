import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BiotechIcon from '@mui/icons-material/Biotech';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

const IconStack = styled(Stack)(({theme})=>({
  alignItems:'center',
}))

function Navbar() {
  const [ menuOpen, setMenuOpen ] = useState(false)

return (
  <>
    <AppBar position='sticky'>
      <Toolbar sx={{backgroundColor:'info.light',display:'flex',justifyContent:'space-between'}} >
        <Stack direction={'row'} sx={{alignItems:'center'}} spacing={1}>
          <BiotechIcon fontSize='large' />
          <Typography sx={{display:{xs:'none',sm:'block'}}}  variant='h6'>TekNow</Typography>
        </Stack>
      <InputBase startAdornment={<SearchIcon/>} sx={{backgroundColor:'white',p:{xs:0.2,sm:0.5,md:0.6},width:'40%'}} placeholder='Search'  />
      <IconStack direction={'row'} spacing={2} >
       <Stack direction={'row'} spacing={2} sx={{display:{xs:'none',sm:'flex'}}}>
       <Badge badgeContent='4' color='error'>
        <MailIcon/>
        </Badge>
        <NotificationsIcon/>
       </Stack>
        <IconButton onClick={()=>setMenuOpen(true)}>
        <Avatar sx={{ width: 36, height: 36,  }} src="https://avatar.iran.liara.run/public"  />
          </IconButton> 
      </IconStack>
      </Toolbar>
      <Menu 
      open={menuOpen}
      anchorOrigin={{
        vertical:'top',
        horizontal:'right'
      }}
      onClose={()=>setMenuOpen(false)}
      >
      <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </AppBar>
    </>
  )
}

export default Navbar
