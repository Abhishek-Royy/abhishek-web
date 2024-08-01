// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };


//   const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "-100%" },
//   }

//   return (
//     <motion.nav
//     className="bg-gradient-to-t from-black to-[#061A40] text-white  sticky top-0 z-[9999999999999] ">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
//         <div className="relative flex items-center justify-between h-20">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <button
//               onClick={toggleMenu}
//               onBlur={()=>{setTimeout(() => {
//                 setIsOpen(false)
//               }, 1000);}}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isOpen ? "hidden" : "block"} h-8 w-8`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//               <svg
//                 className={`${isOpen ? "block" : "hidden"} h-8 w-8`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between  ">
//             <div className="flex-shrink-0">
//               <NavLink to="/">
//               <h1 className="text-2xl font-bold">
//                 <span className="text-white text-3xl bg-yellow-500 px-3 py-[5px]  rounded-full">
//                   A
//                 </span>
//                 BHISHEK
//               </h1></NavLink>
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <NavLink
//                   to="/"
//                   className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="/about"
//                   className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
//                 >
//                   About
//                 </NavLink>
//                 <NavLink
//                   to="https://drive.google.com/file/d/1hMjlmsnZkOxnRTjbmY8nkFZe7Q-zxK_9/view?usp=sharing"
//                   target="_blank"
//                   className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
//                 >
//                   Resume
//                 </NavLink>
//                 <NavLink
//                   to="/projects"
//                   className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
//                 >
//                   Projects
//                 </NavLink>
//                 <NavLink
//                   to="/contact"
//                   className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium"
//                 >
//                   Contact
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } sm:hidden sticky top-0 z-[9999999999999]`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-8">
//           <NavLink
//             to="/"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="https://drive.google.com/file/d/10FIoMgxfFh8U4K-MU3QPhGXSisze_O2a/view?usp=sharing"
//             target="_blank"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
//           >
//             Resume
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
//           >
//             Project
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
//           >
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.nav
      className="bg-gradient-to-t from-black to-[#061A40] text-white sticky top-0 z-[9999999999999]"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 500);
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <h1 className="text-2xl font-bold">
                  <span className="text-white text-3xl bg-yellow-500 px-3 py-[5px] rounded-full">
                    A
                  </span>
                  BHISHEK
                </h1>
              </NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="https://drive.google.com/file/d/1hMjlmsnZkOxnRTjbmY8nkFZe7Q-zxK_9/view?usp=sharing"
                  target="_blank"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Resume
                </NavLink>
                <NavLink
                  to="/projects"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden sticky top-0 z-[9999999999999]`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-8">
          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="https://drive.google.com/file/d/10FIoMgxfFh8U4K-MU3QPhGXSisze_O2a/view?usp=sharing"
            target="_blank"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-xl font-medium"
          >
            Contact
          </NavLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
