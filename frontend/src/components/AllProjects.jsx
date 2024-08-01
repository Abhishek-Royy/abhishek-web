import React from "react";
import taskItem from "../data/project.json";
import { motion } from "framer-motion"

function AllProjects() {
  return (
    <>
      <div className="iDo md:w-full w-[95%] m-auto h-auto flex gap-5 flex-wrap  justify-center">
        {taskItem.map((item) => (
          <motion.div
          whileHover={{y:-5}}
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a  href={item.task_link} target="_blank">
              <img
                className="rounded-t-lg "
                src={item.task_image}
                alt={item.task_name}
              />
            </a>
            <div class="p-5">
              <a href={item.task_link} target="_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.task_name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.task_desc}
              </p>
              <a
                href={item.task_link}
                target="_blank"
                class="inline-flex items-center px-8 py-3 text-sm rounded-lg  font-medium text-center hover:bg-[#EAB308] hover:text-black bg-black focus:outline-none  "
                style={{
                    boxShadow:
                      " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
                  }}
              >
                Click Me
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AllProjects;
