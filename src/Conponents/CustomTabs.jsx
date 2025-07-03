import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const CustomTabs = ({ tabs, panels, setValue, value }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
      <Box className="d-flex flex-column align-items-center">
          <Box className="d-md-flex justify-content-between p-1 mt-2 rounded-2" style={{width: "fit-content"}}>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              style={{ }}
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "black",
                  display: "none",
                },
              }}
              aria-label="basic tabs example"
            >
              {tabs.map((tab, index) => (
                <Tab
                  label={tab}
                  style={{
                    backgroundColor: "transparent",
                    // color: value === 0 ? 'black' : 'inherit'
                    color: value === index ? "var(--navlinkbg)" : "white",
                    // borderRadius: "5px",
                    // fontWeight: value === index ? "bold" : "",
                    borderBottom:
                    value === index ? "2px solid var(--navlinkbg)" : "none",

                    // borderRight:
                    //   index === tabs.length - 1 ? "" : "1px solid #7e7f7f",
                  }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
        {panels.map((panel, index) => (
          <CustomTabPanel
            className="py-2"
            value={value}
            index={index}
            key={index}
          >
            {panel}
          </CustomTabPanel>
        ))}
      </Box>
  );
};

export default CustomTabs;
