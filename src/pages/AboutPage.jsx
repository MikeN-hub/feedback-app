import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card className='about-page'>
      <h2>About this project</h2>
      <p>This is an application for leaving a feedback about something</p>
      <p>version 1.0</p>

      <Link to='/'>back to home</Link>
    </Card>
  )
}

export default AboutPage
