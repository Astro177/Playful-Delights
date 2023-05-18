import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SubTabs = () => {
  return (
    <div className="my-container text-center">
      <Tabs>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Star Wars</Tab>
          <Tab>Star Wars</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubTabs;
