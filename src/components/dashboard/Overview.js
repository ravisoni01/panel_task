import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

const OVERVIEW_DATA = ["Days", "Week", "Month", "Year"];

const Overview = () => {
  const [overviewType, setOverviewType] = useState("Days");
  return (
    <Box mt={3}>
      <Typography sx={{ fontWeight: 600, fontSize: 19 }}>Overview</Typography>
      <Box
        sx={{
          mt: 1,
          py: 0.4,
          pl: 2,
          pr: 1,
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          background: "#eaf2fc",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box
            sx={{
              height: "7px",
              width: "7px",
              background: "#1e9ce6",
              borderRadius: "100%",
            }}
          />
          <Typography sx={{ fontSize: 14 }}>October 2021</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderRadius: "50px",
            px: 0.5,
            py: 0.2,
            background: "white",
            border: 1,
            borderColor: "#a1b1c4",
          }}
        >
          {OVERVIEW_DATA.map((item) => {
            let active = overviewType === item;
            return (
              <Box
                onClick={() => setOverviewType(item)}
                sx={{
                  background: active ? "#0092e3" : "none",
                  py: 0.6,
                  px: 3,
                  cursor: "pointer",
                  borderRadius: "50px",
                  fontWeight: 600,
                  color: active ? "white" : "#95a5bc",
                  fontSize: 13,
                  boxShadow: active
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : "none",
                }}
              >
                {item}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", overflow: "auto" }}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <Box
              sx={{
                height: "75px",
                width: "70px",
                background: "white",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                border: 1,
                borderColor: "#a1b1c4",
              }}
            >
              <Typography sx={{ fontSize: 10, fontWeight: 600 }}>
                Sun
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                11
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              height: "30px",
              width: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              backgroundColor: "white",
              border: 1,
              borderColor: "#a1b1c4",
            }}
          >
            <MdKeyboardArrowRight fontSize={20} />
          </Box>
          <Box
            sx={{
              height: "30px",
              width: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              backgroundColor: "white",
              border: 1,
              borderColor: "#a1b1c4",
            }}
          >
            <MdKeyboardArrowLeft fontSize={20} />
          </Box>
        </Box>
      </Box>
      <Grid container spacing={3} mt={1}>
        {[1, 1, 1, 1, 1].map(() => (
          <Grid item md={2.4} xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "12px",
                p: 2.5,
                backgroundColor: "white",
                borderBottom: 5,
                borderColor: "#f25994",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box
                    sx={{
                      height: "10px",
                      width: "10px",
                      background: "red",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography sx={{ fontWeight: 600 }}>Sent</Typography>
                </Box>
                <MdKeyboardArrowRight fontSize={20} />
              </Box>
              <Divider />
              <Box
                sx={{
                  p: 1,
                  mt: 2,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: 1,
                  borderColor: "#f1f5fd",
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#f3f5fe",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineSend fontSize={20} color="#405a82" />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
                    70
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: 600, color: "#8ba0ba" }}
                  >
                    Docs
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",

                  mt: 2,
                  gap: 2,
                }}
              >
                <Box sx={{ width: "50%" }}>
                  <Typography sx={{ fontSize: 10, color: "#a7b6ca" }}>
                    Total
                  </Typography>
                  <Divider sx={{ mb: 1, mt: 0.5 }} />
                  <Typography
                    sx={{ fontWeight: 600, color: "#576f92", fontSize: 14 }}
                  >
                    520
                  </Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Typography sx={{ fontSize: 10, color: "#a7b6ca" }}>
                    Today
                  </Typography>
                  <Divider sx={{ mb: 1, mt: 0.5 }} />
                  <Typography
                    sx={{ fontWeight: 600, color: "#576f92", fontSize: 14 }}
                  >
                    520
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;
