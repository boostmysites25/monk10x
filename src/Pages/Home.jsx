import React from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vid/banner.mp4";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import HrLine from "../Components/HrLine";
import { companyDetails, services } from "../data/constant";
import aboutImg from "../assets/images/about.webp";
import whyChooseImg from "../assets/images/whychooseus.webp";
import Services from "../Components/Services";
import ContactForm from "../Components/ContactForm";
import { FaAward, FaRegThumbsUp } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import Testimonials from "../Components/Testimonials";
import BlogsSection from "../Components/Website/BlogsSection";
import PortfolioList from "../Components/Website/PortfolioList";

const Home = () => {
  return (
    <div className="pt-[5rem]">
      <section className="relative min-h-screen flex items-center justify-center bg-black/30">
        <div className="pt-[4rem] md:pt-[8rem] pb-[4rem]">
          <div
            data-aos="fade-up"
            className="wrapper flex flex-col text-center text-white gap-5 justify-center h-full"
          >
            <p className="section-heading">
              Innovate with <span className="text-secondary">Monk10x</span>
            </p>
            <h1 className="heading">
              Transforming Ideas into Intelligent Solutions
            </h1>
            <div className="flex sm:flex-row flex-col justify-center gap-5 mt-5">
              <Link to="/about-us" className="primary-btn">
                Discover More
              </Link>
              <Link to="/contact-us" className="secondary-btn">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              filter: "brightness(0.7)",
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>
      <div className="wrapper pt-[3rem] sm:pt-0 sm:-translate-y-1/3 md:-translate-y-1/2">
        <div className="grid md:grid-cols-3">
          <div
            data-aos="fade-up"
            className="bg-primary w-full text-white flex gap-3 justify-center p-6"
          >
            <div className="bg-white h-full aspect-square flex justify-center items-center p-3">
              <BsPersonArmsUp size={50} className="text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Satisfied Clients</p>
              <h3 className="heading-2">
                <CountUp
                  end={200}
                  suffix="+"
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-[#EAF9FF] w-full text-primary flex gap-3 justify-center p-6"
          >
            <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
              <GiCheckMark size={45} className="text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">AI Solutions Deployed</p>
              <h3 className="heading-2">
                <CountUp
                  end={175}
                  suffix="+"
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-primary w-full text-white flex gap-3 justify-center p-6"
          >
            <div className="bg-white h-full aspect-square flex justify-center items-center p-3">
              <FaPeopleGroup size={50} className="text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">AI Specialists</p>
              <h3 className="heading-2">
                <CountUp
                  end={40}
                  suffix="+"
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-[5rem]">
        <div className="wrapper grid md:grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-4">
            <p className="uppercase text-primary text-center md:text-start">
              About us
            </p>
            <div className="md:hidden flex flex-col pb-3">
              <img
                src={aboutImg}
                alt="About Us"
                className="h-full w-full aspect-video object-cover rounded-xl"
              />
            </div>
            <h3 className="section-heading">
              Pioneering AI Solutions for Tomorrow's Challenges
            </h3>
            <HrLine />
            <p>
              At Monk10x, we're at the forefront of AI innovation, creating
              intelligent solutions that transform how businesses operate. Our
              team combines deep technical expertise with strategic insight to
              develop custom AI applications that solve complex problems,
              automate processes, and unlock new opportunities for growth and
              efficiency.
            </p>
            <div className="grid grid-cols-2 gap-5 pt-5">
              {[
                "Cutting-edge AI",
                "Custom Solutions",
                "Expert Team",
                "Transparent Pricing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <GiCheckMark size={25} className="text-primary" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
              <Link to="/about-us" className="primary-btn sm:w-fit w-full">
                Explore Our Story
              </Link>
              <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
                <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                  <BiSupport size={25} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="">Talk to an Expert</p>
                  <Link
                    to={`tel:${companyDetails.phone}`}
                    className="font-semibold"
                  >
                    {companyDetails.phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="hidden md:flex flex-col">
            <img
              src={aboutImg}
              alt="About Us"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="wrapper pt-[5rem]">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
        >
          <p className="uppercase text-primary">Why Choose Us</p>
          <h3 className="section-heading">
            Accelerate Your Business with AI-Powered Innovation
          </h3>
          <HrLine />
        </div>
        <div className="mt-[2rem] grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          <div data-aos="fade-up" className="flex flex-col gap-7">
            <div className="space-y-3">
              <div className="bg-primary w-[3.5rem] aspect-square flex justify-center items-center p-3">
                <FaRegThumbsUp size={30} className="text-white" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg">AI Excellence</p>
                <p>
                  Our specialized AI expertise enables us to develop
                  sophisticated solutions that deliver measurable results and
                  competitive advantages for your business.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-primary w-[3.5rem] aspect-square flex justify-center items-center p-3">
                <FaAward size={30} className="text-white" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg">Innovation Leaders</p>
                <p>
                  We stay at the cutting edge of AI technology, continuously
                  researching and implementing the latest advancements to
                  provide you with future-proof solutions.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="sm:row-span-2 md:row-span-1 w-full h-full aspect-[4/3] sm:aspect-auto md:aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={whyChooseImg}
              alt="Why Choose Us"
              className="md:aspect-[2/3] w-full h-full object-cover object-bottom"
            />
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-7">
            <div className="space-y-3">
              <div className="bg-primary w-[3.5rem] aspect-square flex justify-center items-center p-3">
                <FaPeopleGroup size={30} className="text-white" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg">Expert AI Team</p>
                <p>
                  Our team of AI specialists, data scientists, and developers
                  brings deep expertise and creative problem-solving to every
                  project we undertake.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-primary w-[3.5rem] aspect-square flex justify-center items-center p-3">
                <LuHeartHandshake size={30} className="text-white" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-lg">Dedicated Support</p>
                <p>
                  We provide comprehensive support throughout your AI journey,
                  from initial consultation to implementation and ongoing
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services
        title="our services"
        heading="Intelligent Solutions for Modern Businesses"
        data={services}
      />
      <PortfolioList />
      <ContactForm />
      <Testimonials />
      <BlogsSection />
    </div>
  );
};

export default Home;
