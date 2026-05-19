import React from 'react';

export default function Members() {
  const teamMembers = [
    {
      id: 1,
      name: 'Joker Mizfit',
      role: 'Founder & President',
      image: '🛡️',
      bio: 'Visionary leader committed to building a community of purpose.'
    },
    {
      id: 2,
      name: 'Tator tot',
      role: 'Vice President',
      image: '⚔️',
      bio: 'Dedicated to fostering unity and strength within our brotherhood.'
    },
    {
      id: 3,
      name: 'Twizted Cowboy',
      role: 'Sergeant-at-arms',
      image: '📋',
      bio: 'Ensures our community runs smoothly and efficiently.'
    },
    {
      id: 4,
      name: '',
      role: 'Secretary',
      image: '$',
      bio: 'Builds and maintains strong connections among our members.'
    },
    {
      id: 5,
      name: '',
      role: 'Treasurer',
      image: '💡',
      bio: 'Drives innovation and continuous improvement.'
    },
    {
      id: 6,
      name: '',
      role: 'Road Captain',
      image: '🎓',
      bio: 'Guides new members through their journey of growth.'
    }
  ];

  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
          Our Team
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Meet the dedicated individuals who make Brotherhood of Shadows possible.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-purple-700 hover:border-purple-500 transition transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">{member.name}</h3>
              <p className="text-purple-300 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Member Spotlight */}
        <section className="mt-16 p-8 bg-gray-800 rounded-lg border border-purple-700">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Become a Member</h2>
          <p className="text-gray-300 text-lg mb-4">
            We are always welcoming dedicated individuals who share our values and commitment to growth and community service. If you believe in the power of brotherhood and want to make a positive impact, we'd love to have you join us.
          </p>
          <p className="text-gray-400">
            To apply for membership or learn more about joining, please use our contact form or reach out to a current member.
          </p>
        </section>
      </div>
    </div>
  );
}
