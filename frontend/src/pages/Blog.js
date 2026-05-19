import React, { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Power of Unity: Building Stronger Communities',
      category: 'leadership',
      date: '2026-05-15',
      author: 'Alexander Kane',
      excerpt: 'Discover how the Brotherhood of Shadows leverages the power of unity to create meaningful change and lasting impact.',
      image: '🤝'
    },
    {
      id: 2,
      title: 'Personal Growth Through Community Support',
      category: 'growth',
      date: '2026-05-10',
      author: 'James Harrison',
      excerpt: 'Learn how mentorship and community support accelerate personal development and help members achieve their goals.',
      image: '📈'
    },
    {
      id: 3,
      title: 'Integrity: The Foundation of Brotherhood',
      category: 'values',
      date: '2026-05-05',
      author: 'Marcus Steel',
      excerpt: 'Explore what integrity means to us and how it guides every decision and action we take as a brotherhood.',
      image: '⚖️'
    },
    {
      id: 4,
      title: 'Service in Action: Our Community Initiatives',
      category: 'service',
      date: '2026-04-30',
      author: 'David Turner',
      excerpt: 'Read about the recent community service projects and initiatives led by our brotherhood members.',
      image: '❤️'
    },
    {
      id: 5,
      title: 'Mentorship Success Stories',
      category: 'growth',
      date: '2026-04-25',
      author: 'Christopher Brooks',
      excerpt: 'Inspiring stories of mentorship that have transformed lives and deepened our community bonds.',
      image: '🎓'
    },
    {
      id: 6,
      title: 'Strategic Vision: Where We\'re Headed',
      category: 'leadership',
      date: '2026-04-20',
      author: 'Alexander Kane',
      excerpt: 'A look at our strategic direction and exciting initiatives planned for the Brotherhood of Shadows.',
      image: '🎯'
    }
  ];

  const categories = [
    { name: 'all', label: 'All Posts' },
    { name: 'leadership', label: 'Leadership' },
    { name: 'growth', label: 'Personal Growth' },
    { name: 'values', label: 'Our Values' },
    { name: 'service', label: 'Community Service' }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
          Brotherhood Blog
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Insights, stories, and updates from our community.
        </p>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === category.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-purple-700 hover:border-purple-500 transition transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/4 bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center p-8 group-hover:from-purple-800 group-hover:to-purple-600 transition">
                  <div className="text-6xl">{post.image}</div>
                </div>

                {/* Content */}
                <div className="md:w-3/4 p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-purple-400 font-semibold">
                      {categories.find(c => c.name === post.category)?.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <button className="text-purple-400 hover:text-purple-300 transition font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
