import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import RenderArr from 'renderArr';

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <RenderArr />
    </div>
  );
}

export default App;
