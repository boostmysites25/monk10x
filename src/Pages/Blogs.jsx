import React from "react";
import banner from "../assets/images/banners/blogs.webp";
import PageBanner from "../Components/Website/PageBanner";
import BlogItem from "../Components/Website/BlogItem";
import HrLine from "../Components/HrLine";
import ContactForm from "../Components/ContactForm";
import { usePublishedBlogs } from "../hooks/useBlogs";

const Blogs = () => {
  // Fetch published blogs using TanStack Query
  const { data: publishedBlogsData, isLoading, error } = usePublishedBlogs();
  
  // Use published blogs from API
  const blogs = publishedBlogsData?.blogs || [];

  return (
    <>
      <PageBanner banner={banner} title="Blogs" />
      <div className="wrapper pt-[5rem] space-y-6">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col md:items-center md:text-center"
        >
          <p className="uppercase text-primary">
            Blogs
          </p>
          <h3 className="section-heading">
            Discover Cutting-Edge AI and IT Service Strategies
          </h3>
          <HrLine />
        </div>
        
        {isLoading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-16">
            <p className="text-gray-500">Unable to load blogs at the moment.</p>
          </div>
        )}
        
        {!isLoading && !error && blogs.length > 0 && (
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {blogs.map((blog) => (
              <BlogItem key={blog._id || blog} blog={blog} />
            ))}
          </div>
        )}
        
        {!isLoading && !error && blogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No blogs available at the moment.</p>
          </div>
        )}
        
        <ContactForm />
      </div>
    </>
  );
};

export default Blogs;
