import React, { useEffect } from "react";
import Typed from "typed.js";
import mainImage from "../assets/mainImg.png";

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
      <div className="main w-full lg:h-[90vh] h-auto bg-black text-white md:px-32 pt-20 lg:pt-0">
        <div className="w-full  h-full md:flex">
          <div className="left w-[95%] m-auto  md:w-1/2 h-full  flex flex-col items-start justify-center">
            <h3 className="text-3xl font-bold">Hello, Welcome</h3>
            <h1 className="text-5xl font-bold my-4">
              {" "}
              MYSELF <span className="text-[#38B8DD]">ABHISHEK ROY</span>{" "}
            </h1>
            <span className="dev text-4xl font-bold uppercase text-[#ffe72f]"></span>

            <p className="mt-4 text-xl w-[90%]">
              I'm a Computer Science & Engineering Student, attending Brainware
              University
            </p>
            <div className="gap-10 w-full flex mt-8">
              <button
                className="border rounded-lg font-medium text-base py-3 w-44 hover:bg-[#EAB308] hover:text-black ease-in duration-300"
                style={{
                  boxShadow:
                    " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
                }}
              >
                HIRE ME
              </button>
              <button
                className="border rounded-lg font-medium text-base py-3 w-44 hover:bg-[#EAB308] hover:text-black ease-in duration-300"
                style={{
                  boxShadow:
                    " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
                }}
              >
                GET CV
              </button>
            </div>
          </div>
          <div className="right lg:w-1/2 w-[95%] m-auto h-full mt-10 lg:mt-0 flex items-center justify-end">
            <img
              className="w-full h-full object-contain"
              src={mainImage}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
