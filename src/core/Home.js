import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { API } from "../backend"
import Base from './Base';
function Home() {
  console.log("Api is ", API)
  return (
    <Box>
      <Base title={'Home Page'}>

      </Base>
    </Box>
  )
}

export default Home