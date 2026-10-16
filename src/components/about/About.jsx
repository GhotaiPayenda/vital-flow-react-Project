import React from 'react'

export default function About() {
  return (
    <>
    <section className='flex flex-col justify-center gap-6 p-6  md:flex-row lg:p-20'>
        {/* image */}
            <div className='w-full h-100 rounded-4xl bg-cover bg-center md:h-140 md:w-140 lg:w-140 ' 
             style={{
    backgroundImage:
      'url("https://framerusercontent.com/images/xolhj23w9rvPPDhG1vbAIr7CyM.jpg?scale-down-to=1024")',
  }}>

    
                
            </div>



            {/* content of section */}

            <div className='flex flex-col gap-6 '>
                <span className="w-25 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">About us</span>

                <h2 className="mt-5 text-3xl max-w-160 font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Vision for a healthier and brighter tomorrow</h2>

                <div className='flex flex-col gap-6 '>
                    <div  className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 sm:p-8">
                        <h3  className="mt-6 text-xl font-semibold text-gray-900 sm:text-2xl">Our Mission</h3>
                        <p>Our mission is to deliver compassionate and high-quality healthcare services.</p>
                    </div>
                    <div  className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 sm:p-8">
                        <h3 className="mt-6 text-xl font-semibold text-gray-900 sm:text-2xl">Our Vision</h3>
                        <p>Leading healthcare provider, recognized for innovative practices and care.</p>
                    </div>
                </div>
                <div>
                    <button type="button"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto">What we do</button>
                </div>
            </div>

    </section>


    </>
  )
}
