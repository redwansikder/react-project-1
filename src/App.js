import React from 'react'
import ReactDOM from 'react-dom'

//importing components
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import Footer from './Components/Footer'

export default function App() {
  const [light, setLight] = React.useState(true)

  function onOff() {
    setLight((a) => !a)
  }

  return (
    <div>
      <NavBar light={light} onOff={onOff} />
      <Main light={light} />
      <Footer light={light} />
    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'))
