import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/blogs`)
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blogs", err);
        setIsLoading(false);
      });
  }, []);

  const categories = ['All', 'Academic Writing', 'Thesis & Dissertation', 'Research Methods', 'Academic Presentations'];

  const filteredPosts = blogPosts.filter(post =>
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
            >
              The Scritique Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-purple-100 max-w-3xl mx-auto font-serif"
            >
              Explore expert blogs on academic writing, research, and scholarly success
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setActiveCategory(category); setVisibleCount(3); }}
                className={`px-6 py-2 rounded-full border transition-colors duration-200 ${activeCategory === category
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-500 hover:text-purple-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div className="col-span-full py-12 text-center text-gray-500">Loading articles...</div>
            ) : filteredPosts.length === 0 ? (
              <div className="col-span-full py-12 text-center text-gray-500">No articles available in this category.</div>
            ) : (
              filteredPosts.slice(0, visibleCount).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                      <CalendarIcon className="h-4 w-4 ml-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                      Read More
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                className="btn-primary"
                onClick={() => setVisibleCount(prev => prev + 3)}
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest academic writing tips and insights delivered to your inbox
          </p>
          {isSubscribed ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto"
            >
              <p className="text-xl font-semibold text-white">
                🎉 Successfully subscribed!
              </p>
              <p className="text-purple-100 mt-2">
                Thank you for joining our newsletter.
              </p>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 