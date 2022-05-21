import React from 'react'

export default function Footer({ light }) {
  return (
    <div className={light ? 'footer' : 'footer bg-dark'}>
      <p>This is footer.</p>
    </div>
  )
}
