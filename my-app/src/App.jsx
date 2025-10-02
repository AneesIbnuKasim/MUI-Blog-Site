import Box from "@mui/material/Box"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar"
import Sidebar from "./components/Sidebar"
import Stack from "@mui/material/Stack"
import CssBaseline from "@mui/material/CssBaseline"
import Add from "./components/Add"
import { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"

function App() {

  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      navbar:{
        main:'rgb(230, 51, 6)'
    },
      mode:mode
    }
  })

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <Box bgcolor={'background.default'} color={'text.primary'} >
    <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar mode={mode} setMode={setMode} />
        <Feed/>
        <RightBar/>
        <Add/>
      </Stack>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default App
