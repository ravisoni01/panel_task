import React from "react";
import { AppBar } from "./styles";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HiOutlineMenuAlt3, HiOutlineMail } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: 3,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Box
              sx={{
                height: "35px",
                width: "35px",
                borderRadius: "100%",
                overflow: "hidden",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <img
                src="/man.png"
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: 13 }}>
                OMAR ALI
                <HiOutlineMenuAlt3
                  style={{ marginLeft: "5px", color: "#b5c1d1" }}
                />
              </Typography>
              <Typography
                sx={{ fontSize: 10, color: "#b5c1d1", fontWeight: 600 }}
              >
                Company Owner
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box
              sx={{
                height: "35px",
                width: "35px",
                border: 2,
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#a1b1c4",
                position: "relative",
              }}
            >
              <HiOutlineMail fontSize={18} color="#607797" />
              <Box
                sx={{
                  position: "absolute",
                  height: "20px",
                  width: "20px",
                  top: -10,
                  right: -8,
                  backgroundColor: "#f45a95",
                  borderRadius: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: 12,
                }}
              >
                5
              </Box>
            </Box>
            <Box
              sx={{
                height: "35px",
                width: "35px",
                border: 2,
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#a1b1c4",
                position: "relative",
              }}
            >
              <IoIosNotificationsOutline fontSize={20} color="#607797" />
              <Box
                sx={{
                  position: "absolute",
                  height: "10px",
                  width: "10px",
                  top: -4,
                  right: 0,
                  backgroundColor: "#1e9ce6",
                  borderRadius: "30px",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box>
            <TextField
              placeholder="Search anything ..."
              size="small"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "35px",
                  "& fieldset": {
                    border: "1px solid #a1b1c4",
                    borderRadius: "5px",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineSearch />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              border: 2,
              borderColor: "#a1b1c4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "7px",
            }}
          >
            <FiSettings />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
