import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    // FINAL FIX (no blank tab)
    window.location.href =
      `mailto:sumanth.prt@gmail.com?subject=${subject}&body=${body}`;

    // CLEAR FORM
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <footer className="w-full bg-blue-600 text-white py-10 sm:py-12 md:py-14">

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Get In Touch
        </h2>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg text-black outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg text-black outline-none"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
            className="md:col-span-2 p-3 rounded-lg text-black outline-none"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </footer>
  );
}

export default Footer;