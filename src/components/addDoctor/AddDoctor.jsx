import React from 'react'
import { Star } from 'lucide-react';

export default function AddDoctor() {
  return (
    <>
        <div>
          <div>
            <h2>Virtual Consultation</h2>
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
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input id='name' placeholder='Jane Smith' type="text" />
            </div>

            <div>
              <label htmlFor="doctor">Doctor</label>
              <input id='doctor' placeholder='Dr Maria Cleven' type="text" />
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <input id='location' placeholder='Kabul' type="text" />
            </div>
            <button>Subimt</button>
          </form>
          <div>
          <h1>200K+</h1>
          <p>Cured satisfied patients around the globe</p>
          </div>
        </div>
    </>
  )
}
