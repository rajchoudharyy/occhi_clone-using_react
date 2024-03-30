import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
        <div className='marquee w-full bg-[#004D43] py-20 rounded-ss-[2vw] rounded-se-[2vw]'>
            <div className="text py-4 border-t-2 border-b-2 border-zinc-400 flex items-center justify-center gap-10 whitespace-nowrap overflow-hidden">
                <motion.h1 initial={{x:0}} animate= {{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:14}}  className='text-[22vw] font-bold text-white leading-none font-["Bebas_Neue"] '>We Are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate= {{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:14}}  className='text-[22vw] font-bold text-white leading-none font-["Bebas_Neue"] '>We Are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate= {{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:14}}  className='text-[22vw] font-bold text-white leading-none font-["Bebas_Neue"] '>We Are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee