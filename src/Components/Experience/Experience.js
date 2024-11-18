import React from "react";
import { Box, Card, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const ProjectList = () => {
    const projects = [
        { name: "Youtube.com", type: "Public", tech: "JavaScript", updated: "2 weeks ago" },
        { name: "Instagram-clone", type: "Public", tech: "JavaScript", updated: "2 weeks ago" },
        { name: "Twitter-web", type: "Public", tech: "JavaScript", updated: "3 weeks ago" },
        { name: "WhatsApp-web", type: "Public", tech: "JavaScript", updated: "last month" },
        { name: "eCommerce-web", type: "Public", tech: "JavaScript", updated: "Oct 4" },
        { name: "Admin_Dashboard", type: "Public", tech: "JavaScript", updated: "Oct 2" },
        { name: "VideoCall_Application", type: "Public", tech: "JavaScript", updated: "N/A" },

        { name: "Youtube.com", type: "Public", tech: "JavaScript", updated: "2 weeks ago" },
        { name: "Instagram-clone", type: "Public", tech: "JavaScript", updated: "2 weeks ago" },
        { name: "Twitter-web", type: "Public", tech: "JavaScript", updated: "3 weeks ago" },
        { name: "WhatsApp-web", type: "Public", tech: "JavaScript", updated: "last month" },
        { name: "eCommerce-web", type: "Public", tech: "JavaScript", updated: "Oct 4" },
        { name: "Admin_Dashboard", type: "Public", tech: "JavaScript", updated: "Oct 2" },
        { name: "VideoCall_Application", type: "Public", tech: "JavaScript", updated: "N/A" },
    ];

    const scrollAnimation = {
        overflow: "hidden",
        height: 400, // Adjust height to match the other component
        position: "relative",
        "& .scroll-container": {
            display: "flex",
            flexDirection: "column",
            gap: 2,
            animation: "scroll 100s linear infinite",
        },
        "&:hover .scroll-container": {
            animationPlayState: "paused",
        },
        "@keyframes scroll": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(-100%)" },
        },
    }

    return (
        <Box sx={{ mt: 1 }}>
            <Card
                sx={{
                    padding: 3,
                    borderRadius: 5,
                    boxShadow: 3,
                    backgroundColor: "white",
                    maxWidth: 420,
                    margin: "0 auto",
                    height: 300, // Match height to other component if needed
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {/* Header */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Projects Done
                </Typography>

                {/* Scrolling List */}
                <Box sx={scrollAnimation}>
                    <List className="scroll-container">
                        {projects.concat(projects).map((project, index) => (
                            <ListItem
                                key={index}
                                alignItems="flex-start"
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={project.name}
                                        secondary={
                                            <Typography
                                                sx={{ display: "block" }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {project.tech}
                                            </Typography>
                                        }
                                    />
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {project.updated}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Card>
        </Box>
    );
};

export default ProjectList;
