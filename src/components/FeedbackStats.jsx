import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  const calculateAvarageRate = (arr) => {
    return (
      arr.reduce((total, current) => {
        return total + current.rating
      }, 0) / feedback.length
    )
  }

  let avg = calculateAvarageRate(feedback)
  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h3>{feedback.length} Rewiews</h3>
      <h3>Average rating: {isNaN(avg) ? 0 : avg}</h3>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
