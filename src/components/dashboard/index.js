import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
import axios from "axios";

const Dashboard = () => {
  const getData = () => {
    axios
      .get("https://covid-19-statistics.p.rapidapi.com/regions", {
        headers: {
          "X-RapidAPI-Key":
            "ae72cb4afbmshd068c4c8b18ff81p17d0adjsn4ab2ebe9099f",
          "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // here we can do anything after api call
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ background: "#f3f6fb" }}>
      <Grid container>
        <Grid item md={8.2}>
          <LeftDashboard />
        </Grid>
        <Grid item md={3.8}>
          <RightDashboard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
