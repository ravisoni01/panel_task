import React from "react";
import { Box, Typography } from "@mui/material";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { RxPencil2 } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import RecentActionInnerBox from "./RecentActionInnerBox";
import DocsTypeInnerBox from "./DocsTypeInnerBox";

const RightDashboard = () => {
  return (
    <Box sx={{ background: "white", borderLeft: "1px solid #a1b1c4" }}>
      <Box sx={{ borderBottom: "1px solid #a1b1c4", p: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Docs Types</Typography>
            <Typography
              sx={{ fontSize: 12, color: "#8ba0ba", fontWeight: 500 }}
            >
              Three Sections contains all docs
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f0f4fc",
              p: 1,
              borderRadius: "5px",
              fontSize: 11,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Show all <BsArrowRightShort color="#7c8cac" />
          </Box>
        </Box>
        <Box sx={{ my: 3 }}>
          <DocsTypeInnerBox
            icon={<HiOutlineNewspaper fontSize={22} color="#35517b" />}
            title="Agreements"
            desc="Contains contracts, docs.."
            num={5030}
          />
          <DocsTypeInnerBox
            icon={<RxPencil2 fontSize={22} color="#35517b" />}
            title="Formal Notice"
            desc="Docs like vacations..."
            num={820}
          />{" "}
          <DocsTypeInnerBox
            icon={<MdOutlineEmail fontSize={22} color="#35517b" />}
            title="Non - Formal Notice"
            desc="Contains contracts, docs.."
            num={5030}
          />
        </Box>
      </Box>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Recent action</Typography>
            <Typography
              sx={{ fontSize: 12, color: "#8ba0ba", fontWeight: 500 }}
            >
              Recent Docs need actions
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f0f4fc",
              p: 1,
              borderRadius: "5px",
              fontSize: 11,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Show all <BsArrowRightShort color="#7c8cac" />
          </Box>
        </Box>
        <Box sx={{ my: 3 }}>
          <RecentActionInnerBox title="Real Estate Sales Contract" />
          <RecentActionInnerBox title="Real Estate Sales Contract" />
          <RecentActionInnerBox title="Real Estate Sales Contract" />
        </Box>
      </Box>
    </Box>
  );
};

export default RightDashboard;
