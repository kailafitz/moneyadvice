import React from 'react'
import { Employees } from '../Components/Employees'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
      <div id="f-AboutBodyContainer">
        <div className="f-PageTitle">
          <h2 className="f-h2">About</h2>
        </div>
        <Employees />
      </div>
      <Footer />
    </>
  )
}