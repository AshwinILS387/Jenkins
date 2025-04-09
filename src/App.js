import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare state variables
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Handle the input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Handle the button click event
  const handleButtonClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React App</h1>
        <div>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={handleInputChange} 
            className="input-field"
          />
          <button onClick={handleButtonClick} className="btn">
            Greet Me
          </button>
        </div>
        {greeting && <p>{greeting}</p>}
      </header>
    </div>
  );
}

export default App;
