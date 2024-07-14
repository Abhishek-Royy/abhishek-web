import React from "react";
import AllProjects from "../components/AllProjects";


import ParticleComponents from "../components/Particle"

function Projects() {
  return (
    <>
    <div>

    <ParticleComponents id="particles" />
      {/* <div className="main w-full h-auto md:pt-20 bg-gradient-to-br from-black to-[#010815] py-10  md:px-32 text-white"> */}
      <div className="main w-full h-auto md:pt-20 py-20  md:px-32 text-white">
        <div>
          <h1 className="md:w-max w-[95%]  p-3 h-max md:mx-0 mx-auto justify-center text-3xl font-bold animate-bounce flex items-center gap-3 text-[#fff] mb-5">
            MY CREATIVE PROJECT IDEA
          </h1>
          <AllProjects />
        </div>
      </div>

      </div>
    </>
  );
}

export default Projects;
