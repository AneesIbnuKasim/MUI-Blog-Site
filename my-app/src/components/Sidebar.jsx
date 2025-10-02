import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText'
import LayersIcon from '@mui/icons-material/Layers';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'


const StyledListText = styled(ListItemText)(({theme})=>({
    display:'none',
    [theme.breakpoints.up('sm')]:{
        display:'block'
    }
}))

function Sidebar() {
  return (
    <Box p={{xs:0,sm:2}} sx={{backgroundColor:'white', flex:{xs:0.7,sm:1.5,lg:1},height:'100vh'}} >
        <Box position='fixed' >

        <List>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Homepage' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <LayersIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Pages' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <GroupsIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Groups' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <LocalGroceryStoreIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Marketplace' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Friends' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Settings' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <StyledListText primary='Profile' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={''} href='a' >
                    <ListItemIcon>
                    <DarkModeIcon/>
                    </ListItemIcon>
                    <StyledListText>
                    <Switch
  checked={true}
  onChange={''}
  slotProps={{ input: { 'aria-label': 'controlled' } }}
/>
                    </StyledListText>
                </ListItemButton>
            </ListItem>
        </List>
  </Box>
        
        
  </Box>
  )
}

export default Sidebar
