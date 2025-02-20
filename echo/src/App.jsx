import { useState } from 'react';

import Header from './components/Header'
import InputMessage from './components/InputMessage'
import OutputMessage from './components/OutputMessage'
import Credit from './components/Credit'

import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || []);

  return (
    <>
      <Header />
      <div className="chatbot">
        <OutputMessage chatMessages={chatMessages} />
        <InputMessage chatMessages={chatMessages} setChatMessages={setChatMessages} />
      </div>
      <Credit />
    </>

  )
}

export default App
