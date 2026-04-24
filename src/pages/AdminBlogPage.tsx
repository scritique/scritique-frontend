import React, { useState, useEffect, useCallback } from 'react';
import { TrashIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline';

const AdminBlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    date: '',
    category: '',
    readTime: '',
    image: '',
    content: ''
  });

  const apiUrl = `${process.env.REACT_APP_API_URL}/blogs`;

  const fetchBlogs = useCallback(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blogs", err);
        setIsLoading(false);
      });
  }, [apiUrl]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddNew = () => {
    setIsEditing(true);
    setCurrentBlog(null);
    setFormData({
      title: '',
      excerpt: '',
      author: 'Scritique Team',
      date: new Date().toISOString().split('T')[0],
      category: 'Academic Writing',
      readTime: '5 min read',
      image: '',
      content: ''
    });
  };

  const handleEdit = (blog: any) => {
    setIsEditing(true);
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author,
      date: blog.date,
      category: blog.category,
      readTime: blog.readTime,
      image: blog.image,
      content: blog.content
    });
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;
    
    try {
      const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      if (res.ok) fetchBlogs();
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isUpdating = currentBlog !== null;
      const url = isUpdating ? `${apiUrl}/${currentBlog.id}` : apiUrl;
      const method = isUpdating ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsEditing(false);
        fetchBlogs();
      }
    } catch (err) {
      console.error("Failed to save blog", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Management Portal</h1>
          {!isEditing && (
            <button
              onClick={handleAddNew}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center shadow transition-colors"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add New Post
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {currentBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input type="text" name="title" required value={formData.title} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input type="text" name="category" required value={formData.category} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input type="text" name="author" required value={formData.author} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Read Time</label>
                  <input type="text" name="readTime" required value={formData.readTime} onChange={handleInputChange} placeholder="e.g. 5 min read" className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image URL</label>
                  <input type="url" name="image" required value={formData.image} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Excerpt</label>
                <textarea name="excerpt" required rows={2} value={formData.excerpt} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full HTML Content</label>
                <textarea name="content" required rows={10} value={formData.content} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg font-mono text-sm focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow transition-colors">
                  Save Post
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            {isLoading ? (
              <div className="p-12 text-center text-gray-500">Loading blogs...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">No blog posts found.</td>
                      </tr>
                    ) : (
                      blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{blog.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                              {blog.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {blog.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => handleEdit(blog)} className="text-indigo-600 hover:text-indigo-900 mr-4" title="Edit">
                              <PencilSquareIcon className="w-5 h-5 inline" />
                            </button>
                            <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:text-red-900" title="Delete">
                              <TrashIcon className="w-5 h-5 inline" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogPage;
