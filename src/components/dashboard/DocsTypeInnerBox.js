import { Box, Typography } from "@mui/material";
import { BsArrowRightShort } from "react-icons/bs";

const DocsTypeInnerBox = ({ icon, title, desc, num }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: "7px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Box
          sx={{
            height: "50px",
            width: "50px",
            borderRadius: "5px",
            backgroundColor: "#f3f5fe",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
          <Typography sx={{ fontSize: 12, color: "#8ba0ba", fontWeight: 500 }}>
            {desc}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          border: 2,
          borderStyle: "dashed",
          px: 2,
          borderColor: "#f3f5fe",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{num}</Typography>
        <Box sx={{ display: "flex" }}>
          <BsArrowRightShort color="#7c8cac" />
          <Typography sx={{ fontSize: 12, color: "#8ba0ba", fontWeight: 500 }}>
            Docs
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default DocsTypeInnerBox;
