import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import doubt from '../images/doubt_image.jpeg'

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='contact'>
        <div className='contact-form grid grid-two-cols'>
          <div>
            <form>
              <div className='contact-us'>
                <label for='name'>Name</label>
                <input type='text' placeholder='Enter Your Name'></input>
              </div>
              
              <div className='contact-us'>
                <label for='name'>Email</label>
                <input type='email' placeholder='Enter Your Email Address' required ></input>
              </div>

              <div className='contact-us'>
                <label for='name'>Phone No.</label>
                <input type='text' placeholder='Enter Your Phone No.'></input>
              </div>

              <div className='contact-us'>
                <label for='name'>Title</label>
                <input type='text'placeholder='Enter Your Title'></input>
              </div>

              <div className='contact-us'>
                <label for='name'>Message</label>
                <textarea type='text' placeholder='Enter Your Message' cols={25} rows={5}></textarea>
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>

          <div>
            <img src={doubt} alt='doubts image'></img>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
