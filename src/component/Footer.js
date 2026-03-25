import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Sumanth,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // WhatsApp
      window.open(
        `https://wa.me/918121171446?text=${text}`,
        "_blank"
      );
    } else {
      // Email
      window.location.href =
        `mailto:sumanth.prt@gmail.com?subject=Contact%20from%20Portfolio&body=${text}`;
    }

    // Clear form
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <footer className="w-full bg-blue-600 text-white py-8">

      <div className="max-w-md mx-auto px-4 text-center space-y-4">

        {/* TITLE */}
        <p className="text-lg font-medium">
          Contact Me
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black text-sm outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black text-sm outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 rounded-md text-black text-sm outline-none"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-white text-blue-600 py-2 rounded-md text-sm font-medium 
                       hover:bg-blue-100 transition"
          >
            Send Message
          </button>

        </form>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-4 text-xs text-blue-200 pt-2">
          <a href="https://github.com/issumanth" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sumanth-g-0a5501306" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-blue-200">
          © {new Date().getFullYear()} Sumanth
        </p>

      </div>

    </footer>
  );
}

export default Footer;