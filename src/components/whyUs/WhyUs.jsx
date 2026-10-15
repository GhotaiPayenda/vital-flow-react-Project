import React from 'react'
import { ArrowRight } from 'lucide-react';
export default function WhyUs() {
  return (
    <>
        <section className='flex flex-col gap-6 p-6 lg:flex-row lg:p-10'>
            {/* the content of sec */}
            <div className='flex flex-col gap-6 '>
                <span  className="w-20 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">Why us</span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Why choose VitalFlow for your healthcare?</h2>

                <div className='flex flex-col gap-6 '>
                    <div  className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 sm:p-8">
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 sm:text-2xl">Experienced Professionals</h3>
                        <p>Our team of dedicated healthcare providers brings years of experience and expertise to deliver care</p>
                    </div>
                    <div className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 sm:p-8">
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 sm:text-2xl">Advanced Technology</h3>
                        <p>We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments</p>
                    </div>
                </div>
                  <div>
                    <button
            type="button"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
                  </div>
            </div>

            {/* image */}
            <div className='w-full h-150 rounded-4xl bg-cover bg-center md:w-160 ' 
             style={{
    backgroundImage:
      'url("https://framerusercontent.com/images/VkQIGu6u7FhBCugBtnRpiFrmFw.jpg?scale-down-to=512")',
  }}>

    
                
            </div>
        </section>
    </>
  )
}
