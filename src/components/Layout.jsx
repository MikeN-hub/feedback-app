import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import AboutPage from '../pages/AboutPage'

const Layout = () => {
  return (
    <div className='Layout'>
      <Header />
      <Nav />
      <Outlet />
      <AboutPage />
    </div>
  )
}

export default Layout
