import React from 'react'

export default function WhyUs() {
  return (
    <>
        <section>
            {/* the content of sec */}
            <div>
                <span>Why us</span>

                <h2>Why choose VitalFlow for your healthcare?</h2>

                <div>
                    <div>
                        <h3>Experienced Professionals</h3>
                        <p>Our team of dedicated healthcare providers brings years of experience and expertise to deliver care</p>
                    </div>
                    <div>
                        <h3>Advanced Technology</h3>
                        <p>We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments</p>
                    </div>
                </div>
                <button>Get Started</button>
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
