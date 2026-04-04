import React from 'react'

const numbers = [
    {
        num: "1000+",
        text: "Projects Completed"
    },
    {
        num: "15+",
        text: "Years' Experience"
    },
    {
        num: "60+",
        text: "Clients Served"
    },
    {
        num: "30+",
        text: "Team Members"
    }
]

const Highlights = () => {
    return (
        <section className='bg-gradient-to-br from-[#2d1b7a] via-[#3b2599] to-[#1a1040] py-15 px-16 '>
            {/* title */}
            <div className='text-center space-y-4'>
                <p className='text-xl font-bold font-body text-accent uppercase'>WHY BELIEVE US</p>
                <h3 className='text-5xl font-semibold text-[#ede7f6] font-heading tracking-tight uppercase'>OUR HIGHLIGHTS</h3>
            </div>
            {/* 4 content */}
            <div className='grid grid-cols-4 place-items-center mt-10'>
                {numbers.map((item, index) => (
                    <div className='text-[#ede7f6] text-center space-y-2'>
                        <h3 className='text-5xl font-bold font-heading '>{item.num}</h3>
                        <p className='text-xl font-semibold font-body'>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Highlights