import React from 'react'

export default function ServicesCard(props) {
  return (
    <>
        <div className='group flex flex-col items-center gap-2 bg-blue-50 w-80 p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center '>
            <div  className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">{props.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{props.title}</h3>
            <p className="text-slate-500 leading-7 mb-6">{props.pragraph}</p>
            <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">View Services</button>
        </div>
    </>
  )
}
