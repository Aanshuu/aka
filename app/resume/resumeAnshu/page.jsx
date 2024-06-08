import React from 'react'

const anshu = () => {
  return (
    <main>
      <navbar className="bg-gray-900 text-black py-4 flex">
      <div className="container mx-auto flex justify-between items-center">
      <span className="text-3xl font-bold p-5 text-blue-500 font-urban md:ml-40 text-nowrap">ANSHU</span>
        <div>
          <ul className="flex p-2 md:mr-40">
              <li><a href="#about" className="text-blue-500 hover:text-white px-3 py-2 font-urban">About</a></li>
              <li><a href="#projects" className="text-blue-500 hover:text-white px-3 py-2 font-urban">Projects</a></li>
              <li><a href="#contact" className="text-blue-500 hover:text-white px-3 py-2 font-urban">Contact</a></li>
          </ul>
        </div>
      </div>
    </navbar>
    <div className="flex flex-col items-center justify-center md:mt-40">
      <img src="/anshu_image.jpg" className="rounded-full w-40 my-5 " alt="Anshu" />
      <h1 className="text-5xl text-center mb-10 text-white">Resume</h1>
      <p className="text-center text-lg leading-relaxed md:max-w-3xl px-5 text-white">
        Frontend Developer
      </p>
    </div>
    <hr className='m-40 border-t-2 border-white-800'/>
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-start gap-20 max-w-4xl">
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <h2 className="text-2xl font-bold whitespace-nowrap text-white">About me</h2>
        </div>
        <div className="flex justify-start md:justify-start w-full md:w-auto">
          <p className="text-lg text-start md:text-left text-white">
            I am a web developer with a passion for creating beautiful and functional websites.
            I have experience with HTML, CSS, JavaScript, React, Next and Node.js. I am always
            looking for new projects to work on and new skills to learn.
          </p>
        </div>
      </div>
    </div>
    <hr className='m-40 border-t-2 border-white-800'/>
    <div>
      <h2 className="text-3xl text-center mb-10 text-white">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">HTML</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">CSS</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">JavaScript</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">React</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Node.js</div>
        <div className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full">Next</div>
      </div>
    </div>
    
    <hr className='m-40 border-t-2 border-white-800'/>
    </main>
  )
}

export default anshu
