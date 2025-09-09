# Blog API Integration

This directory contains the API service functions for blog-related operations.

## Setup

1. Create a `.env` file in your project root and add:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   Update the URL to match your backend API URL.

2. The API endpoints are:
   - `GET /api/blogs/published` - Get all published blogs
   - `GET /api/blogs/slug/:slug` - Get blog by slug
   - `GET /api/blogs/featured` - Get featured blogs

## Usage

The blog API is integrated with TanStack Query for efficient data fetching and caching. Use the custom hooks:

- `usePublishedBlogs()` - Fetch all published blogs
- `useFeaturedBlogs()` - Fetch featured blogs
- `useBlogBySlug(slug)` - Fetch a specific blog by slug

## Fallback

If the API is unavailable, the components will fall back to static data to ensure the UI remains functional.
