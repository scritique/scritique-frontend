import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blog post", err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-semibold text-gray-700">Loading Article...</h1>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-purple-600 hover:text-purple-800 flex items-center">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Blog Header Image */}
      <div className="w-full h-[40vh] sm:h-[50vh] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center text-gray-200 gap-4 sm:gap-8 mt-4">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 md:p-14"
        >
          <Link to="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-8 transition-colors duration-200">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>

          <div 
            className="prose prose-lg prose-purple max-w-none text-gray-700" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-purple-50 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Did you find this helpful?</h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for more academic writing tips.</p>
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 rounded-lg p-6 max-w-md mx-auto"
              >
                <p className="text-xl font-semibold text-green-800">
                  🎉 Successfully subscribed!
                </p>
                <p className="text-green-700 mt-2">
                  Thank you for joining our newsletter.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
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

export default BlogPostPage;
