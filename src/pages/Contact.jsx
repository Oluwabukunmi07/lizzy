import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks for reaching out, ${name}, we'll get back to you soon!`);
  }

  return (
    <div className="px-6 py-8 mx-auto flex flex-col gap-1 items-center">
      <h1 className="text-3xl text-gray-800 mb-2">Contact Us</h1>
      <p className="text-gray-400 leading-relaxed">Phone: +2348033986620</p>
      <p className="text-gray-400 leading-relaxed">
        Email: felayetunde@gmail.com
      </p>
      <p className="text-gray-400 leading-relaxed mb-6">
        Location: Akure, Ondo State, Nigeria
      </p>

      <form
        className="border-2 bg-gray-100 p-6 rounded-lg w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-center gap-2">
          <label className="p-1 text-gray-600">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-1 rounded-lg p-2 h-10 w-full"
          />
        </div>

        <div className="flex flex-row gap-2 justify-center">
          <label className="p-1 text-gray-600">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-1 rounded-lg p-2 w-full"
          />
        </div>

        <textarea
          placeholder="Your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 rounded-lg p-2 h-32 w-full"
        />

        <button className="bg-black hover:bg-gray-800 rounded text-white py-2 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
