export default function CTA() {
  return (
    <section className="px-5 pb-24">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl px-8 md:px-14 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Start Your
            <br />
            Learning Journey?
          </h2>

          <p className="mt-6 text-blue-100 max-w-xl">
            Join hundreds of successful students and take
            the first step towards your academic goals
            today.
          </p>
        </div>

        <button className="bg-white text-blue-600 font-semibold px-10 py-5 rounded-xl hover:scale-105 transition">
          Enroll Now
        </button>
      </div>
    </section>
  );
}