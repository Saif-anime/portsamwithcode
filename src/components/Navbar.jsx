import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-indigo-500">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl text-white">Saif</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 cursor-pointer text-white hover:text-gray-900">Home</a>

                        <a href='#skills' className="mr-5 cursor-pointer text-white hover:text-gray-900">Skills</a>
                        <a href='#experience' className="mr-5  cursor-pointer text-white hover:text-gray-900">Experience</a>
                        <a href='#project' className="mr-5  cursor-pointer text-white hover:text-gray-900">Projects</a>
                        <a href='#contact' className="mr-5  cursor-pointer text-white hover:text-gray-900">Contact</a>
                        <a href='./saif.pdf' target='_blank' className="cursor-pointer text-white inline-flex items-center ml-4">Resume
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </nav>

                </div>
            </header>

        </>
    )
}

export default Navbar