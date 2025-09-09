import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import HrLine from "../HrLine";
import BlogItem from "./BlogItem";
import { useFeaturedBlogs } from "../../hooks/useBlogs";

const BlogsSection = () => {
  const [loaded, setLoaded] = useState(false);

  // Fetch featured blogs using TanStack Query
  const { data: featuredBlogsData, isLoading, error } = useFeaturedBlogs();

  // Use featured blogs from API
  const blogs = featuredBlogsData?.blogs || [];
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Show loading state
  if (isLoading) {
    return (
      <section className="pt-[4rem] wrapper">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
        >
          <p className="uppercase text-primary">latest blogs</p>
          <h3 className="section-heading">
            Stay Ahead with Our Latest AI Research and Trends
          </h3>
          <HrLine />
        </div>
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="pt-[4rem] wrapper">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
        >
          <p className="uppercase text-primary">latest blogs</p>
          <h3 className="section-heading">
            Stay Ahead with Our Latest AI Research and Trends
          </h3>
          <HrLine />
        </div>
        <div className="text-center py-16">
          <p className="text-gray-500">Unable to load blogs at the moment.</p>
        </div>
      </section>
    );
  }

  // Don't render if no blogs
  if (blogs.length === 0) return null;

  return (
    <section className="pt-[4rem] wrapper">
      <div
        data-aos="fade-up"
        className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
      >
        <p className="uppercase text-primary">latest blogs</p>
        <h3 className="section-heading">
          Stay Ahead with Our Latest AI Research and Trends
        </h3>
        <HrLine />
      </div>
      <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-7">
        {blogs.map((blog) => (
          <BlogItem key={blog._id || blog} blog={blog} />
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-4 mt-5"
        >
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogsSection;
