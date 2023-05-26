import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Overview from "./Overview";
import { CiMoneyBill } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import Breadcrumb from "../common/Breadcrumbs";

const LeftDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Box
          sx={{
            backgroundColor: "#dae6ff",
            mb: 2,
            p: 2,
            borderRadius: "7px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              sx={{
                backgroundColor: "#0f51ba",
                textTransform: "capitalize",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              variant="contained"
            >
              Billing Order
            </Button>
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              Your subscription expires in 10 days , active{" "}
              <Typography
                component="span"
                sx={{ textDecoration: "underline", fontWeight: 600 }}
              >
                Auto-Renew
              </Typography>{" "}
              or make it{" "}
              <Typography
                component="span"
                sx={{ textDecoration: "underline", fontWeight: 600 }}
              >
                manually
              </Typography>
              .
            </Typography>
          </Box>
          <Box
            sx={{
              height: "25px",
              width: "25px",
              background: "#f45892",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "7px",
              color: "white",
              cursor: "pointer",
            }}
          >
            <GrFormClose fontSize={20} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Dashboard
          </Typography>

          <Breadcrumb />
        </Box>
        <Box
          sx={{
            borderTop: 1,
            borderColor: "#1499e4",
            width: "25px",
            borderWidth: "5px",
            borderRadius: "12px",
          }}
        />
        <Divider />
        <Overview />
      </Box>
      <Box sx={{ mt: 7, backgroundColor: "#f6f8fe" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MdPostAdd color="#b7c7de" fontSize={20} />
          <Typography sx={{ fontWeight: 600, fontSize: 19 }}>
            General Numbers
          </Typography>
        </Box>
        <Grid container spacing={3} mt={1}>
          {[1, 1, 1, 1, 1, 1].map(() => (
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "7px",
                  background: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "5px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "1px solid #a1b1c4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CiMoneyBill fontSize={22} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: 12, fontWeight: 700, color: "#a1b1c4" }}
                    >
                      Revenue generated
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: 600, color: "black" }}
                    >
                      $13,4450
                    </Typography>
                  </Box>
                </Box>
                <BsThreeDots color="#c3cfe0" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LeftDashboard;
