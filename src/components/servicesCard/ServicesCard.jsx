import React from 'react'

export default function ServicesCard(title, pragraph, icon) {
  return (
    <>
        <div>
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{pragraph}</p>
        </div>
    </>
  )
}
