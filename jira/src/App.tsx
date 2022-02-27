import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import RenderArr from 'renderArr';
import { TsReactTest } from 'test/1.try-use-array';
import { LoginScreen } from 'screens/login';
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated-app';

function App() {
  const { user } = useAuth()
  console.log("user", user);

  return (
    <div className="App">
      {/* <ProjectListScreen />
      <RenderArr />
      <TsReactTest />
      <LoginScreen /> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
