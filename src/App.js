import React from 'react'
import { Box } from '@mui/material';
import Header from './components/Header';
import Rent from './components/Rent';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{backgroundColor:"#7862d90d", minHeight:"89.7vh"}}>
        <Rent />
      </Box>
    </div>
  )
}

export default App