import React from 'react'
import img from "../../assets/Home/Reviews/review.avif"

const testmonials = [
  {
    name: "Rahul Mehta",
    review: "Amazing experience working with the team. The event was perfectly managed and exceeded our expectations.",
    image : img
  },
  {
    name: "Priya Sharma",
    review: "Their branding and creative ideas helped our business stand out. Highly professional and easy to work with.",
    image : img
  },
  {
    name: "Amit Patel",
    review: "The corporate gifting solutions were top-notch. Great quality and timely delivery.",
    image : img
  },
  {
    name: "Sneha Verma",
    review: "Loved the attention to detail in our event. Everything was handled smoothly without any stress.",
    image : img
  },
  {
    name: "Karan Shah",
    review: "Very creative team with fresh ideas. They truly understand client requirements and deliver beyond expectations.",
    image : img
  },
  {
    name: "Neha Kapoor",
    review: "Professional, reliable, and highly creative. Would definitely recommend their services for any corporate needs.",
    image : img
  }
]


const Testmonial = () => {
  return (
    <section className='bg-page'>
    {/* title */}
        <div className='text-center space-y-4'>
                <p className='text-xl font-bold font-body text-accent uppercase'>what they say</p>
                <h3 className='text-5xl font-semibold text-primary-dark font-heading tracking-tight uppercase'>our Testimonials</h3>
            </div>
            {/* reviews  */}
            <div>
               {testmonials.map((item,index)=>(
                <div>
                 <p>{item.review}</p>
                </div>
               ))} 
            </div>
    </section>
  )
}

export default Testmonial