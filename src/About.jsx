import React from 'react'
import web from "../src/images/pic5.webp"
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="main">
        <div className="my-3 ">
        <h2 className="heading">Welcome to About page of <strong className='brandname'>MaazTech</strong></h2>
        <h4>We are the Team of Talented Developer Making Websites</h4>
        <Link className='btn btn-outline-primary started my-4' to="./contact" >Contact Now</Link></div>
      
        <img className='img-fluid animated  image' src={web} width={"30%"} alt="" />
      </div></div>
    </div>
  )
}
