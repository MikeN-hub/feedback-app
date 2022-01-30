import React, { useState } from 'react'
import FeedbackData from './data/Feedbackdata'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

const App = () => {
  const [headerTitle, setHeaderTitle] = useState('Feedback UI')
  const [feedback, setFeedback] = useState(FeedbackData)

  const feedbackDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <div className='App'>
      <Header headerTitle={headerTitle}></Header>
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          feedbackDelete={feedbackDelete}></FeedbackList>
      </div>
    </div>
  )
}

export default App
