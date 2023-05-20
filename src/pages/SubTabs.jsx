import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const SubTabs = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("star");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);
  const handleSubCategory = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="my-container">
      <div>
        <p className="text-5xl text-color font-bold text-center mt-4 mb-10">
          You can choose from our vast category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 justify-center items-center mb-6 cursor-pointer font-semibold text-xl">
        <div
          className={activeTab == "marvel" ? "btn-primary" : ""}
          onClick={() => handleSubCategory("marvel")}
        >
          Marvel
        </div>
        <div
          className={activeTab == "star" ? "btn-primary" : ""}
          onClick={() => handleSubCategory("star")}
        >
          Star Wars
        </div>
        <div
          className={activeTab == "transformers" ? "btn-primary " : ""}
          onClick={() => handleSubCategory("transformers")}
        >
          Transformers
        </div>
      </div>
      <hr className="border-purple-300 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 my-container" data-aos="fade-up">
        {toys?.slice(1).map((toy) => (
          <CategoryCard key={toy._id} toy={toy}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default SubTabs;
