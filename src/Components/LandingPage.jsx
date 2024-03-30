import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-900 text-white pt-2'>
            <div className='hero-title mt-40 px-20'>
                {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return <div className='masker'>
                        <div className="w-fit flex gap-4">
                            {index === 1 && (<div className='w-[10vw] h-[6vw] bg-green-600 rounded-[.6vw] overflow-hidden relative'>
                                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </div>)}
                            <h1 className='font-["Bebas_Neue"] text-[8.4vw] leading-[7vw]'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>

            <div className="border-t-[1px] border-zinc-600 mt-32 flex justify-between px-20 pt-5">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return <h2>{item}</h2>
                })}

                <div className="startbtn flex gap-2">
                    <div className="px-4 py-1 border-[2px] border-zinc-300 uppercase rounded-full">
                        Start the Project
                    </div>
                    <div className="icon py-2 px-2 border-[2px] border-zinc-300 rounded-full">
                        <MdArrowOutward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage