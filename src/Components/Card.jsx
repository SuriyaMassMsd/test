import React from "react";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MUIStyledCard = ({ item, index }) => {
  const {
    upvotes,
    total_upvotes,
    answers,
    author,
    time,
    question,
    description,
    tags,
  } = item;

  return (
    <Box display="flex" justifyContent="center" mt={4} position="relative">
      <Box
        width={{ xs: "100%", sm: "880px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        class="space-y-16"
      >
        {/* White Card (Bottom Section) */}
        <Card
          sx={{ p: 3, minHeight: 280, borderRadius: "20px", mt: 5, zIndex: 0 }}
        >
          <CardContent sx={{ mt: { xs: 14, sm: 10 } }}>
            <Typography
              variant="body1"
              class="mt-[100px] sm:mt-[40px] text-md sm:text-xl"
            >
              {description}
            </Typography>

            {/* Tags */}
            <Box
              display="flex"
              flexWrap="wrap"
              gap={{ xs: 1, sm: 2, md: 3 }}
              mt={2}
            >
              {tags.map((tag, index) => (
                <Box
                  key={index}
                  sx={{
                    px: { xs: 1, sm: 3, md: 4 }, // Larger padding on bigger screens
                    py: { xs: 0.5, sm: 1, md: 1.5 },
                    bgcolor: "grey.300",
                    color: "grey.700",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    fontSize: { xs: 12, sm: 16, md: 18 }, // Bigger font on laptops
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Blue Card (Top Section) */}
        <Card
          sx={{
            position: "absolute",
            top: { xs: "-30px", sm: "-50px" }, // Smaller top spacing on mobile
            width: { xs: "90%", sm: "96%" }, // Smaller width on mobile
            left: { xs: "5%", sm: "2%" }, // Adjust left margin
            minHeight: { xs: 80, sm: 110 }, // Smaller height on mobile
            bgcolor: index % 2 === 0 ? "#4365D0" : "#3FA8C0",
            color: "white",
            p: { xs: 1, sm: 2 }, // Smaller padding on mobile
            borderRadius: "20px",
            boxShadow: 3,
            zIndex: 10,
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
                {/* Upvotes */}
                <Box display="flex" alignItems="center" gap={1}>
                  <ArrowUpwardIcon
                    fontSize="small"
                    sx={{ fontSize: { xs: 20, sm: 30 } }}
                  />
                  <Box>
                    <Typography fontWeight="bold" fontSize={{ xs: 14, sm: 18 }}>
                      {upvotes}
                    </Typography>
                    <Typography fontSize={{ xs: 12, sm: 16 }}>
                      Upvotes
                    </Typography>
                  </Box>
                </Box>

                {/* Total Upvotes */}
                <Box display="flex" alignItems="center" gap={1}>
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ fontSize: { xs: 20, sm: 30 } }}
                  />
                  <Box>
                    <Typography fontWeight="bold" fontSize={{ xs: 14, sm: 18 }}>
                      {total_upvotes}
                    </Typography>
                    <Typography fontSize={{ xs: 12, sm: 16 }}>
                      Upvotes
                    </Typography>
                  </Box>
                </Box>

                {/* Answers */}
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      fontWeight: "bold",
                      width: { xs: 24, sm: 32 },
                      height: { xs: 24, sm: 32 },
                      fontSize: { xs: 14, sm: 18 },
                    }}
                  >
                    A
                  </Avatar>
                  <Box>
                    <Typography fontWeight="bold" fontSize={{ xs: 14, sm: 18 }}>
                      {answers}
                    </Typography>
                    <Typography fontSize={{ xs: 12, sm: 16 }}>
                      Answers
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Author Info */}
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mt={{ xs: 2, sm: 0 }}
              >
                <Box>
                  <Typography fontWeight="bold" fontSize={{ xs: 14, sm: 18 }}>
                    {author}
                  </Typography>
                  <Typography variant="body2" fontSize={{ xs: 12, sm: 16 }}>
                    {time}
                  </Typography>
                </Box>
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    fontWeight: "bold",
                    width: { xs: 24, sm: 32 },
                    height: { xs: 24, sm: 32 },
                    fontSize: { xs: 14, sm: 18 },
                  }}
                >
                  {author[0]}
                </Avatar>
              </Box>
            </Box>

            {/* Question */}
            <Typography mt={2} fontWeight="bold" fontSize={{ xs: 14, sm: 18 }}>
              {question}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MUIStyledCard;
