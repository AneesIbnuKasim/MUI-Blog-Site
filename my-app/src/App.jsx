import Box from "@mui/material/Box"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar"
import Sidebar from "./components/Sidebar"
import Stack from "@mui/material/Stack"
import CssBaseline from "@mui/material/CssBaseline"
import Add from "./components/Add"

function App() {

  

  return (
    <>
    <CssBaseline/>
    <Box>
    <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar/>
        <Feed/>
        <RightBar/>
        <Add/>
      </Stack>
    </Box>
    </>
  )
}

export default App
