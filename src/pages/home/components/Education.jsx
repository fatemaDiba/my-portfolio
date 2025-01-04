const Education = () => {
  return (
    <section id="education" className="bg-slate-200 py-10 text-white/90">
      <div className="w-11/12 md:container lg:w-9/12 mx-auto mb-10 px-20 md:px-0">
        <h2 className="text-2xl text-black md:text-4xl font-semibold text-center mb-10 md:mb-14">
          My <span className="text-[#064789]">Education</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {/* c-1 */}
          <div className="py-6 px-10 bg-[#457b9d] rounded-xl border-t-4 rounded-t-2xl border-[#003049]  hover:bg-[#003049] shadow-2xl">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              B.Sc. in CSE
            </h2>
            <p className="text-base md:text-lg mb-4">Uttara University</p>
            <div className="border border-white/70 mb-4 mt-11"></div>
            <p className="text-sm md:text-base">
              I am studying B.Sc in CSE at Uttara University. My expected
              graduation year is 2026. My current CGPA 3.96.
            </p>
          </div>
          <div className="py-6 px-10 bg-[#457b9d] rounded-xl border-t-4 rounded-t-2xl border-[#003049]  hover:bg-[#003049] shadow-2xl">
            <h2 className="text-lg md:text-xl font-semibold mb-2">HSC</h2>
            <p className="text-base md:text-lg mb-4">
              Uttara High School & college
            </p>
            <div className="border border-white/70 mb-4"></div>
            <p className="text-sm md:text-base">
              I passed HSC from Uttara High School & college in 2020. My board
              was Dhaka. I got 5.00 out of 5 from Science.
            </p>
          </div>
          <div className="py-6 px-10 bg-[#457b9d] rounded-xl border-t-4 rounded-t-2xl border-[#003049]  hover:bg-[#003049] shadow-2xl">
            <h2 className="text-lg md:text-xl font-semibold mb-2">SSC</h2>
            <p className="text-base md:text-lg mb-4">
              Uttara Girls High School & college
            </p>
            <div className="border border-white/70 mb-4"></div>
            <p className="text-sm md:text-base">
              I passed SSC from Uttara Girls High School & college in 2018. My
              board was Dhaka. I got 5.00 out of 5 from Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
