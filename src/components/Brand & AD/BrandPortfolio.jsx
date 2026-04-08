import React from 'react'
import Button from "../../components/Button/Button"
import img1 from "../../assets/BrandAndAD/BrandPortfolio/5M0A6848-1.jpg"
import img2 from "../../assets/BrandAndAD/BrandPortfolio/09-2.jpg"
import img3 from "../../assets/BrandAndAD/BrandPortfolio/10-3.jpg"
import img4 from "../../assets/BrandAndAD/BrandPortfolio/U4A5005.jpg"
import img5 from "../../assets/BrandAndAD/BrandPortfolio/10-5.jpg"
import img6 from "../../assets/BrandAndAD/BrandPortfolio/DSC_0068.jpg"

const images = [
    { images: img1 },
    { images: img2 },
    { images: img3 },
    { images: img4 },
    { images: img5 },
    { images: img6 }
]

const BrandPortfolio = () => {
    return (
        <section className='bg-page py-10 px-16'>
            {/* main content box */}
            <div className='grid grid-cols-2 place-items-center'>
                {/* left text */}
                <div className='space-y-6'>
                    <p className='text-xl font-bold text-accent font-body'>WHY BELIEVE US</p>
                    <h3 className='text-5xl uppercase font-heading tracking-tight text-primary-dark font-semibold' >Our Portfolio</h3>

                    <p className='max-w-xl font-body text-lg text-primary-dark'>We take pride in delivering impactful experiences through event management, branding, and corporate gifting solutions. Each project reflects our commitment to creativity, precision, and client satisfaction, ensuring every detail aligns with the brand’s vision.</p>
                    <p className='max-w-xl font-body text-lg text-primary-dark'>From managing large-scale events to crafting compelling brand identities and premium gifting solutions, our portfolio showcases a diverse range of successful collaborations that leave a lasting impression.</p>
                    <div>
                        <Button text={"VIEW PORTFOLIO"} paddingX="px-7" paddingY="py-2" hoverText={"text-primary-dark"} textSize={"text-lg"} />
                    </div>
                </div>

                {/* right images */}
                <div className='grid grid-cols-3 gap-2  '>
                    {images.map((item, index) => (
                        <div key={index} >
                            <img className='h-80 w-full object-center object-cover rounded-md' src={item.images} alt="Portfolio images" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BrandPortfolio