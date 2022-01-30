import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const [inputText, setInputText] = useState('')
  const [rating, setRating] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const inputChangeHandler = (e) => {
    if (inputText === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (inputText !== '' && inputText.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('your review must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setInputText(e.target.value)
  }

  return (
    <Card className='feedback-form'>
      <form>
        <h2>How would you rate our service?</h2>
        <RatingSelect />
        <div className='input-group'>
          <input
            onChange={inputChangeHandler}
            value={inputText}
            type='text'
            placeholder='Write a review'
          />
          <Button type='submit' version='secondary' isDesabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
