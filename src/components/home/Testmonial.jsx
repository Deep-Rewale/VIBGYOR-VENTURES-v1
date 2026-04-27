import React from "react";
import img from "../../assets/Home/Reviews/review.avif";
import { FaStar } from "react-icons/fa6";
import { motion } from "motion/react";

const testmonials = [
  {
    name: "Rahul Mehta",
    review:
      "Working with the team was an exceptional experience from start to finish. The event was managed with great precision and creativity, and every detail was handled professionally. They truly exceeded our expectations and delivered beyond what we had imagined.",
    image: img,
  },
  {
    name: "Priya Sharma",
    review:
      "Their branding and creative approach helped our business stand out in a competitive market. The team is highly professional, responsive, and easy to collaborate with. We are extremely satisfied with the results and would definitely work with them again.",
    image: img,
  },
  {
    name: "Amit Patel",
    review:
      "The corporate gifting solutions were thoughtfully curated and perfectly aligned with our brand identity. Everything was delivered on time, and the quality was outstanding. Our clients loved the gifts, and it created a lasting impression.",
    image: img,
  },
  {
    name: "Sneha Verma",
    review:
      "From planning to execution, everything was handled smoothly and efficiently. The team paid close attention to every detail and ensured that our event was a huge success. Their dedication and professionalism truly set them apart.",
    image: img,
  },
  {
    name: "Karan Shah",
    review:
      "We were impressed by their creativity and ability to bring our ideas to life. The entire process was seamless, and the results were beyond our expectations. They are reliable, innovative, and highly professional in their work.",
    image: img,
  },
  {
    name: "Neha Kapoor",
    review:
      "Their team delivered outstanding results with a strong focus on quality and innovation. The experience was smooth, and communication was always clear and prompt. We highly recommend them for anyone looking for impactful solutions.",
    image: img,
  },
];

const Testmonial = () => {
  return (
    <section className="bg-page py-5 lg:py-10">
      {/* title */}
      <div className="text-center space-y-4 ">
        <p className="text-lg lg:text-xl font-bold font-body text-accent uppercase">
          what they say
        </p>
        <h3 className="text-4xl lg:text-5xl font-semibold text-primary-dark font-heading tracking-tight uppercase">
          our Testimonials
        </h3>
      </div>
      {/* reviews  */}
      <div className="w-full overflow-hidden flex BrandGradint py-3 mt-5">
        <motion.div
          className="flex whitespace-nowrap gap-6 pl-7"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
        >
          {testmonials.map((item, index) => (
            <div className=" flex flex-col flex-shrink-0  w-[470px]  cursor-pointer ">
              <div className="shadow-xl rounded-xl bg-white p-6 h-50 lg:h-60 relative">
                <p className="whitespace-normal text-md lg:text-lg font-body text-primary-dark ">
                  {item.review}
                </p>
                <div className="flex gap-1 absolute bottom-4 text-accent">
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                </div>
              </div>
              {/* images div */}
              <div className="flex  items-center gap-4   mt-4">
                <img
                  className="h-13 w-13 object-cover shadow-xl rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="text-md lg:text-lg font-semibold  text-primary-dark">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
        {/* another div */}
        <motion.div
          className="flex whitespace-nowrap gap-6 pl-7"
          animate={{ x: ["0", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
        >
          {testmonials.map((item, index) => (
            <div className=" flex flex-col flex-shrink-0  w-[470px]  cursor-pointer ">
              <div className="shadow-xl rounded-xl bg-white p-6 h-50  lg:h-60 relative">
                <p className="whitespace-normal text-md lg:text-lg font-body text-primary-dark ">
                  {item.review}
                </p>
                <div className="flex gap-1 absolute bottom-4 text-accent">
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                  <p>
                    <FaStar />
                  </p>
                </div>
              </div>
              {/* images div */}
              <div className="flex  items-center gap-4   mt-4">
                <img
                  className="h-13 w-13 object-cover shadow-xl rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="text-md lg:text-lg font-semibold  text-primary-dark">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* another down div for coming rom left  */}
     
    </section>
  );
};

export default Testmonial;
