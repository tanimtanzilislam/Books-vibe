
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/shared/navbar/Navbar'

export const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}


//MainLayout.jsx