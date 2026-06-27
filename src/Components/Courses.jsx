import {
  GraduationCap,
  BookOpen,
  Atom,
  Stethoscope,
  Calculator,
  Languages,
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      icon: <Atom className="w-6 h-6 text-blue-600" />,
      title: "IIT-JEE Preparation",
      desc: "Comprehensive coaching for aspiring engineers with expert faculty and mock tests.",
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      title: "NEET Preparation",
      desc: "Focused medical entrance preparation with regular assessments and doubt sessions.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Foundation Program",
      desc: "Strong academic foundation for Classes 8–10 with Olympiad preparation.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "CUET Preparation",
      desc: "Strategic preparation for CUET with expert guidance and practice tests.",
    },
    {
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      title: "Commerce Excellence",
      desc: "Master Accounts, Economics, and Business Studies with experienced mentors.",
    },
    {
      icon: <Languages className="w-6 h-6 text-blue-600" />,
      title: "English & Communication",
      desc: "Enhance spoken English, confidence, and communication skills.",
    },
  ];

  return (
    <section className="py-12 md:py-15  sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 md:text-lg md:mt-9">
            Explore our most sought-after programs designed to help students
            excel in academics and competitive examinations.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                {course.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {course.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                {course.desc}
              </p>

              <div className="space-y-2 text-sm text-gray-600 mb-5">
                <p>✓ Live Classes</p>
                <p>✓ Study Material</p>
                <p>✓ Weekly Tests</p>
              </div>

              {/* <button className="text-blue-600 font-semibold hover:gap-3 flex items-center gap-2 transition-all">
                Learn More →
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}