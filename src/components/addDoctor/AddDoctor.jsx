import React from 'react'
import { Star } from 'lucide-react';
import { MapPin, UserRound, Stethoscope, ArrowRight } from 'lucide-react';

export default function AddDoctor() {
  return (
    <>
       <section className="w-full px-20 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
         <div className="flex flex-col gap-10 rounded-3xl border border-gray-100 bg-blue-50 p-5 shadow-xl shadow-gray-200/50 sm:p-8 lg:p-10">
          <div>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>Virtual Consultation</h2>


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
          </div>
           <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Your consultation request has been submitted!');
            }}
            className="space-y-5 items-start flex grow flex-col gap-5 lg:items-center lg:flex-row "
          >
            {/* Name */}
            <div className='w-full '>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <div className="flex items-center bg-gray-50 gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  required
                  className="w-full min-w-0 bg-gray-50 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Doctor */}
            <div className='w-full'>
              <label
                htmlFor="doctor"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Choose Doctor
              </label>

              <div className="flex items-center bg-gray-50 gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">

                <input
                  id="doctor"
                  name="doctor"
                  type="text"
                  placeholder="Dr. Maria Cleven"
                  required
                  className="w-full min-w-0 bg-gray-50 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Location */}
            <div className='w-full'>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Location
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 bg-gray-50">

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Kabul"
                  autoComplete="address-level2"
                  required
                  className="w-full min-w-0 bg-gray-50 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
              type="submit"
              className="group flex w-60 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:scale-[0.98]"
            >
              Book Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            </div>
          </form>
          <div>
          <h1 className='text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl'>200K+</h1>
          <p className="mt-4 max-w-sm text-lg leading-7 text-gray-700 sm:text-xl">Cured satisfied patients around the globe</p>
          </div>
        </div>
       </section>
    </>
  )
}
