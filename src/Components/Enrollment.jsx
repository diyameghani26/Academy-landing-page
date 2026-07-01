import { useState } from "react";

const courses = [
  "Foundation 6-8",
  "Board Prep 9-10",
  "Science 11-12",
  "JEE/NEET",
];

import { useNavigate } from "react-router-dom";

export default function Enrollment() {

  const [selected, setSelected] = useState(courses[0]);
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(-1);
  };

  return (
    <div className=" min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">Enroll Now</h1>
        <p className="text-center text-gray-500 mt-2">
          Begin your journey towards academic excellence.
        </p>


        {/* Student Details */}
        <h2 className="text-xl font-semibold mt-10  mb-5">Student Details</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Full Name"
            className="border border-gray-300  rounded-lg p-3"
          />

          <select className="border border-gray-300  rounded-lg p-3">
            <option>Select Grade</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <input
            placeholder="School Name"
            className="border border-gray-300 rounded-lg p-3 md:col-span-2"
          />
        </div>

        {/* Courses */}
        <h2 className="text-xl font-semibold mt-10 mb-5">
          Choose Your Course
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              key={course}
              onClick={() => setSelected(course)}
              className={`border border-gray-300  rounded-xl p-5 cursor-pointer transition
                ${
                  selected === course
                    ? "border-blue-600 bg-blue-50"
                    : "hover:border-blue-400"
                }`}
            >
              <h3 className="font-semibold">{course}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Sample description
              </p>
            </div>
          ))}
        </div>

        {/* Parent Info */}
        <h2 className="text-xl font-semibold mt-10 mb-5">
          Parent Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Parent Email"
            className="border border-gray-300  rounded-lg p-3"
          />

          <div className="flex border border-gray-300  rounded-lg overflow-hidden">
            <span className="bg-gray-100 px-4 flex items-center">+91</span>
            <input
              placeholder="9876543210"
              className="flex-1 p-3 outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button  onClick={handleSubmit}className="w-full bg-blue-600 text-white py-4 rounded-lg mt-8 font-semibold hover:bg-blue-700">
          Submit Enrollment
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          By clicking submit, you agree to our Terms of Service.
        </p>

        {/* Why Join */}
        <div className="bg-blue-700 text-white rounded-xl mt-10 p-8">
          <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold">✔ Personalized Mentorship</h4>
              <p className="text-blue-100 text-sm">
                Tailored study plans for every student.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">✔ Expert Faculty</h4>
              <p className="text-blue-100 text-sm">
                Learn from experienced educators.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">✔ Regular Progress Tracking</h4>
              <p className="text-blue-100 text-sm">
                Weekly reports and assessments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students"
          className="w-full h-64 object-cover rounded-xl mt-8"
        />

      </div>
    </div>
  );
}