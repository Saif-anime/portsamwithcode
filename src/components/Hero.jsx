import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font my-20 ">
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-indigo-500 text-3xl md:text-5xl  font-bold mb-10 ">
                            Hi, I'm Saif 👋
                        </h1>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'I am a Developer By Passion, Coder By Profession.',
                                1000,
                                'I am a Freelancer.',
                                1000,
                                'I am a Python Developer.',
                                1000,
                                'I am Laravel Developer.',
                                1000,
                                'I am Full Stack Developer.',
                                1000,
                                'I am React js Developer.',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '1.5em' }}
                            repeat={Infinity}
                        />
                        <p className="mb-10 text-2xl text-justify  mt-10 leading-relaxed">A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.
                    
                        </p>
                        <div className="flex justify-center lg:justify-start mt-2"><a target='_blank' href='https://github.com/Saif-anime' className="px-3 py-2 lg:px-4 lg:py-3 text-gray-100 bg-gray-900 text-xs font-semibold rounded">Explore Github</a><button className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded ">Explore Blog</button></div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://cdn.elearningindustry.com/wp-content/uploads/2020/10/what-are-the-benefits-of-animation-based-learning.jpg" />
                    </div>
                </div>
            </section>
            

        </>
    )
}

export default Hero