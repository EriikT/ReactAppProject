import React from 'react';
import './App.css';
import DataDisplay from './DataDisplay';

function App() {

  const wordToDisplay = "Word to be displayed";

  return (
    <>
      <div className='title'>
        <h1>Cyrus Testing</h1>
      </div>
      <div className='WordContainer'>
        <DataDisplay content={wordToDisplay} />
      </div>
    </>
  );
}
export default App;