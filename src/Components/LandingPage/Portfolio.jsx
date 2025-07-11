import React from "react";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import HrLine from "../HrLine";
import { appPortfolio, webPortfolio } from "../../data/constant";

const Portfolio = ({ page }) => {
  const isWeb = page === "web";
  let data = isWeb ? webPortfolio : appPortfolio;
  return (
    <div id="portfolio" className="pt-[5rem]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5">
          <div
            data-aos="fade-up"
            className="space-y-4 flex flex-col items-center text-center"
          >
            <p className="uppercase text-primary text-center md:text-start">
              Portfolio
            </p>
            <h3 className="section-heading">Few of our projects</h3>
            <HrLine />
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
          >
            {data.map((item) => (
              <div
                key={item.title}
                className="w-full flex flex-col items-center bg-primary hover:bg-secondary hover:scale-x-105 transition-all duration-300 text-white hover:text-black px-5 py-7 gap-3 rounded-md group"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium text-center">
                  {item.title}
                </h3>
                <Link
                  target="_blank"
                  to={item.link}
                  className="flex items-center gap-2 hover:underline"
                >
                  <IoIosLink /> <small>Visit</small>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
