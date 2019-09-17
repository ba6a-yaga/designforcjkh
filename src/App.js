import React from 'react';
import bg from './assets/images/index.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-background">
          <img src={bg} alt="back" />
        </div>
      </header>
    </div>
  );
}

export default App;
