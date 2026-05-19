import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          We'd love to hear from you. Reach out with any questions or inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'contact@brotherhoodofshadows.org',
                  link: 'mailto:contact@brotherhoodofshadows.org'
                },
                {
                  icon: '📱',
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                  link: 'tel:+15551234567'
                },
                {
                  icon: '📍',
                  title: 'Location',
                  content: 'Multiple Cities',
                  link: null
                },
                {
                  icon: '⏰',
                  title: 'Response Time',
                  content: '24-48 hours',
                  link: null
                }
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-purple-400 hover:text-purple-300">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-2xl">
                  f
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-2xl">
                  𝕏
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition text-2xl">
                  📷
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg border border-purple-700">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-900 border border-green-600 rounded-lg text-green-200">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-purple-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-purple-500 transition"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-purple-500 transition resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
