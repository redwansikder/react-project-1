import React from 'react'
import ReactDOM from 'react-dom'

//importing components
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import Footer from './Components/Footer'

function Final() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Final />, document.getElementById('root'))
