import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Breadcrumb = () => {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AiOutlineHome fontSize={15} />
          <Link
            sx={{ fontSize: 14 }}
            underline="hover"
            color="inherit"
            href="/"
          >
            Home
          </Link>
        </Box>
        <Link
          sx={{ fontSize: 14 }}
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Dashboard
        </Link>
        <Typography color="#4273c7" sx={{ fontSize: 14 }}>
          Overview
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
