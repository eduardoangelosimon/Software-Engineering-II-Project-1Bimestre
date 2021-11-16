import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form'
import { LoginPage } from './modules/LoginPage';

export function App() {
  return (
    <>
      <LoginPage></LoginPage>
      <Form></Form>
    </>

  );
}

export default App;