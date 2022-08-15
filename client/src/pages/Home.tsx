import React, { ReactNode } from 'react'
import Form from '../components/Form'
import Question from '../components/Question'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <div className="Landing">
        {/* <img src="/logo.jpg" alt="logo" /> */}
        <h1>Cutom Form Builder</h1>
        </div>
        <Form/>
        <Question/>
    </div>
  )
}

export default Home
