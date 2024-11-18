import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Tab content for different sections
  const TabContent = ({ index, content }) => {
    return selectedTab === index ? (
      <Box sx={{ p: 3 }}>
        <Typography>{content}</Typography>
      </Box>
    ) : null;
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {/* Tab Navigation */}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Home" />
        <Tab label="Profile" />
        <Tab label="Settings" />
      </Tabs>

      {/* Tab Content */}
      <TabContent index={0} content="Welcome to the Home page!" />
      <TabContent index={1} content="This is your Profile page." />
      <TabContent index={2} content="Manage your settings here." />
    </Box>
  );
};

export default TabBar;
