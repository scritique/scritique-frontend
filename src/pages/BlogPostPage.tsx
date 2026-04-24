import React, { useState } from 'react';
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

  // Use the same mock data or fetch it from a central source/API in a real app
  const dummyContent = `
    <p>Academic writing is a critical skill that scholars and students must develop to effectively communicate their ideas and findings. It requires precision, clarity, and an objective tone. Research papers, essays, and dissertations all fall under this broad category.</p>
    <h2>Understanding the Requirements</h2>
    <p>Before putting pen to paper (or fingers to keyboard), it's essential to thoroughly understand the prompt or assignment guidelines. Many students lose points simply because they failed to address specific requirements outlined by their instructors or target journals.</p>
    <ul>
      <li>Identify the core question being asked.</li>
      <li>Understand the formatting guidelines (APA, MLA, Chicago, etc.).</li>
      <li>Note the word count and deadline.</li>
    </ul>
    <h2>Conducting Thorough Research</h2>
    <p>A strong academic paper is built on a foundation of solid research. Utilize credible sources such as peer-reviewed journals, academic books, and reputable databases. Keep track of your sources from the beginning to make citation easier later on.</p>
    <blockquote>
      <p>"The true sign of intelligence is not knowledge but imagination." – Albert Einstein</p>
    </blockquote>
    <h2>Structuring Your Ideas</h2>
    <p>Organize your findings into a logical structure. A typical academic paper includes an introduction, literature review, methodology, results, discussion, and conclusion. Use clear headings to guide the reader through your arguments.</p>
    <h2>Drafting and Revising</h2>
    <p>Write your first draft without worrying too much about perfection. The goal is to get your ideas down. Once the draft is complete, take a break before returning to revise. Look for issues with flow, clarity, and grammatical correctness. Reading your work aloud can often help identify awkward phrasing.</p>
    <p>By following these fundamental principles, you can significantly improve the quality and impact of your academic writing, ensuring your ideas reach their intended audience effectively.</p>
  `;

  const blogPosts = [
    {
      id: 1,
      title: 'How to Write an Effective Research Paper',
      excerpt: 'Learn the essential steps and techniques to write a compelling research paper that will impress your professors and peers.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Academic Writing',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      readTime: '8 min read',
      content: dummyContent
    },
    {
      id: 2,
      title: 'Mastering PowerPoint Presentations: A Complete Guide',
      excerpt: 'Discover the secrets to creating engaging and professional PowerPoint presentations that will captivate your audience.',
      author: 'Prof. Michael Chen',
      date: '2024-01-10',
      category: 'Presentations',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: dummyContent
    },
    {
      id: 3,
      title: 'The Art of Thesis Writing: From Proposal to Defense',
      excerpt: 'A comprehensive guide to writing your thesis, from the initial proposal to the final defense presentation.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-05',
      category: 'Thesis Writing',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: dummyContent
    },
    {
      id: 4,
      title: 'Academic Writing Tips for International Students',
      excerpt: 'Essential writing strategies and tips specifically designed for international students studying in English-speaking countries.',
      author: 'Prof. David Thompson',
      date: '2023-12-28',
      category: 'Academic Writing',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: dummyContent
    },
    {
      id: 5,
      title: 'Citation Styles: APA, MLA, and Chicago Explained',
      excerpt: 'A detailed comparison of the most common citation styles used in academic writing, with examples and best practices.',
      author: 'Dr. Lisa Wang',
      date: '2023-12-20',
      category: 'Academic Writing',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: dummyContent
    },
    {
      id: 6,
      title: 'How to Choose the Right Research Methodology',
      excerpt: 'Guidance on selecting the most appropriate research methodology for your academic project or thesis.',
      author: 'Prof. Robert Kim',
      date: '2023-12-15',
      category: 'Research Methods',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      content: dummyContent
    }
  ];

  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-purple-600 hover:text-purple-800 flex items-center">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Blog directory
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
