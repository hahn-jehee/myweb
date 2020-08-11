import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'
function App() {
  return (
    <div>
    <p> hahn-jehee </p>
    <Button Primary> hi </Button>
    <Progress percent = {33} indicationg/>
    </div>
  );
}

export default App;
