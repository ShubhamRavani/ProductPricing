import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className=" divide-y divide-gray-200">
      <Navbar />
      <div className=' flex ' >
          <div className=' w-[20%]'>
          <Sidebar />
          </div>
          <div className=' w-[80%]'>
          <Body />

          </div>
          
      </div>
      {/* <Body />
      <Sidebar /> */}
      
    </div>
  )
}
