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

        <div className="sec-2 w-full md:h-[90vh] md:pt-20 bg-gradient-to-br from-black to-[#010815] pt-10  md:px-32 text-white ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
