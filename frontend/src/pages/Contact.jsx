import React from "react";

function Contact() {
  return (
    <>
      <section class="bg-black">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#ffe72f]">
            Contact Me
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            <span className="text-[#38B8DD]">For Hire me ! </span> Further any
            query or get more information please contact me
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-[#ffe72f]"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="email@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-[#ffe72f]"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="+91 0000000000"
                required
              />
            </div>

            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-[#ffe72f]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Hire me ? or others query / information"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-[#ffe72f]"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-4 px-14 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              style={{
                boxShadow: " #ffe72f 0px 1px 36px 0px, #f9e447 0px 0px 0px 1px",
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
