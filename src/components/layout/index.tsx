import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

export const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />
      <main className='flex-grow pt-16'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
