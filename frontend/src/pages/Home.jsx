import React, { useEffect } from "react";
import Typed from "typed.js";
import mainImage from "../assets/mainImg.png";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import SkillChart from "../components/SkillChart";

function Home() {
  useEffect(() => {
    const typed = new Typed(".dev", {
      strings: ["Programmer", "Student", "Developer", "FRONTEND DEVELOPER"],
      typeSpeed: 90,
      backSpeed: 85,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main w-full min-h-full">
        {/* SECTION-1 */}
        <div className="sec-1 w-full lg:h-[90vh] h-auto bg-black text-white md:px-32 pt-20 lg:pt-0">
          <div className="w-full  h-full md:flex">
            <div className="left w-[95%] m-auto  md:w-1/2 h-full  flex flex-col items-start  justify-center">
              <h3 className="text-3xl font-bold">Hello👋, Welcome</h3>
              <h1 className="text-5xl font-bold my-4">
                {" "}
                MYSELF <span className="text-[#38B8DD]">ABHISHEK ROY</span>{" "}
              </h1>
              <span className="dev text-4xl font-bold uppercase text-[#ffe72f]"></span>

              <p className="mt-4 text-xl w-[90%]">
                I'm a Computer Science & Engineering Student, attending
                Brainware University
              </p>
              <div className="gap-10 w-full flex mt-8">
                {/* <NavLink to="/contact"> */}
                <button
                  className="border rounded-lg font-medium text-base py-3 w-44 hover:bg-[#EAB308] hover:text-black ease-in duration-300"
                  style={{
                    boxShadow:
                      " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
                  }}
                >
                  HIRE ME
                </button>
                {/* </NavLink> */}
                <a
                  href="https://drive.google.com/file/d/10FIoMgxfFh8U4K-MU3QPhGXSisze_O2a/view?usp=sharing"
                  target="_blank"
                >
                  <button
                    className="border rounded-lg font-medium text-base py-3 w-44 hover:bg-[#EAB308] hover:text-black ease-in duration-300"
                    style={{
                      boxShadow:
                        " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
                    }}
                  >
                    GET CV
                  </button>
                </a>
              </div>
            </div>
            <div className="right  lg:w-1/2 w-[95%] m-auto h-full mt-10 lg:mt-0 flex items-center justify-end">
              <img
                className="w-full h-full object-contain"
                src={mainImage}
                alt="image"
              />
            </div>
          </div>
        </div>

        {/* SECTION-2 */}

        <div className="sec-2 w-full h-auto md:pt-20 bg-gradient-to-br from-black to-[#010815] py-10  md:px-32 text-white ">
          <h1
            className="w-max md:hidden  p-3 h-max mx-auto justify-center text-3xl font-bold animate-bounce flex items-center gap-3 text-[#ffe72f] mb-5"
            // style={{
            //   boxShadow:
            //     " rgba(250, 250, 250, 0.16) 0px 10px 36px 0px, rgba(250, 250, 250, 0.06) 0px 0px 0px 1px",
            // }}
          >
            MY TECH SKILLS
            <FaCode />
          </h1>

          <div className="chart lg:w-full w-[95%] m-auto h-auto lg:flex ">
            <div className="chart-left lg:w-[65%] w-[95%] lg:m-auto h-full  ">
              <div className="lg:w-[65%] lg:h-[65%]  ">
                <SkillChart />
              </div>
            </div>
            <div className="chart-right lg:w-[35%] w-[95%] lg:m-0 m-auto h-auto  flex items-start justify-center flex-col leading-6 lg:mt-0 mt-5">
              <h2 className="text-3xl text-[#ffe72f]">
                Here are my all Technical skills{" "}
              </h2>
              <p className="mt-5">
                Technical skills are the specialized knowledge and expertise
                required to perform specific tasks and use specific tools and
                programs in real world situations.
              </p>

              <a href="https://github.com/Abhishek-Royy">
                <button
                  type="button"
                  className="text-white bg-transparent  focus:outline-none hover:bg-[#EAB308] hover:text-black font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center  me-2 mt-5"
                  style={{
                    boxShadow:
                      " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
                  }}
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  My Github Profile
                </button>
              </a>
            </div>
          </div>
        </div>


        {/* SECTION-3 */}

        
      </div>
    </>
  );
}

export default Home;
