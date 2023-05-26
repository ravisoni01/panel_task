import { Box, Typography } from "@mui/material";

const RecentActionInnerBox = ({ title }) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#a1b1c4",
        p: 2,
        borderRadius: "7px",
        display: "flex",
        mb: 2.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Box
          sx={{
            height: "60px",
            width: "60px",
            borderRadius: "5px",
            background: "#f2f4f9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "40px", width: "40px" }}>
            <img
              src="/man.png"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
          <Typography sx={{ fontSize: 12, color: "#8ba0ba", fontWeight: 600 }}>
            By : <Typography variant="span">John Doe</Typography>
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#8ba0ba", fontWeight: 600 }}>
            Price : <Typography variant="span">$750</Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentActionInnerBox;
