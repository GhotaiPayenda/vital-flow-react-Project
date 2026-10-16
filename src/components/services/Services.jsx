import React from 'react'
import ServicesCard from '../servicesCard/ServicesCard'

export default function Services() {
  return (
    <>
       <section className='flex flex-col gap-6 p-6 lg:flex-row lg:p-10'>
        <header className='flex flex-col items-center text-center '>
          <span className="w-20 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">Services</span>
          <h2 className="mt-5 text-3xl max-w-160 font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Personalized solutions for better oral health</h2>
        </header>

        <div>
          <ServicesCard title="Pediatrics" pragraph="Monitor your child's growth and development closely to ensure their health at every stage." />
        </div>
        </section> 
    </>
  )
}
