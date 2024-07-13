import React from "react";
import AboutSkills from "../components/AboutSkills";
import ExperienceSection from "../components/Experience";

function About() {
  return (
    <>
      <div className="main w-full min-h-full">
        <div className="w-full  h-auto bg-black text-white md:px-32 pt-10 lg:pt-0">
          <h1 className="w-max   p-3 h-max md:mx-0  justify-center text-3xl font-bold animate-bounce flex items-center gap-3 text-[#fff] lg:pt-16 ">
            ABOUT ME !
          </h1>
          <p className="lg:w-full h-auto w-[95%] m-auto">
            Hello! I'm <span className="text-[#ffe72f]">Abhishek Roy</span>, a
            Computer Science student at Brainware University with a passion for
            Web Development & Photography. My journey in technology began when I
            saw a video on YouTube titled "How to Hack Your Girlfriend's Phone
            😊." That was the first time I heard the term "coding." Intrigued, I
            searched for more concepts about coding on YouTube. Gradually, I
            started learning C, and my learning journey continues to this day.
            Now, I am a good Frontend Developer. I wrote my first line of code
            on my mobile phone using the C language.
            <br></br>
            <br></br>
            Over the past 2 years, I have honed my skills in programming
            languages like Python, JavaScript, and C, as well as frameworks and
            tools such as React, Node.js, Tailwind CSS, and Git. I also have
            experience with databases such as MongoDB. I thrive in collaborative
            environments and enjoy working on projects that challenge me to
            learn and grow.
            <br></br>
            <br></br>
            In addition to my technical endeavors, I have a passion for
            photography. Capturing moments through my lens allows me to see the
            world from different perspectives and fuels my creativity. This
            hobby complements my work in web development, as it helps me
            appreciate the nuances of visual aesthetics and composition.
            <br></br>
            <br></br>
            As I continue my journey in the tech industry, I am excited to take
            on new challenges, collaborate with like-minded individuals, and
            contribute to projects that make a positive impact. My goal is to
            continuously learn and grow, staying up-to-date with the latest
            advancements in technology and applying my skills to create
            innovative solutions.
          </p>

          <div className="education lg:w-full h-auto w-[95%] m-auto">
            <h1 className="w-max  pt-10 h-max md:mx-0  justify-center text-2xl font-bold flex items-center gap-3 text-[#ffe72f] lg:pt-14 ">
              Education
            </h1>
            <div className="edu-wrapper flex flex-wrap">
              <div className=" hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
                <p className="text-gray-900 dark:text-white">
                  <span className="block text-lg font-semibold">
                    Diploma in Computer Science and Technology
                  </span>
                  <span className="block text-sm italic">
                    Regent Institute of Science & Technology, 2024
                  </span>
                </p>
                <p className="mt-4">
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    Relevant Coursework:
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {" "}
                    C, Operating Systems, Artificial Intelligent, Computer
                    Networking etc.
                  </span>
                </p>
              </div>
              <div className="hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6 rounded-lg shadow-md max-w-md mx-auto my-auto">
                <p className="text-gray-900 dark:text-white">
                  <span className="block text-lg font-semibold">
                    Bachelor of Computer Science and Engineering
                  </span>
                  <span className="block text-sm italic">
                    Brainware University, 2027(Pursuing)
                  </span>
                </p>
                <p className="mt-4">
                  <span className="text-gray-700 dark:text-gray-400 font-semibold">
                    Relevant Coursework:
                  </span>
                  <span className="text-gray-700 dark:text-gray-400">
                    {" "}
                    Data Structures and Algorithms, Operating Systems, Python,
                    Javascript, Aptitutte, Interview Preparation
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="skills lg:w-full h-auto w-[95%] m-auto">
            <h1 className="w-max  pt-10 h-max md:mx-0  justify-center text-2xl font-bold flex items-center gap-3 text-[#ffe72f] lg:pt-14 ">
              Skills
            </h1>
            <div>
              <AboutSkills />
            </div>
          </div>

          <div className="skills lg:w-full h-auto w-[95%] m-auto">
            <h1 className="w-max  pt-10 h-max md:mx-0  justify-center text-2xl font-bold flex items-center gap-3 text-[#ffe72f] lg:pt-14 ">
              Experience
            </h1>
            <div>
              <ExperienceSection />
            </div>
          </div>

          <div className="interest lg:w-full h-auto w-[95%] m-auto">
            <h1 className="w-max  pt-10 h-max md:mx-0  justify-center text-2xl font-bold flex items-center gap-3 text-[#ffe72f] lg:pt-14 ">
              Interest
            </h1>
            <div>
              <div className="container mx-auto lg:p-8 py-8">
                <div className="hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-md rounded-lg p-6">
                  <p className="text-gray-900 dark:text-white mb-4">
                    Outside of coding, I enjoy playing Cricke, watching movies, and
                    travelling. I believe in continuous learning and often
                    participate in hackathons, coding bootcamps, and online
                    courses to keep my skills up-to-date.
                  </p>
                  <p className="text-gray-900 dark:text-white mb-4">
                  🙋🏻‍♂️I am excited about the future of technology and look forward
                    to contributing to innovative projects that make a
                    difference. Thank you for visiting my portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
