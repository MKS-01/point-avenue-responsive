import React from 'react';
import Button from './components/button';
import './App.css';
import Passage from './components/passage';

function App() {
  return (
    <div className='App'>
      <div className='body'>
        <div className='header'>
          <Button text={'Create'} />
          <Button text='Remove' />
        </div>
        <Passage />
      </div>
    </div>
  );
}

export default App;
