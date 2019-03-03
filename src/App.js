import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './components/HomePage/HomePage'

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
        <HomePage/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
