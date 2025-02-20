import Header from './components/Header'
import InputMessage from './components/InputMessage'
import OutputMessage from './components/OutputMessage'
import Credit from './components/Credit'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="chatbot">
        <OutputMessage />
        <InputMessage />
      </div>
      <Credit />
    </>

  )
}

export default App
