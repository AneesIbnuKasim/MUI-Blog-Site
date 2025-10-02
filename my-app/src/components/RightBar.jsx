import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

function RightBar() {
  return (
    <Box p={2} sx={{ display:{xs:'none',md:'block'}}} flex={2}>
        <Box position={'fixed'}>
        <Stack spacing={1}>
            <Typography variant='h6' fontWeight={200} >Online Friends</Typography>
            <AvatarGroup max={6} >
                <Avatar src='https://randomuser.me/api/portraits/men/75.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/22.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/7.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/54.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/53.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/58.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/59.jpg' />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={200} >Latest Photos</Typography>
            <ImageList cols={3} variant='quilted' rowHeight={100} gap={3} >
                <ImageListItem>
                    <img src="https://picsum.photos/200/200?random=1" alt="img" loading='lazy' />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://picsum.photos/200/200?random=2" alt="img" loading='lazy' />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://picsum.photos/200/200?random=3" alt="img" loading='lazy' />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://picsum.photos/200/200?random=4" alt="img" loading='lazy' />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://picsum.photos/200/200?random=5" alt="img" loading='lazy' />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://picsum.photos/200/200?random=6" alt="img" loading='lazy' />
                </ImageListItem>
            </ImageList>
            <Typography variant='h6' fontWeight={200} >
                Latest Conversations
            </Typography>
            {/* ------------Conversation---------- */}
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/28.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/33.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/35.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Stack>
        </Box>
    </Box>
  )
}

export default RightBar
