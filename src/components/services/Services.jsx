import React from 'react'
import ServicesCard from '../servicesCard/ServicesCard'

export default function Services() {
  return (
    <>
       <section className='flex flex-col flex-wrap  gap-6 p-6 lg:p-10'>
        <header className='flex flex-col items-center text-center '>
          <span className="w-20 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">Services</span>
          <h2 className="mt-5 text-3xl max-w-160 font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Personalized solutions for better oral health</h2>
        </header>

        <div className='flex flex-wrap items-center gap-4 justify-center mt-10  '>

          <ServicesCard title="Pediatrics" pragraph="Monitor your child's growth and development closely to ensure their health at every stage." />


          <ServicesCard title="Orthopedics" pragraph="Receive care for bone and muscle health with advanced treatments tailored to your needs." />


          <ServicesCard title="Gastroenterology" pragraph="Comprehensive care for digestive health to address issues with precision and personalized attention." />


          <ServicesCard title="Neurology" pragraph="Specialized treatments for brain and nerve health, ensuring advanced and compassionate care always." />


          <ServicesCard title="Cardiology" pragraph="State-of-the-art heart care focused on your cardiovascular health with expertise and dedication." />


          <ServicesCard title="General care" pragraph="Reliable primary healthcare services designed to maintain your well-being at every stage of life." />

        </div>
        </section> 
    </>
  )
}
