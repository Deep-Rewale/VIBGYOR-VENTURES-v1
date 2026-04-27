import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";




const ContactForm = () => {

  // state for storing the data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    message: ""
  })

  // For Status
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(null)

  // for handling the changes

  const handleChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //  validate email
  const ValidateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  //   prevent reloading form 

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true)

    setStatus({ type: "loading", message: "Sending message" })


    //  for delay
    await new Promise((resolve) => setTimeout(resolve, 1000));


    if (
      !formData.name || !formData.email || !formData.companyName || !formData.phone || !formData.message
    ) {
      setStatus({ type: "error", message: "please fill all  required fields" });
      setLoading(false)
      return;
    }

    if (!ValidateEmail(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });

      setLoading(false)
      return;
    }

    // reset form data

    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });

  }


  return (
    <section className='bg-page py-10 px-6 lg:px-16'>
      {/*  full div container */}
      <div className="full-content grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        {/* left text */}
        <div className="left-text space-y-3 lg:space-y-5">
          <h2 className='text-xl lg:text-2xl  font-body text-accent font-semibold'>get in touch</h2>
          <p className='text-3xl lg:text-4xl font-heading font-semibold text-primary-dark '>We are always ready to help you and answer your questions</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 space-y-8'>
            <div>
              <p className='text-lg lg:text-xl font-semibold text-primary-dark'>phone</p>
              <p className='text-md lg:text-lg '>+91 98213 49716</p>
            </div>
            <div>
              <p className='text-lg lg:text-xl font-semibold text-primary-dark'>Address</p>
              <p className='text-md lg:text-lg '>G9,Richa Building, lexi building, New Link Rd, opp. citi Mall, Andheri West, Mumbai, 400053</p>
            </div>
            <div>
              <p className='text-lg lg:text-xl font-semibold text-primary-dark'>Email</p>
              <p className='text-md lg:text-lg '>bhavesh@foresightemg.com</p>
              <p className='text-md lg:text-lg '>bhavesh@foresightmail.com</p>
            </div>

            <div className='text-lg lg:text-xl font-semibold text-primary-dark space-y-3'>
              <p>Social network</p>
              <div className='flex gap-5 '>
                <a
                  className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
                  href=""
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
                  href=""
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
                  href=""
                >
                  <FaYoutube />
                </a>
                <a
                  className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
                  href=""
                >
                  <FaLinkedin />
                </a>
                <a
                  className="text-2xl hover:text-accent transition-all ease-in-out duration-300"
                  href=""
                >
                  <FaXTwitter />
                </a>
              </div>

            </div>
          </div>
        </div>
        {/* right form  */}
        <div className="right-form rounded-4xl bg-gray-300  p-10 lg:p-15">
          <form action="" onSubmit={handleSubmit}>
            {/*  form title */}
            <div className='space-y-3 lg:space-y-5'>
              <h2 className='text-3xl lg:text-4xl font-semibold text-primary-dark'>Get in Touch</h2>
              <p className='text-lg lg:text-xl font-semibold text-primary-dark'>Define your goals so that we can help as much as we can</p>
            </div>
            {/* form inputs  */}
            <div className='flex flex-col space-y-1 mt-2'>
              <input className='p-3 text-lg lg:p-5 lg:text-xl border-b border-gray-500 outline-none' type="text" name='name' placeholder='Full name' maxLength={50} onChange={handleChanges} value={formData.name} />
              <input className='p-3 text-lg lg:p-5 lg:text-xl border-b border-gray-500 outline-none' type="email" name='email' placeholder='Email' maxLength={50} onChange={handleChanges} value={formData.email} />
              <input className='p-3 text-lg lg:p-5 lg:text-xl border-b border-gray-500 outline-none' type="text" name='companyName' placeholder='Company name' maxLength={50} onChange={handleChanges} value={formData.companyName} />
              <input className='p-3 text-lg lg:p-5 lg:text-xl border-b border-gray-500 outline-none' type="phone" name='phone' placeholder='Phone' minLength={10} maxLength={10} onChange={handleChanges} value={formData.phone} />
              <textarea className='p-3 text-lg lg:p-5 lg:text-xl border-b border-gray-500 outline-none resize-none' type="text" name='message' placeholder='Message'rows="3" maxLength={200} onChange={handleChanges} value={formData.message} />
              <button className='cursor-pointer rounded-2xl mt-5 flex items-center gap-4 p-5 bg-primary-dark text-md lg:text-lg font-semibold text-gray-200'> <SlArrowRight size={14} /> Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm