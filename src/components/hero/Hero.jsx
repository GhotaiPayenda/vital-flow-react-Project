import React from 'react'

export default function Hero() {
  return (
    <>
        <section className='flex flex-col justify-between items-center p-10 gap-13 '>
            <div>
                <span>5.0 ⭐⭐⭐⭐⭐(980 Reviews)</span>
                <h1>Partner in health and wellness</h1>
                <p>Providing advanced healthcare solutions with a compassionate touch for every patient.</p>
                <div>
                    <button>Book a call</button>
                    <button>Watch video</button>
                </div>
                <div>
                    {/* <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" /> */}
                    <div>
                        <p>5,000+ appointments</p>
                        <span>Patients booked already</span>
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
