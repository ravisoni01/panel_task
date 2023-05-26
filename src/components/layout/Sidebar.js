import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { Drawer, DrawerHeader } from "./styles";
import { Box, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import { TfiDashboard } from "react-icons/tfi";
import { GrSync } from "react-icons/gr";
import { HiOutlineDocumentText, HiOutlineDocumentAdd } from "react-icons/hi";

const Sidebar = ({ open, handleDrawer }) => {
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 70,
          px: 2.5,
          background: "#fdfefe",
          justifyContent: "space-between",
        }}
      >
        {open ? (
          <Typography variant="h6" fontWeight={600}>
            AHAD
          </Typography>
        ) : null}

        <IconButton
          onClick={handleDrawer}
          sx={{
            height: "30px",
            width: "30px",
            borderRadius: "7px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            border: 2,
            borderColor: "#032c7b",
          }}
        >
          <GrSync />
        </IconButton>
      </Box>
      <Box mt={4}>
        {open ? (
          <Divider textAlign="left" sx={{ borderStyle: "dashed", my: 2 }}>
            <Box
              sx={{
                border: 1,
                borderStyle: "dashed",
                borderColor: "#4063a8",
                py: 0.5,
                px: 1,
                fontSize: 14,
                color: "#4063a8",
                mb: 1,
                borderRadius: "5px",
              }}
            >
              Main Menu
            </Box>
          </Divider>
        ) : null}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            margin: "auto",
            width: open ? "90%" : "70%",
            borderRadius: "10px",
            background: "#3e5dd1",
            color: "white",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            "&:hover": {
              background: "#3652ba",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            <TfiDashboard fontSize={20} color="white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
        </Box>
      </Box>
      <List>
        <ListItem disablePadding sx={{ display: "block", ml: !open ? 0.5 : 1 }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <HiOutlineDocumentText fontSize={20} color="#365ba0" />
            </ListItemIcon>
            <ListItemText
              primary="Document"
              sx={{ opacity: open ? 1 : 0, color: "#9ab4e4" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block", ml: !open ? 0.5 : 1 }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              <HiOutlineDocumentAdd fontSize={20} color="#365ba0" />
            </ListItemIcon>
            <ListItemText
              primary="Template"
              sx={{ opacity: open ? 1 : 0, color: "#9ab4e4" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
