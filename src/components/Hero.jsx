 
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import All from "./alljazeera/All";
import FilteredData from "./alljazeera/FilteredData";

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Tab content for different sections
  const TabContent = ({ index, children }) => {
    return selectedTab === index ? (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    ) : null;
  };



  return (
    <Box sx={{ width: "100%",marginTop:"100px", bgcolor: "background.paper" }}>
      {/* Tab Navigation */}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All" />
        <Tab label="Filtered Data" />
         
      </Tabs>

      {/* Tab Content */}
      <TabContent index={0}>
        <All />
      </TabContent>
      <TabContent index={1}>
        <FilteredData />
      </TabContent>
       
    </Box>
  );
};

export default Hero;
