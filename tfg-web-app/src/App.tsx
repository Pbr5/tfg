import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import getOllamaResponse from './utils/ollama-calls';
import React, { useState, useEffect } from 'react';

function App() {
  // State to store the LLM response
  const [llmRes, setLlmRes] = useState('Loading...');

  // Fetch LLM response when the component mounts
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await getOllamaResponse('hello, who are you?');
        setLlmRes(response);
      } catch (error) {
        console.error('Error fetching LLM response:', error);
        setLlmRes('Failed to fetch response');
      }
    };

    fetchResponse();
  }, []); // Empty dependency array ensures this runs only once
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <SvgIcon>
              <img src="/assets/logo.svg" alt="Logo" width="24" height="24" />
            </SvgIcon>
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Willow's corner
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 2 }}>
        <h1>Welcome to Willow's corner</h1>
        <p>testing dev</p>
        <p>{llmRes}</p>
      </Box>
    </>
  );
}

export default App;
