import React from 'react'
import Navbar from '../../components/Navbar'

const anshu = () => {
  return (
    <main>
    <Navbar/>
    <div className="flex flex-col items-center justify-center md:mt-28 mt-16">
      <img src="/anshu_image.jpg" className="rounded-full w-40 my-5 " alt="Anshu" />
      <h1 className="text-5xl text-center mb-10 text-white">Resume</h1>
      <p className="text-center text-lg leading-relaxed md:max-w-3xl px-5 text-white">
        Frontend Developer
      </p>
    </div>
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-start gap-20 max-w-4xl">
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <h2 className="text-2xl font-bold whitespace-nowrap text-white">About me</h2>
        </div>
        <div className="flex justify-start md:justify-start w-full md:w-auto">
          <p className="text-lg text-start md:text-left text-white md:mx-0 mx-5 md:py-0 ">
            Highly skilled Front-End Developer with a strong background in web development, 
            specializing in creating dynamic and user-friendly web applications using React, 
            Next.js, and modern JavaScript frameworks. Proven track record of leading projects 
            to successful completion, meeting tight deadlines, and exceeding client expectations. 
            Passionate about leveraging innovative solutions to enhance user experiences and drive business success.
          </p>
        </div>
      </div>
    </div>
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    <div>
      <h2 className="text-3xl text-center mb-10 text-white">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">HTML</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">CSS</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Tailwind CSS</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">JavaScript</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">React</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Node.js</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Next</div>
      </div>
    </div>
    
    <hr className='m-24 md:m-40 border-t-2 border-white-800'/>
    </main>
  )
}

export default anshu
