import React from 'react'
import Posts from './Posts'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

function Feed() {

  return (
    <Box p={2} flex={4}>
        <Stack spacing={2}>
        <Posts />
        </Stack>
    </Box>
    
  )
}

const post = [{
    no:1,
    userSrc:'https://randomuser.me/api/portraits/men/75.jpg',
    username:'john',
    cardSrc:'https://picsum.photos/200/300?random=22',
    cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
  },
  {
    no:2,
    userSrc:'https://randomuser.me/api/portraits/men/5.jpg',
    username:'david lay',
    cardSrc:'https://picsum.photos/200/300?random=11',
    cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
  },
  {
    no:3,
    userSrc:'https://randomuser.me/api/portraits/men/25.jpg',
    username:'dimitri',
    cardSrc:'https://picsum.photos/200/300?random=13',
    cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
  },
  {
    no:4,
    userSrc:'https://randomuser.me/api/portraits/men/44.jpg',
    username:'juan ivan',
    cardSrc:'https://picsum.photos/200/300?random=18',
    cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
  },
  {
    no:5,
    userSrc:'https://randomuser.me/api/portraits/men/15.jpg',
    username:'nimaan hil',
    cardSrc:'https://picsum.photos/200/300?random=30',
    cardBody:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptate necessitatibus magni sequi itaque, ipsam corporis veniam error numquam vero eveniet labore a, iusto eligendi at autem repudiandae non ea?'
  },]

export default Feed
