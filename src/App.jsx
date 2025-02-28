import React from "react";
import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import Fliter from "./Components/Fliter";
import Card from "./Components/Card";
import data from "./assets/data/data";

export const App = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {/* Left Section */}
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            color="textSecondary"
            fontSize={{ xs: 10, sm: 20 }}
            sx={{ textAlign: { xs: "center", sm: "left" }, mb: 2 }}
          >
            Dashboard / Community / Questions
          </Typography>

          {/* Filter Section */}
          <Fliter />

          {/* Cards List */}
          <Box sx={{ mt: 10 }}>
            {data.map((item, index) => (
              <Card key={index} item={item} index={index} />
            ))}
          </Box>
        </Grid>

        {/* Right Section (Sidebar) */}
        <Grid item xs={12} sm={4}>
          {/* How Our Form Works */}
          <Paper elevation={3} sx={{ borderRadius: 2, mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#E0E8FF",
                p: 2,
                borderRadius: "10px 10px 0 0",
                fontWeight: "bold",
              }}
            >
              How our form works?
            </Typography>
            <Box sx={{ p: 3 }}>
              <ul style={{ paddingLeft: 20 }}>
                {[
                  "At vero eos et accusamus et iusto odio dignissimos",
                  "Ducimus qui blanditiis praesentium voluptatum",
                  "Deleniti atque corrupti quos dolores et quas",
                  "Nam libero tempore, cum soluta nobis est",
                ].map((text, idx) => (
                  <li key={idx} style={{ marginBottom: 8, color: "#000" }}>
                    {text}
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>

          {/* Earn Your Reputation */}
          <Paper elevation={3} sx={{ borderRadius: 2, mb: 3, mt: -5 }}>
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#E0E8FF",
                p: 2,
                borderRadius: "10px 10px 0 0",
                fontWeight: "bold",
              }}
            >
              Earn your reputation
            </Typography>
            <Typography sx={{ p: 3, color: "#404040" }}>
              Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </Typography>
          </Paper>

          {/* Participate in Challenges */}
          <Paper elevation={3} sx={{ borderRadius: 2 }}>
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#E0E8FF",
                p: 2,
                borderRadius: "10px 10px 0 0",
                fontWeight: "bold",
              }}
            >
              Participate in challenges
            </Typography>
            <Box
              component="img"
              src="cardimg.png"
              alt="cardimg"
              sx={{
                width: "100%",
                borderRadius: "0 0 10px 10px",
                display: "block",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
