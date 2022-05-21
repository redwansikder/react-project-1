import React from 'react'
import ReactDOM from 'react-dom'

//importing components
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import Footer from './Components/Footer'

export default function App() {
<<<<<<< HEAD
  const [light, setLight] = React.useState(true)

  function onOff() {
    setLight((a) => !a)
  }

=======
>>>>>>> c03d880b299b4456607282e39bcd604bea0baecb
  return (
    <div>
      <NavBar light={light} onOff={onOff} />
      <Main light={light} />
      <Footer light={light} />
    </div>
  )
}

<<<<<<< HEAD
// ReactDOM.render(<App />, document.getElementById('root'))
=======
>>>>>>> c03d880b299b4456607282e39bcd604bea0baecb
