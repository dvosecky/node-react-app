import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  const [text, setText] = useState('making API call...')
  
  useEffect(() => {
    fetch('/api/hello').then((res) => {
      return res.text()
    }).then((msg) => {
      setText(msg)
    }).catch((err) => {
      setText(err.message)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
      </header>
    </div>
  );
}

export default App;
