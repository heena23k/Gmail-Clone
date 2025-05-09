import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Inbox from './components/Inbox'

function App() {
 
  return (
    <div className='bg-[#F6F8FC] h-screen '>
    <Navbar/>
    <div className='flex'>
    <Sidebar/>
    <Inbox/>
    </div>
    
    </div>
  )
}

export default App
