import React, { useRef } from "react";
import { GraduationCap, Users, ChartColumn } from "lucide-react";
import { motion } from "motion/react";



const Home = () => {

  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

  return (
   <section className="px-6 lg:px-12 ">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
   {/* left */}
<motion.div
initial={{ opacity: 0, x: -80 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once:false, amount:0.3 }}
transition={{
  duration:0.8,
  ease:"easeOut"
}}
      className='mt-30 lg:mt-50'>
        <motion.span
  animate={{
    y: [0, -6, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  }}

        className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-600 px-3 py-2 md:text-xl text-sm -mt-48">
           Where Excellence Meets Education
        </motion.span>
                <motion.h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Helping Students
          <br />
          Achieve{" "}
          <span className="text-[#0947a4] text-4xl md:text-6xl">
            Academic Excellence
          </span>
        </motion.h1>

        <motion.p   className=" mt-4 md:mt-6 text-gray-600  text-base md:text-lg max-w-xl">
          Experience a tailored learning environment where
          personalized mentorship meets modern educational
          technology to unlock your true potential.
        </motion.p>

        <motion.div 
         initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
 transition={{
    duration: 0.8,
    delay: 0.3,
  }}
    whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
        
        className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
          
          className="bg-blue-600 text-white px-8 py-3 md:py-4 rounded-xl  md:text-xl">
            Book Demo Class
          </button>

          <button 
          
            className="border border-gray-300 px-8 py-3 md:py-4 rounded-xl  md:text-xl">
            View Courses
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.3,
  }}
    whileHover={{
    scale: 1.03,
  }}
  transition={{
    duration: 0.3,
  }}
  viewport={{ once:false, amount:0.3 }}
      
      >
        <img 
          src="./coaching.jpg"
          alt="Students Learning"
          className="w-full rounded-3xl shadow-lg  lg:mt-50"
        />
      </motion.div>

    </div>
  </div>
  <section  >
  <div className=" max-w-7xl mx-auto px-6 lg:px-12 py-6 mt-12 lg:mt-16  border-t border-gray-300 border-b bg-red-300">


    <motion.div 
     initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{  once: false,
  amount: 0.3,}}
  transition={{ duration: 0.7 }}
    
    className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center ">

      <div >
        <h3 className="text-2xl md:text-5xl font-bold text-blue-600">500+</h3>
        <p className="text-gray-600 text-sm md:text-xl md:mt-1">Active Students</p>
      </div>

      <div  >
        <h3 className="text-2xl md:text-5xl  font-bold text-blue-600 ">95%</h3>
        <p className="text-gray-600 text-sm md:text-xl md:mt-1">Success Rate</p>
      </div>

      <div  >
        <h3 className="text-2xl md:text-5xl  font-bold text-blue-600">15+</h3>
        <p className="text-gray-600 text-sm md:text-xl md:mt-1">Years Experience</p>
      </div>

      <div >
        <h3 className="text-2xl md:text-5xl  font-bold text-blue-600">20+</h3>
        <p className="text-gray-600 text-sm md:text-xl md:mt-1">Expert Teachers</p>
      </div>

    </motion.div>
  </div>
</section>

<section  className="py-14 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center md:mt-17  mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false,
  amount: 0.3, }}
transition={{
  type: "spring",
  stiffness: 120,
  damping: 10,
}}
      
      className="inline-block md:px-8 md:py-4 px-4 py-2 mb-4 rounded-2xl bg-blue-600 backdrop-blur-md border border-white/20 shadow-lg">
  <h2 className="  text-3xl md:text-5xl font-bold text-white">
    Why Choose Us?
  </h2>
</motion.div>

      <motion.p
        initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.5,
    duration: 0.8,
  }}
      className=" why-para max-w-2xl md:text-xl  mx-auto md:mt-9 text-gray-600">
        We provide a holistic learning experience that goes beyond
        standard curriculum boundaries.
      </motion.p>
    </div>

    {/* Cards */}
  <motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false,
  amount: 0.3, }}
>

      {/* Card 1 */}
      <motion.div
  variants={cardVariants}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
  }} className="  rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-all duration-300">
       <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
  <GraduationCap className="w-6 h-6 text-blue-600" />
</div>

        <h3 className="text-2xl font-semibold mb-3">
          Expert Faculty
        </h3>

        <p className="text-gray-600 md:leading-relaxed">
          Learn from distinguished educators with decades of combined
          experience in competitive exams.
        </p>
   </motion.div>

      {/* Card 2 */}
      <motion.div
  variants={cardVariants}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
  }} className=" rounded-2xl border border-gray-200 hover:border-blue-500 p-8 shadow-md">
       <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
  <Users className="w-6 h-6 text-blue-600" />
</div>

        <h3 className="text-2xl font-semibold mb-3">
          Small Batch Sizes
        </h3>

        <p className="text-gray-600 md:leading-relaxed">
          Ensuring personalized attention for every student with a
          strict teacher-student ratio.
        </p>
     </motion.div>

      {/* Card 3 */}
      <motion.div
  variants={cardVariants}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
  }} className=" rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-all duration-300">
       <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
  <ChartColumn className="w-6 h-6 text-blue-600" />
</div>

        <h3 className="text-2xl font-semibold mb-3">
          Progress Tracking
        </h3>

        <p className="text-gray-600 md:leading-relaxed">
          Real-time performance analytics and regular parent-teacher
          reviews for consistent growth.
        </p>
     </motion.div>

   
    </motion.div>

  </div>

</section>
</section>

  )
}

export default Home
