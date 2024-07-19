import React from "react"
import img from "../assets/images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
       <h1> Contact Us</h1>
      <h3>Our mailing address:</h3>
       <p>Real rentals.com</p>
        <p>Echelon Square, Plot 25,
        Sector 32,</p>
        <p>Gurgaon – 122001
        Haryana, India
        </p>
        <p>
        In case of any queries:</p>
        <h4>1800-313-4777 </h4>
      <p>
      support@Real Reantals.com
      </p>
      <p>
      Or Chat With us
      </p>
       
        </div>
      </section>
    </>
  )
}

export default Contact
