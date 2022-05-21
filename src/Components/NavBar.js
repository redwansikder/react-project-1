import React from 'react'

export default function NavBar({ light, onOff }) {
  return (
    <div className={light ? 'nav' : 'nav bg-dark'}>
      <h1>Icon</h1>
      <ul>
        <li>
          <button onClick={onOff}>{light ? 'Dark' : 'Light'} Mode</button>
        </li>
      </ul>
    </div>
  )
}
