import { useQuery } from '@tanstack/react-query';
import { blogApi } from '../services/blogApi';

// Query keys
export const blogKeys = {
  all: ['blogs'],
  published: () => [...blogKeys.all, 'published'],
  featured: () => [...blogKeys.all, 'featured'],
  bySlug: (slug) => [...blogKeys.all, 'slug', slug],
};

// Hook to get all published blogs
export const usePublishedBlogs = () => {
  return useQuery({
    queryKey: blogKeys.published(),
    queryFn: blogApi.getPublishedBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook to get featured blogs
export const useFeaturedBlogs = () => {
  return useQuery({
    queryKey: blogKeys.featured(),
    queryFn: blogApi.getFeaturedBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook to get blog by slug
export const useBlogBySlug = (slug) => {
  return useQuery({
    queryKey: blogKeys.bySlug(slug),
    queryFn: () => blogApi.getBlogBySlug(slug),
    enabled: !!slug, // Only run query if slug exists
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
