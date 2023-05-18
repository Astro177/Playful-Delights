import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SubTabs = () => {
  return (
    <div className="my-container">
      <div>
        <p className="text-5xl text-color font-bold text-center mt-4 mb-10">
          You can choose from our vast category
        </p>
      </div>
      <div className="text-center">
        <Tabs>
          <TabList className="text-2xl font-bold mb-4">
            <Tab>Marvel</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformers</Tab>
          </TabList>
          <hr className="border-purple-300 mb-4" />
          <TabPanel>
            <h2>Marvel toys</h2>
          </TabPanel>
          <TabPanel>
            <h2>star wars toys</h2>
          </TabPanel>
          <TabPanel>
            <h2>transformers toys</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubTabs;
