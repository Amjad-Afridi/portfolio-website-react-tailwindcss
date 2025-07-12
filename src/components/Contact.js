import React, { useState } from "react";
import links from "./SocialMediaLinks";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
    }, 2000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      description: "Drop me a line anytime",
      contact: "amjadafridi067@gmail.com",
      href: "mailto:amjadafridi067@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      description: "Call me for urgent matters",
      contact: "+923125487382",
      href: "tel:+923125487382"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      description: "Based in Pakistan",
      contact: "Lahore, Punjab, Pakistan",
      href: "#"
    }
  ];

  return (
    <section
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities, challenging projects, and 
                collaborating with innovative teams. Whether you have a question about 
                my work or want to discuss a potential project, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {method.description}
                    </p>
                    <a
                      href={method.href}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex flex-col">
              <h4 className="text-xl font-bold text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex items-center">
                    <ul className="flex gap-2 flex-wrap">
                      {links.map(({ id, href, child, download }) => (
                        <li
                          key={id}
                          className="flex justify-between items-center h-14 px-2 rounded-md bg-gray-700"
                        >
                          <>
                            <a
                              href={href}
                              className="flex items-center gap-1 justify-between text-white w-full"
                              download={download}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {child}
                            </a>
                          </>
                        </li>
                      ))}
                    </ul>
                  </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>
            
            <form
              action="https://getform.io/f/37eaf825-4603-4c64-b50d-6b2b2d389483"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-400 text-center">
                <span className="text-green-400">✓</span> I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;