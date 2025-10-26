import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";

const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      setStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact-section" className="bg-white py-20 px-6 md:px-12">
      <h2 className=" text-5xl text-center my-19 font-bold">Contact <span className=" text-green-600">Us</span></h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ✅ Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6">
            Get in Touch
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Have any questions or want to share food with us?
            We’d love to hear from you! Reach out anytime.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <MapPin className="text-[#1E1E1E] group-hover:text-green-600 w-6 h-6 transition" />
              <span className="text-[#1E1E1E]">
                Share Food Bite, Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className="text-[#1E1E1E] group-hover:text-green-600 w-6 h-6 transition" />
              <span className="text-[#1E1E1E]">+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-3 group">
              <MessageSquare className="text-[#1E1E1E] group-hover:text-green-600 w-6 h-6 transition" />
              <span className="text-[#1E1E1E]">
                WhatsApp: +880 9876-543210
              </span>
            </div>
            <div className="flex items-center gap-3 group">
              <Mail className="text-[#1E1E1E] group-hover:text-green-600 w-6 h-6 transition" />
              <span className="text-[#1E1E1E]">contact@sharefoodbite.com</span>
            </div>
          </div>
        </div>

        {/* ✅ Right Side - Email Form */}
        <div className="bg-[#F9F9F9] p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
            Send Us a Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-[#1E1E1E]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 bg-white text-[#1E1E1E] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#1E1E1E]">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 bg-white text-[#1E1E1E] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#1E1E1E]">
                Subject / Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Subject"
                className="w-full border border-gray-300 bg-white text-[#1E1E1E] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#1E1E1E]">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 bg-white text-[#1E1E1E] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-white border border-green-600 text-gray-900 py-2 rounded hover:bg-green-600 transition font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-2">
                ❌ Failed to send message. Try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
