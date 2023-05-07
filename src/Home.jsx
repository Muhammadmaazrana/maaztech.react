import React from 'react'
import web from "../src/images/pic3.png"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="main">
        <div className="my-3 ">
        <h2 className="heading">Grow Your Business with <strong className='brandname'>MaazTech</strong></h2>
        <h4>We are the Team of Talented Developer Making Websites</h4>
         <Link className='btn btn-outline-primary started my-4' to="./services" >Get Started</Link></div>
      
        <img className='img-fluid animated  image' src={web} width={"30%"} alt="" />
      </div></div>
    </div>
  )
}
