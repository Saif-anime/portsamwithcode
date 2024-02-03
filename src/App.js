import React from 'react'
import './App.css';
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Card from './components/Card'
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <div className="container w-4/5 mx-auto">
        <Hero />
        {/* About section here  */}
        <section className="text-gray-600 body-font my-20 ">
        {/* <h2 className='text-center mt-6 text-indigo-500 text-3xl md:text-5xl font-bold mb-6'>About 🖥️</h2> */}

          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="https://cdn.pixabay.com/animation/2022/11/10/13/22/13-22-56-246_512.gif" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-indigo-500 text-3xl md:text-5xl  font-bold  mt-4">
                About Me 👦
              </h1>

              <p className="mb-4 mt-4 text-2xl text-justify leading-relaxed">

                I am a Web Developer who just graduated from the Delhi University in B.com. I am a highly skilled professional developer who loves to take on the challenges and then solve them.

                While doing my graduation, I had the pleasure of working for some get new Skills like Videos Editing etc. Now I am work with Gayatri Devi Foundation . I also work with Fiverr as a freelance web developer.
              </p>
              <div className="flex justify-center lg:justify-start mt-2">👉<a target='_blank' href='./saif.pdf' className="px-3 py-2  lg:px-4 lg:py-3 bg-indigo-600 text-gray-900 text-xs font-semibold rounded hover:bg-indigo-500 text-white ">Download Resume</a>  </div>
            </div>

          </div>
        </section>
        <div className="container" id='skills'>
        <Skills />
        </div>
        <div className="container" id='experience'>
       <Experience/>
        </div>

       <div className="container mx-auto" id='project'>
       <h2 className='text-center mt-6 text-indigo-500 text-3xl md:text-5xl mb-10 font-bold '>Projects 🖥️</h2> 
       <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-center">"Crafting seamless digital experiences from server to browser, I harmonize the front-end elegance with back-end robustness as a full-stack developer."</p>
        <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <a href="https://github.com/Saif-anime/food-website-main" target='_blank'>
          <Card title="Foodies App " para = "A UI For foodies app created using ReactJS" main_img = "https://hamna.dev/static/media/foodies.189763faf5c9df0bbe44.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          <a target='_blank' href="https://gdfskills.com/">
          <Card title="GDF Institute Website" para = "Gdf Institute Website created by php jquery ajax." main_img = "./project_img/gdfskills.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          <a href="https://tripoholidays.in/" target='_blank'>
          <Card title="Tripoholiday " para = "Tripoholiday website fully fuctionality for trip website using Laravel framework." main_img = "./project_img/tripoholiday.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          <a href="https://ivartist.com/" target='_blank'>
          <Card title="Ivartist" para = "Ivartist website created by php jquery ajax." main_img = "./project_img/ivartist.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          <a href="http://gdsmis.gdfskills.com/login" target='_blank'>
          <Card title="IMS" para = "IMS created by Python Django and Mysqli." main_img = "./project_img/ims.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          {/* <a href="http://gdsmis.gdfskills.com/login" target='_blank'>
          <Card title="Education Khoj" para = "Education Khoj created by Python Django and Mysqli." main_img = "./project_img/ivartist.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a> */}
          {/* <a href="http://gdsmis.gdfskills.com/login" target='_blank'>
          <Card title="Vivers E-commerce App" para = "Vivers created by Python Django and Mysqli." main_img = "./project_img/ivartist.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a> */}
          <a href="https://samwithcode.in/" target='_blank'>
          <Card title="SamwithCode" para = "Samwithcode created by Laravel and Mysql" main_img = "./project_img/samwithcode.jpg" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          <a href="https://samwithcode.in/" target='_blank'>
          <Card title="Portfolio Website" para = "Portfolio created by Laravel and Mysql" main_img = "./project_img/portfolio.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
          <a href="https://portfolio.samwithcode.in/" target='_blank'>
          <Card title="Anime World" para = "Anime World created by React" main_img = "./project_img/anime.png" footer_img1 = "https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg" footer_img2="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg" footer_img3="https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"/>
          </a>
        
        </div>
       </div>

       <div className="container mx-auto" id='contact'>
        <Contact/>
       </div>
      </div>
    </>
  )
}

export default App