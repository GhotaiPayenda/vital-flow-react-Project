import React from 'react'

export default function Blog() {
  return (
    <>
        <section className="bg-white px-6 py-16">

          <header className="text-center flex flex-col items-center mb-10 ">
            <span className="w-30 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
          Blog
        </span>
        <h2 className="mt-5 text-3xl max-w-160 font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Insights and tips for better healthcare decisions</h2>
        </header>

        <div className='flex flex-wrap gap-10 justify-center items-center '>

          <div className='w-85 flex flex-col gap-4 ' >
            <div className='w-full h-70 bg-amber-300 rounded-4xl bg-cover bg-center   md:w-full ' 
                     style={{
                            backgroundImage:
                            'url("https://framerusercontent.com/images/u2V0kvYmCKhMOsHxZZQ9QDUTg.jpg?scale-down-to=512")',
                        }}>
            </div>

            <h4 className='font-semibold max-w-78 text-2xl '>The Benefits of Regular Exercise: A Pathway to Health</h4>
          </div>

          <div className='w-85 flex flex-col gap-4'>
            <div className='w-full h-70 bg-amber-300 rounded-4xl bg-cover bg-center   md:w-full ' 
                     style={{
                            backgroundImage:
                            'url("https://framerusercontent.com/images/cChHTJcFYUgDxRRXXGbCfXOE8Y.jpg?scale-down-to=512")',
                        }}>
            </div>

            <h4  className='font-semibold max-w-78 text-2xl '>Managing Stress for Better Health: Strategies for a Calmer Life</h4>
          </div>

          <div className='w-85 flex flex-col gap-4 '>
            <div className='w-full h-70 bg-amber-300 rounded-4xl bg-cover bg-center   md:w-full ' 
                     style={{
                            backgroundImage:
                            'url("https://framerusercontent.com/images/2LQsobrQrZmiwJwnygZXcYq7uhE.jpg?scale-down-to=512")',
                        }}>
            </div>

            <h4  className='font-semibold max-w-78 text-2xl '>The Impact of Sleep on Your Health: Why Rest Matters</h4>
          </div>


        </div>
            
        </section>
    </>
  )
}
