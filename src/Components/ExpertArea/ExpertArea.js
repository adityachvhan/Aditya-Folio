import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";

const ExpertArea = () => {
  const tools = [
    { name: "Java", icon: "☕" }, // Coffee cup for Java
    { name: "Spring", icon: "🌱" }, // Sprout for Spring
    { name: "MySQL", icon: "🐬" }, // Dolphin for MySQL (MySQL logo)
    { name: "MicroServices", icon: "🔗" }, // Chain link for interconnected services
    { name: "JavaScript", icon: "📜" }, // Scroll for JavaScript
    { name: "J2EE", icon: "🌐" }, // Globe for enterprise-scale web applications

  ];


  return (
    <Card sx={{ padding: 2, height: 276, borderRadius: 5}}>
      <Typography variant="h6" gutterBottom>
        My Expert Area
      </Typography>
      <Grid container spacing={2}>
        {tools.map((tool, index) => (
          <Grid item xs={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                padding: 2,
              }}
            >
              <Typography variant="h5">{tool.icon}</Typography>
              <Typography variant="body2">{tool.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default ExpertArea;

