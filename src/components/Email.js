import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ao9fnyh",
        "template_r6j7k2j",
        form.current,
        "sH5mBwgaPtNY4qohG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#0a192f] ">
      <div name="contact" className=" text-white flex justify-center text-4xl font-bold">Email me via </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-sm mx-auto pb-8 mt-8 p-4 text-white border-white border-2 shadow-lg rounded-lg "
      >
        <div className="mb-4 ">
          <label className="block font-bold mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Message</label>
          <textarea
            name="message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
};
