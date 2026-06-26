export default function CTA() {
  return (
    <section className="px-5 py-9 pb-1 md:pb-10">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl px-6 md:px-14 py-9 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-10">

        <div className="text-white">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Start Your
            <br />
            Learning Journey?
          </h2>

          <p className="md:mt-6 mt-4  text-blue-100 max-w-xl md:text-xl">
            Join hundreds of successful students and take
            the first step towards your academic goals
            today.
          </p>
        </div>

        <button className="bg-white text-blue-600 font-semibold px-10 md:py-5 py-4 mt-3 rounded-xl hover:scale-105 transition md:text-xl">
          Enroll Now
        </button>
      </div>
    </section>
  );
}