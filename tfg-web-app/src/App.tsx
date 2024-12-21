import React, { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import getOllamaResponse from './utils/ollama-calls';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {
  // State for the user input and model response
  const [userInput, setUserInput] = useState('');
  const [llmRes, setLlmRes] = useState('');

  // Function to handle input submission
  const handleSubmit = async () => {
    if (!userInput.trim()) {
      setLlmRes('Please enter some text.');
      return;
    }

    try {
      setLlmRes('Loading...');
      const response = await getOllamaResponse(userInput);
      setLlmRes(response);
    } catch (error) {
      console.error('Error fetching LLM response:', error);
      setLlmRes('Failed to fetch response');
    }
  };

  // Function to handle "Enter" key press
  const handleKeyPress = (event : any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  // Speech-to-text setup
  const { transcript, resetTranscript } = useSpeechRecognition();
  const startListening = () => {
    resetTranscript(); // Clear the current transcript
    SpeechRecognition.startListening({ continuous: false });
  };

  // Use speech-to-text transcript when user stops speaking
  const handleMicInput = () => {
    setUserInput(transcript); // Set the transcript as input
    handleSubmit(); // Automatically submit the input
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  return (
    <>
      {/* App Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <SvgIcon>
              <img src="/assets/logo.svg" alt="Logo" width="24" height="24" />
            </SvgIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Willow's corner
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" sx={{ p: 2 }}>
        <h1>Welcome to Willow's corner</h1>
        <TextField
          label="Ask something"
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress} // Add "Enter" key listener
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mr: 2 }}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={startListening}>
          🎤 Use Mic
        </Button>
        <Button variant="text" color="primary" onClick={handleMicInput} sx={{ ml: 1 }}>
          Submit Mic Input
        </Button>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>Model Response:</strong>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-wrap' }}>
            {llmRes}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;