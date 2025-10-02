import Box from '@mui/material/Box'
import React from 'react'

function RightBar() {
  return (
    <Box p={2} sx={{backgroundColor:'red', display:{xs:'none',md:'block'}}} flexGrow={2}>
        hi
    </Box>
  )
}

export default RightBar
