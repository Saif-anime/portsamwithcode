import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="pr-4 pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="project-card">
                    <div className="content_img">
                        <img src={props.main_img} alt={props.title} />
                    </div>
                    <div className="content">
                        <h5 className='font-bold text-indigo-500'>{props.title}</h5>
                        <p>{props.para}</p>
                    </div>
                    <div className="project-tech flex">

                        <img src={props.footer_img1} alt={props.title} />


                        <img src={props.footer_img2} alt={props.title} />


                        <img src={props.footer_img3} alt={props.title} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card