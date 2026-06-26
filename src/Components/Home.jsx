import React from 'react'
import {
  GraduationCap,
  Users,
  ChartColumn,
} from "lucide-react";

const Home = () => {
  return (
   <section className="px-6 lg:px-12 py-5 lg:py-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
   {/* left */}
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-600 px-3 py-2  text-sm ">
           Where Excellence Meets Education
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Helping Students
          <br />
          Achieve{" "}
          <span className="text-[#0947a4]">
            Academic Excellence
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl">
          Experience a tailored learning environment where
          personalized mentorship meets modern educational
          technology to unlock your true potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-[#0947a4] text-white px-8 py-4 rounded-xl">
            Book Demo Class
          </button>

          <button className="border px-8 py-4 rounded-xl">
            View Courses
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="./coaching.jpg"
          alt="Students Learning"
          className="w-full rounded-3xl shadow-lg"
        />
      </div>

    </div>
  </div>
  <section >
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 mt-5 lg:mt-8 border-t border-gray-300 border-b bg-gray-50">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-2xl md:text-4xl font-bold text-blue-600">500+</h3>
        <p className="text-gray-600 text-sm">Active Students</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-4xl  font-bold text-blue-600">95%</h3>
        <p className="text-gray-600 text-sm">Success Rate</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-4xl  font-bold text-blue-600">15+</h3>
        <p className="text-gray-600 text-sm">Years Experience</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-4xl  font-bold text-blue-600">20+</h3>
        <p className="text-gray-600 text-sm">Expert Teachers</p>
      </div>

    </div>
  </div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Us?
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600">
        We provide a holistic learning experience that goes beyond
        standard curriculum boundaries.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Card 1 */}
      <div className="rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-all duration-300">
       <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
  <GraduationCap className="w-6 h-6 text-blue-600" />
</div>

        <h3 className="text-2xl font-semibold mb-3">
          Expert Faculty
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Learn from distinguished educators with decades of combined
          experience in competitive exams.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-gray-200 hover:border-blue-500 p-8 shadow-md">
       <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
  <Users className="w-6 h-6 text-blue-600" />
</div>

        <h3 className="text-2xl font-semibold mb-3">
          Small Batch Sizes
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Ensuring personalized attention for every student with a
          strict teacher-student ratio.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-all duration-300">
       <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
  <ChartColumn className="w-6 h-6 text-blue-600" />
</div>

        <h3 className="text-2xl font-semibold mb-3">
          Progress Tracking
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Real-time performance analytics and regular parent-teacher
          reviews for consistent growth.
        </p>
      </div>

    </div>
  </div>
</section>
</section>

  )
}

export default Home
