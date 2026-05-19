import React from 'react';

export default function Gallery() {
  const galleryImages = [
    { id: 1, title: 'Brotherhood Gathering', emoji: '👥', description: 'Members united in purpose' },
    { id: 2, title: 'Community Service', emoji: '🤝', description: 'Giving back to our community' },
    { id: 3, title: 'Training Session', emoji: '💪', description: 'Personal development and growth' },
    { id: 4, title: 'Leadership Summit', emoji: '🎯', description: 'Strategic planning and vision' },
    { id: 5, title: 'Annual Celebration', emoji: '🎉', description: 'Celebrating our achievements' },
    { id: 6, title: 'Mentorship Program', emoji: '🎓', description: 'Supporting new members' },
    { id: 7, title: 'Network Events', emoji: '🌐', description: 'Building meaningful connections' },
    { id: 8, title: 'Charity Drive', emoji: '❤️', description: 'Making a difference together' },
    { id: 9, title: 'Outdoor Adventure', emoji: '⛰️', description: 'Building bonds and resilience' }
  ];

  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
          Gallery
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Moments that define our brotherhood.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg border border-purple-700 hover:border-purple-500 transition cursor-pointer"
            >
              {/* Placeholder Image with Emoji */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 h-64 flex flex-col items-center justify-center relative overflow-hidden group-hover:from-purple-800 group-hover:to-purple-600 transition">
                <div className="text-7xl mb-4 transform group-hover:scale-110 transition">{image.emoji}</div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Card Info */}
              <div className="bg-gray-800 p-4">
                <h3 className="font-bold text-lg text-purple-400 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-400">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-16 p-8 bg-gray-800 rounded-lg border border-purple-700 text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Share Your Moments</h2>
          <p className="text-gray-300 text-lg mb-4">
            Do you have photos from Brotherhood events? We'd love to feature your memories. Send us your images to showcase our community!
          </p>
          <p className="text-gray-400">Contact us to submit your photos for the gallery.</p>
        </section>
      </div>
    </div>
  );
}
