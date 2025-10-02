import React from 'react'
import Posts from './Posts'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

function Feed() {
  return (
    <Box p={2} sx={{backgroundColor:'white'}} flex={4}>
        <Stack spacing={2}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        </Stack>
    </Box>
    
  )
}

export default Feed
