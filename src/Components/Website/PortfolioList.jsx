import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import HrLine from "../HrLine";
import { webPortfolio, appPortfolio } from "../../data/constant";

const categoryList = [
  { name: "All", icon: "", key: "all" },
  { name: "Web Development", icon: <FaGlobe />, key: "webDevelopment" },
  {
    name: "Mobile App Development",
    icon: <AiFillAppstore />,
    key: "appDevelopment",
  },
];

const portfolio = {
  webDevelopment: {
    list: webPortfolio,
  },
  appDevelopment: {
    list: appPortfolio,
  },
};

const PortfolioList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[1]);

  const getAllItems = () => {
    if (selectedCategory.key === "all") {
      return Object.values(portfolio).flatMap((category) => category.list);
    }
    return portfolio[selectedCategory.key]?.list || [];
  };

  return (
    <div className="wrapper pt-[5rem]">
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

        {/* <h2 className="heading text-center mb-5">Some of Our Projects</h2> */}

        <div className="w-full mt-3">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categoryList.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory.key === category.key
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
        >
          {getAllItems().map((item) => (
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
              <h3 className="text-lg font-medium text-center">{item.title}</h3>
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
  );
};

export default PortfolioList;
