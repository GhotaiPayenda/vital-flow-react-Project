import React from 'react'

export default function ServicesCard(props) {
  return (
    <>
        <div>
            <div className="icon">{props.icon}</div>
            <h3>{props.title}</h3>
            <p>{props.pragraph}</p>
            <button>View Services</button>
        </div>
    </>
  )
}
