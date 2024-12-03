import { useState } from 'react'
import './App.css'
import User from './components/User'
import Form from './components/Form'
import AgeChecker from './components/AgeChecker'

function App() {

  return (
    <>
      <User />
      <Form />
      <AgeChecker />
    </>
  )
}

export default App
