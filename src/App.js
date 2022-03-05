import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Routes, Route } from 'react-router-dom'
import FeedbackData from './data/Feedbackdata'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Nav from './components/Nav'

const App = () => {
  const [headerTitle, setHeaderTitle] = useState('Feedback UI')
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  const feedbackDelete = id => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedbacks(feedbacks.filter(item => item.id !== id))
    }
  }
  const feedbackAdd = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedbacks([newFeedback, ...feedbacks])
  }

  return (
    <div className='App'>
      <Header headerTitle={headerTitle}></Header>
      <Nav />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm feedbackAdd={feedbackAdd} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  feedbackDelete={feedbackDelete}
                ></FeedbackList>
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </div>
  )
}

export default App
