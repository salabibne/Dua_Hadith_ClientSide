
import { Outlet } from 'react-router-dom'
import './App.css'
import SideNavigation from './SideNavigation/SideNavigation'
import Heading from './Heading/Heading'


function App() {

  return (
    <>
      <Heading></Heading>

      <SideNavigation></SideNavigation>


      <Outlet></Outlet>

    </>
  )
}

export default App
