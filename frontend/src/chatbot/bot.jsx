// src/components/Chatbot.js

import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';

// Define chatbot steps
const steps = [
  {
    id: '1',
    message: 'Hello! I am your portfolio assistant. How can I help you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 1, label: 'Tell me about yourself', trigger: 'about' },
      { value: 2, label: 'Show me your projects', trigger: 'projects' },
      { value: 3, label: 'Contact information', trigger: 'contact' },
    ],
  },
  {
    id: 'about',
    message: 'I am a passionate developer with a love for continuous learning and innovation...',
    end: true,
  },
  {
    id: 'projects',
    message: 'Here are some of my projects: Project A, Project B, Project C...',
    end: true,
  },
  {
    id: 'contact',
    message: 'You can reach me at: abhishek699.roy@gmail.com',
    end: true,
  },
];

// Customize chatbot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#1976d2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#1976d2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Chatbot = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => setOpen(!open)}
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <ChatIcon />
      </IconButton>
      {open && (
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} floating={true} />
        </ThemeProvider>
      )}
    </div>
  );
};

export default Chatbot;


