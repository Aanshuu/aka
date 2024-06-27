import React from 'react'
import Navbar from '../../components/Navbar'

const krishna = () => {
  return (
    <main>
      <Navbar/>
    <div className="flex flex-col items-center justify-center md:mt-28 mt-16">
      <img src="/krishna_image.jpg" className="rounded-full w-40 my-5 " alt="Anshu" />
      <h1 className="text-5xl text-center mb-10 text-blue-500">Krishna</h1>
      <p className="text-center text-lg leading-relaxed md:max-w-3xl px-5 text-blue-300">
        Management & Marketing
      </p>
    </div>
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-start gap-20 max-w-4xl">
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <h2 className="text-2xl font-medium whitespace-nowrap text-blue-500">About me</h2>
        </div>
        <div className="flex justify-start md:justify-start w-full md:w-auto">
          <p className="text-lg text-start md:text-left text-white md:mx-0 mx-5 md:py-0">
          I am a dynamic Management and Marketing professional passionate about building strong 
          brand identities and engaging with diverse audiences. With extensive experience in 
          marketing, sales, and management, I excel at driving growth and delivering impactful 
          results. Continuously seeking new challenges and opportunities for growth, I am 
          committed to enhancing my skills and contributing to innovative projects.
          </p>
        </div>
      </div>
    </div>
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    <div>
      <h2 className="text-3xl text-center mb-10 font-medium text-blue-500">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Brand Development</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Marketing Strategy</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Project Management</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Digital Marketing</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Communication</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Analytics</div>
      </div>
    </div>
    
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    </main>
  )
}

export default krishna
