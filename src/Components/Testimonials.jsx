import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "NEET 2023, Rank 452",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "The personalized attention I received at Bright Future helped me clarify my core concepts in Physics. I owe my success in NEET to my mentors here.",
  },
  {
    name: "Rahul Verma",
    role: "Class 12 Boards, 98.4%",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "The mock tests and analysis provided here are unmatched. They simulate the real exam pressure perfectly, making the actual boards feel easy.",
  },
  {
    name: "Ishani Goyal",
    role: "Class 9 Student",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "I joined for Foundation 8th grade, and the way they teach Math is just incredible. I no longer fear numbers; I enjoy them!",
  },
];

export default function Testimonials() {
  return (
    <section className=" py-7 md:py-18 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Success Stories
        </h2>

        <p className="text-gray-500 text-center mt-3 mb-10">
          Hear from our students who turned their dreams into reality.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8 hover:border-blue-500"
            >
              <div className="flex gap-1 text-blue-600 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="italic text-gray-700 md:leading-8 mb-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
