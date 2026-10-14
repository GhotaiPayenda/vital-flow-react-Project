import React from 'react'

export default function Hero() {
  return (
    <>
        <section className='flex flex-col justify-between items-center p-5 gap-13 '>
            <div className='flex flex-col gap-5 '>
                <span>5.0 ⭐⭐⭐⭐⭐(980 Reviews)</span>
                <h1 className='text-6xl '>Partner in health and wellness</h1>
                <p>Providing advanced healthcare solutions with a compassionate touch for every patient.</p>
                <div className='flex gap-2 '>
                    <button className='bg-blue-600 text-white rounded-3xl p-3 pb-1.5 pt-1.5  '>Book a call</button>
                    <button>Watch video</button>
                </div>
                <div>
                    {/* <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" /> */}
                    <div>
                        <p className='font-medium '>5,000+ appointments</p>
                        <span className='text-gray-500 '>Patients booked already</span>
                    </div>
                </div>
            </div>


            <div className='w-full h-120 rounded-4xl bg-cover bg-center ' 
             style={{
    backgroundImage:
      'url("https://framerusercontent.com/images/RiukRfppKWATQjdvnvRv1Rm48.jpg?scale-down-to=1024")',
  }}>

    
                
            </div>
        </section>

    </>
  )
}
