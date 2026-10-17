import React from 'react'
import testimonial from "./data";
import { Star } from 'lucide-react';
 
export default function Testimonials() {
  return (
    <>
       <section  className="bg-white px-6 py-16">
         <header className="text-center flex flex-col items-center mb-10 ">
            <span className="w-30 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
          Testimonials
        </span>
        <h2 className="mt-5 text-3xl max-w-160 font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">What our satisfied and happy clients have to say</h2>
        </header>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonial.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                {/* Patient information */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                <img
                  src={item.profileImage}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-blue-950">
                    {item.name}
                  </h3>
                </div>
              </div>



             

              {/* Testimonial description */}
              <p className="mb-6 leading-7 text-gray-600">
                "{item.desc}"
              </p>

               {/* Star rating */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className={
                      index < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              
            </div>
          ))}
        </div>
       </section>

    </>
  )
}
