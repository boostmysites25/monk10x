import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  // Handle both old format (string URL) and new format (blog object) for backward compatibility
  const isOldFormat = typeof blog === 'string';
  
  const blogData = isOldFormat ? {
    imageUrl: blog,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    excerpt: "Boluptatum dolores porro ex laborum officiis magnam deleniti ea velit dolore inventore consequuntur voluptas sit doloribus vero? Eos dolorum deleniti provident! Ab incidunt quae quod impedit, veritatis ipsum non sint perferendis magni vel facere cumque voluptas nobis alias doloremque recusandae error quas inventore.",
    slug: "1"
  } : blog;

  // Don't render if no blog data
  if (!blogData) return null;

  return (
    <Link
      to={`/blogs/${blogData.slug}`}
      key={blogData._id || blogData.slug}
      className="keen-slider__slide space-y-2 border border-black/20 group"
    >
      <img
        src={blogData.imageUrl}
        alt={blogData.imageAlt || blogData.title}
        className="w-full max-h-[250px] object-cover aspect-video group-hover:brightness-75 duration-200 transition-all"
      />
      <div className="px-5 py-4 space-y-3">
        <h6 className="text-lg font-semibold text-black line-clamp-2 group-hover:text-primary duration-200 transition-all">
          {blogData.title}
        </h6>
        <p className="line-clamp-3 text-gray-800">
          {blogData.excerpt}
        </p>
        <Link
          to={`/blogs/${blogData.slug}`}
          className="text-black flex items-center gap-2 group-hover:text-primary w-fit"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </Link>
  );
};

export default BlogItem;
