import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    window.location.href = `mailto:yourmail@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="w-full bg-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-8">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="p-3 rounded-lg text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="p-3 rounded-lg text-black"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
            className="md:col-span-2 p-3 rounded-lg text-black"
          ></textarea>

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