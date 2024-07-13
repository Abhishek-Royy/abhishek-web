import React from "react";

function Faq() {
  return (
    <>
      <div className="md:w-full w-[95%] m-auto h-auto">
        <section
          className="grid grid-cols-1 p-5 gap-y-3 divide-y bg-transparent rounded-[10px]"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 8px 29px 8px",
          }}
        >
          <details open className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-300 marker:[font-size:0px]">
              <span>Who is Abhishek Roy ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-[#ffe72f] group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-[#ffe72f] text-[15px] leading-5">
              I am a technology lover by, i am a programmer, a developer, a
              student. i love to do coding, currently i ma studing in Brainware
              University in CSE.
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-300 marker:[font-size:0px]">
              <span>Why we hire you for our company ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-[#ffe72f] group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-[#ffe72f] text-[15px] leading-5">
              Becasuse i think thak i am the best choice for your company, as a
              fresher i will give my 100% potential to do a project successfull.
              Which will give your company much value.
            </p>
          </details>
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-300 marker:[font-size:0px]">
              <span>Which Techinical skills you have ?</span>
              <svg
                className="h-6 w-6 rotate-0 transform text-[#ffe72f] group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="text-[#ffe72f] text-[15px] leading-5">
              First of all i am much interested in Web Development. I know HTML,
              CSS, JS, React JS, Node JS, Expess JS, Mongo DB, Postman, Github,
              Tailwind CSS, Python, C(intermediate) level, DSA(basic) level, API
              handeling, Currently i startedlearning Next JS and AWS, MS Excel,
              MS Word etc....
            </p>
          </details>
        </section>
      </div>
    </>
  );
}

export default Faq;
