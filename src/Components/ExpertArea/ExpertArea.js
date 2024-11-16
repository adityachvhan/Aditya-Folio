import React from "react";
import { Grid, Box, Card, Typography } from "@mui/material";

const ExpertArea = () => {
  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "Notion", icon: "📝" },
    { name: "Miro", icon: "📌" },
    { name: "Framer", icon: "⚙️" },
    { name: "Webflow", icon: "🌐" },
    { name: "Zeplin", icon: "✈️" },
  ];

  return (
    <Card sx={{ padding: 2 }}>
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

