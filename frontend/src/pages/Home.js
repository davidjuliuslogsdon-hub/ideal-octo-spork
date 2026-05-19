import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
            Brotherhood of Shadows
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            United in Purpose. Bound by Honor. Growing Together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/about"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-bold transition transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-purple-600 hover:bg-purple-600 px-8 py-3 rounded-lg font-bold transition"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Brotherhood',
                description: 'We stand together, supporting one another through challenges and celebrating successes.'
              },
              {
                icon: '⚔️',
                title: 'Strength',
                description: 'We build strength of character, purpose, and community through shared experiences.'
              },
              {
                icon: '🎯',
                title: 'Purpose',
                description: 'We pursue meaningful goals and contribute positively to our community and world.'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-lg border border-purple-700 hover:border-purple-500 transition transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-800 border-t border-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Brotherhood?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of a community dedicated to growth, support, and shared purpose.
          </p>
          <Link
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-bold transition transform hover:scale-105 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
