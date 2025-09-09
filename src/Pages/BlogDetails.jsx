import React from "react";
import PageBanner from "../Components/Website/PageBanner";
import banner from "../assets/images/banners/blogs.webp";
import BlogItem from "../Components/Website/BlogItem";
import HrLine from "../Components/HrLine";
import { Link, useParams } from "react-router-dom";
import { useBlogBySlug } from "../hooks/useBlogs";

const BlogDetails = () => {
  const { title } = useParams();

  // Fetch blog by slug using TanStack Query
  const {
    data: blogData,
    isLoading: blogLoading,
    error: blogError,
  } = useBlogBySlug(title);

  // Use blog data from API
  const blog = blogData?.blog;

  if (blogLoading) {
    return (
      <>
        <PageBanner banner={banner} title="Blogs" />
        <div className="wrapper pt-[5rem] flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </>
    );
  }

  if (blogError || !blog) {
    return (
      <>
        <PageBanner banner={banner} title="Blogs" />
        <div className="wrapper pt-[5rem] text-center py-16">
          <h2 className="section-heading mb-4">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">
            The blog you're looking for doesn't exist.
          </p>
          <Link to="/blogs" className="primary-btn">
            Back to Blogs
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner banner={banner} title="Blogs" />
      <div className="wrapper pt-[5rem]">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          className="md:aspect-video lg:aspect-[13/6] object-cover rounded-lg"
        />
        <div className="pt-[2rem] space-y-4">
          <h2 className="section-heading">{blog.title}</h2>
          <div className="flex gap-4 justify-between">
            <HrLine />
            <HrLine />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>By {blog.author?.name || blog.authorId?.name}</span>
              <span>•</span>
              <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
              {blog.categoryId && (
                <>
                  <span>•</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                    {blog.categoryId.name}
                  </span>
                </>
              )}
            </div>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="prose max-w-none">
            <div className="reset-html" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </div>
        </div>
        <hr className="border-primary/30 my-[3rem]" />

        <div className="pt-[2rem]">
          <Link to="/blogs" className="w-fit mx-auto primary-btn">
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
