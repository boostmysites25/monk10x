import React from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vid/banner.mp4";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import HrLine from "../Components/HrLine";
import {
  appDevelopmentServices,
  companyDetails,
  webDevelopmentServices,
} from "../data/constant";
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
import webAboutImg from "../assets/images/web-dev-about.webp";
import appAboutImg from "../assets/images/app-dev-about.webp";
import ContactForm2 from "../Components/ContactForm2";
import { TiArrowBack } from "react-icons/ti";
import { ImPhone } from "react-icons/im";
import Portfolio from "../Components/LandingPage/Portfolio";
import { Link as Scroll } from "react-scroll";

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  return (
    <div id="banner" className="pt-[5rem]">
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
              {isWeb
                ? "Intelligent Web Solutions Powered by Advanced AI"
                : "AI-Driven Mobile Applications for the Modern Business"}
            </h1>
            <div className="flex sm:flex-row flex-col justify-center gap-5 mt-5">
              <Link to="/about-us" className="primary-btn">
                Discover AI Solutions
              </Link>
              <Scroll
                smooth
                spy
                offset={-80}
                to="contact"
                className="secondary-btn"
              >
                Start Your AI Journey
              </Scroll>
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

      <div className="pt-[2rem] wrapper flex flex-col-reverse md:grid grid-cols-[auto_55%] gap-7">
        <div className="">
          <ContactForm2 />
        </div>
        <div data-aos="fade-up">
          <div className="space-y-4 text-start">
            <p className="uppercase text-primary">Free AI Consultation</p>
            <h3 className="section-heading">
              Discover How AI Can Transform Your Business Operations
            </h3>
            <HrLine />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="">
              <TiArrowBack size={25} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">
                Expert AI assessment within 24h
              </span>
            </div>
            <div className="">
              <ImPhone size={20} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">
                Personalized AI strategy session
              </span>
            </div>
          </div>
          <p className="mt-5">
            Ready to harness the power of artificial intelligence for your
            business? Our AI experts are here to help you identify the perfect
            AI solutions for your specific challenges. During your free
            consultation, we'll analyze your current processes, discuss your
            goals, and outline how our AI technologies can drive efficiency,
            innovation, and growth for your organization.
          </p>
        </div>
      </div>

      <section id="about" className="pt-[5rem]">
        <div className="wrapper grid md:grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-4">
            <p className="uppercase text-primary text-center md:text-start">
              {isWeb
                ? "AI-Powered Web Solutions"
                : "Intelligent Mobile Applications"}
            </p>
            <div className="md:hidden flex flex-col pb-3">
              <img
                src={aboutImg}
                alt="About Us"
                className="h-full w-full aspect-video object-cover rounded-xl"
              />
            </div>
            <h3 className="section-heading">
              {isWeb
                ? "Next-Generation Websites Enhanced with Artificial Intelligence"
                : "Smart Mobile Applications That Learn and Adapt to User Behavior"}
            </h3>
            <HrLine />
            <p>
              {isWeb
                ? "At Monk10x, we integrate cutting-edge AI technologies into our web development process to create intelligent, responsive websites that deliver personalized experiences. Our AI-enhanced websites can analyze user behavior, automate content generation, optimize conversion paths, and provide real-time insights that help your business stay ahead of the competition."
                : "Monk10x specializes in developing AI-powered mobile applications that go beyond traditional functionality. Our intelligent apps leverage machine learning algorithms to understand user preferences, predict needs, automate routine tasks, and continuously improve performance. From smart chatbots to predictive analytics, our AI capabilities transform ordinary apps into powerful business tools."}
            </p>
            <div className="grid grid-cols-2 gap-5 pt-5">
              {[
                "Cutting-edge AI",
                "Predictive Analytics",
                "Custom Algorithms",
                "Seamless Integration",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <GiCheckMark size={25} className="text-primary" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
              <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
                <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
                  <BiSupport size={25} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="">Speak with an AI Expert</p>
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
              src={isWeb ? webAboutImg : appAboutImg}
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
          <p className="uppercase text-primary">Why Choose Our AI Solutions</p>
          <h3 className="section-heading">
            Accelerate Your Business with Intelligent Technology
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
        title={
          isWeb
            ? "our ai-powered web solutions"
            : "our intelligent mobile applications"
        }
        heading={
          isWeb
            ? "Smart Web Technologies for the Digital Age"
            : "AI-Enhanced Mobile Solutions for Modern Businesses"
        }
        data={isWeb ? webDevelopmentServices : appDevelopmentServices}
      />
      <Portfolio page={page} />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
