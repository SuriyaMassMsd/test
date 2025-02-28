import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

const Fliter = () => {
  const filteBtn = ["Latest", "Active", "Unanswered", "Saved"];

  return (
    <Box mt={4} sx={{ width: "100%" }}>
      {/* Header Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight="bold"
          sx={{ fontSize: { xs: "18px", sm: "22px" } }}
        >
          All Questions
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#4365D0",
            px: { xs: 3, sm: 5 },
            py: { xs: 0.5, sm: 1 },
            borderRadius: "10px",
            fontSize: { xs: "12px", sm: "16px" },
            "&:hover": { bgcolor: "#3650A0" },
          }}
        >
          Post Question
        </Button>
      </Stack>

      {/* Filters Section */}
      <Stack
        direction={{ xs: "coulmn", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1, sm: 4 }}
        mt={3}
        gap={4}
        // flexWrap="wrap"
      >
        {/* Filter Buttons (4 in one line on mobile) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            width: { xs: "100%", sm: "80%" },
          }}
        >
          {filteBtn.map((item, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                px: { xs: 5.5, sm: 3 },
                py: { xs: 1, sm: 1 },
                fontSize: { xs: "10px", sm: "14px" },
                borderRadius: "10px",
                borderColor: "gray",
                color: "gray",
                "&:hover": {
                  bgcolor: "grey.300",
                  color: "black",
                  borderColor: "black",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Filters Dropdown Button */}
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: { xs: 2, sm: 3 },
            py: { xs: 0.5, sm: 1 },
            fontSize: { xs: "12px", sm: "16px" },
            borderRadius: "10px",
            borderColor: "gray",
            color: "gray",
            "&:hover": {
              bgcolor: "grey.300",
              color: "black",
              borderColor: "black",
            },
          }}
        >
          <span>Filters</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
            />
          </svg>
        </Button>
      </Stack>
    </Box>
  );
};

export default Fliter;
