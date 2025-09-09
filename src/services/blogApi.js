import axios from 'axios';

// Base URL for your API
const API_BASE_URL = 'https://blogplatform-backend-cloudinary-xi.vercel.app/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Blog API functions
export const blogApi = {
  // Get all published blogs
  getPublishedBlogs: async () => {
    const response = await api.get('/blogs/published');
    return response.data;
  },

  // Get blog by slug
  getBlogBySlug: async (slug) => {
    const response = await api.get(`/blogs/slug/${slug}`);
    return response.data;
  },

  // Get featured blogs
  getFeaturedBlogs: async () => {
    const response = await api.get('/blogs/featured');
    return response.data;
  },
};

export default blogApi;
