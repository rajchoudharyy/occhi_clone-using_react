import React from 'react'

function Navabr() {
  return (
    <div className='fixed z-[99] w-full px-20 py-10 py-6 flex items-center justify-between'>
        <div className="logo">
            <h2 className='text-4xl tracking-wide uppercase font-semibold font-["Bebas Neue"]'>occhi</h2>
        </div>

        <div className="links flex gap-10">
            {["Services", "Our Work", "About Us", "Insights", "Contact"].map((items, index)=>(
                <a href='#' className={`text-lg font-light ${index === 4 && "ml-20"}`}>{items}</a>
            ))}
        </div>

    </div>
  )
}

export default Navabr