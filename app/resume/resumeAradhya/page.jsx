import React from 'react'
import Navbar from '../../components/Navbar'

const aradhya = () => {
  return (
    <main>
      <Navbar/>
    <div className="flex flex-col items-center justify-center md:mt-28 mt-16">
      <img src="/aradhya_image.jpg" className="rounded-full w-40 my-5 " alt="Anshu" />
      <h1 className="text-5xl text-center mb-10 text-blue-500 ">Aradhya</h1>
      <p className="text-center text-lg leading-relaxed md:max-w-3xl px-5 text-blue-300">
        UI/UX Developer
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
          I am a passionate UI/UX designer dedicated to crafting intuitive, 
          engaging, and visually compelling user experiences. I excel at 
          transforming complex ideas into user-friendly designs that exceed 
          expectations. With a strong foundation in design principles and 
          user-centered methodologies, I create digital solutions that are both aesthetically 
          pleasing and highly functional. My mission is to bridge the gap 
          between users and technology, ensuring every interaction is smooth and enjoyable.
          </p>
        </div>
      </div>
    </div>
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    <div>
      <h2 className="text-3xl text-center mb-10 font-medium text-blue-500">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Figma</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">User Research and Analysis</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Wireframing and Prototyping</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Visual Design</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Interaction Design</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Responsive Design</div>
      </div>
    </div>
    
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    </main>
  )
}

export default aradhya
