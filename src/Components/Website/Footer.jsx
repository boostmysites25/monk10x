import React from "react";
import { companyDetails, logo, services } from "../../data/constant";
import { websiteLinks } from "./Header";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { createUrlParam } from "../../utils/helper";

const Footer = () => {
  return (
    <div className="relative bg-primary mt-[4rem]">
      <div className="wrapper text-white grid lg:grid-cols-[30%_auto] gap-5">
        <div className="bg-white w-full lg:h-[calc(100%+2rem)] relative z-10 px-5 py-[2rem] flex flex-col gap-3 items-center">
          <img src={logo} className="w-[10rem] object-contain" alt="Logo" />
          <p className="text-black max-w-sm">
            Empowering businesses with innovative solutions and unmatched
            expertise to drive growth and success in the digital age.
          </p>
        </div>
        <div className="px-5 pt-[2rem] pb-[4rem] grid lg:grid-cols-3 gap-10 lg:gap-0">
          <div className="space-y-3">
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="space-y-2">
              {websiteLinks.map((item) => (
                <li>
                  <Link
                    to={item.path}
                    className="hover:text-secondary transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-lg font-bold">Services</h5>
            <ul className="space-y-2">
              {services.map((item) => (
                <li>
                  <Link
                    to={`/services/${createUrlParam(item.title)}`}
                    className="hover:text-secondary transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <Link
              target="_blank"
              to={companyDetails.linkedin}
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaLinkedinIn className="fill-white" size={16} strokeWidth={1} />
            </Link>
            <Link
              target="_blank"
              to={companyDetails.instagram}
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaInstagram
                className="fill-white text-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
            <Link
              target="_blank"
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaFacebookF className="fill-white" size={16} strokeWidth={1} />
            </Link>
            <Link
              target="_blank"
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaXTwitter className="fill-white" size={16} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[2rem] relative bottom-0 w-full bg-secondary"></div>
    </div>
  );
};

export default Footer;
