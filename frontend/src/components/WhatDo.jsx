import React from "react";
import whatdo from "../data/whatDo.json";
import { motion } from "framer-motion";

function WhatDo() {
  return (
    <>
      <div className="box md:w-full w-[95%] mx-auto h-auto flex flex-wrap gap-5 justify-center">
        {whatdo.map((item) => (
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.whatdo_title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.whatdo_desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default WhatDo;
