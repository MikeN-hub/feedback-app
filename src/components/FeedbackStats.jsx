import PropTypes from 'prop-types'

function FeedbackStats({ feedbacks }) {
  const calculateAvarageRate = (arr) => {
    return (
      arr.reduce((total, current) => {
        return total + current.rating
      }, 0) / feedbacks.length
    )
  }

  let avg = calculateAvarageRate(feedbacks)
  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h3>{feedbacks.length} Rewiews</h3>
      <h3>Average rating: {isNaN(avg) ? 0 : avg}</h3>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
}

export default FeedbackStats
