import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbacks, feedbackDelete }) {
  if (!feedbacks || feedbacks.lengh === 0) {
    return <p>'no feedback'</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              feedbackDelete={feedbackDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedbackList
