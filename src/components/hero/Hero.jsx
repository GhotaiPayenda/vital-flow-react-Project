import React from 'react'
import { Star, Play } from 'lucide-react';

export default function Hero() {
  return (
    <>
        <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-10 lg:py-16'>
            <div className='flex w-full flex-col gap-5 lg:w-1/2 lg:gap-6'>

            {/* rating */}
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                        <span className="font-semibold">5.0</span>

                        <div className="flex items-center gap-0.5 text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={16}
                                fill="currentColor"
                                strokeWidth={1.5}
                            />
                            ))}
                        </div>

                        <span className="text-gray-500">(980 Reviews)</span>
                </div>
                <h1 className='text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl'>Partner in health and wellness</h1>
                <p>Providing advanced healthcare solutions with a compassionate touch for every patient.</p>
                <div className='flex gap-2 '>
                    <button className='inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 sm:text-base  '>Book a call</button>
                    <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 sm:text-base">
            <Play size={17} />Watch video</button>
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


            <div className='w-full h-120 rounded-4xl bg-cover bg-center md:w-160 ' 
             style={{
    backgroundImage:
      'url("https://framerusercontent.com/images/RiukRfppKWATQjdvnvRv1Rm48.jpg?scale-down-to=1024")',
  }}>

    
                
            </div>
        </section>

    </>
  )
}
