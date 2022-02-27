import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import RenderArr from 'renderArr';
import { TsReactTest } from 'test/1.try-use-array';
import { LoginScreen } from 'screens/login';

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <RenderArr />
      <TsReactTest />
      <LoginScreen />
    </div>
  );
}

export default App;
