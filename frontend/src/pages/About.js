import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
          About Brotherhood of Shadows
        </h1>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="bg-gray-800 p-8 rounded-lg border border-purple-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The Brotherhood of Shadows is dedicated to building a community of individuals committed to personal growth, mutual support, and positive social impact. We believe that true strength lies in unity, and that together, we can achieve extraordinary things.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to foster deep connections, encourage member development, and create opportunities for meaningful contribution to our community and beyond.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <div className="bg-gray-800 p-8 rounded-lg border border-purple-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a world where communities of purpose thrive, where individuals support one another's growth, and where collective action creates meaningful, lasting change. The Brotherhood of Shadows stands as a beacon of unity and positive influence.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Integrity', description: 'We maintain the highest ethical standards in all our actions.' },
              { title: 'Unity', description: 'We stand together, bound by common purpose and shared values.' },
              { title: 'Growth', description: 'We commit to continuous personal and collective development.' },
              { title: 'Service', description: 'We dedicate ourselves to serving our community with honor.' },
              { title: 'Loyalty', description: 'We remain faithful to our commitments and to one another.' },
              { title: 'Excellence', description: 'We strive for excellence in all our endeavors.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section>
          <div className="bg-gray-800 p-8 rounded-lg border border-purple-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The Brotherhood of Shadows was founded on the principle that together, we are stronger. What began as a small group of like-minded individuals has grown into a vibrant community of members dedicated to excellence, integrity, and mutual support.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, we continue our mission to inspire, support, and empower our members to achieve their greatest potential and contribute meaningfully to the world around them.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
