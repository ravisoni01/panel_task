import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { DrawerHeader } from "./styles";

export default function MiniDrawer({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawer={handleDrawer} />

      <Box component="main" sx={{ flexGrow: 1, pt: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
