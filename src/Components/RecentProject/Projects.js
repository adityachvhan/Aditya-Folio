import React from "react";
import { Box, CardMedia, Typography, Link } from "@mui/material";
import youtube_image from '../Assets/Youtube.jpeg'
import Instagram_image from '../Assets/Instragram.jpeg'
const Projects = () => {

    const projects = [
        {
            name: "Youtube.com",
            type: "Public",
            tech: "JavaScript",
            updated: "2 weeks ago",
            image: youtube_image, 
            category: "Web Development",
        },

        {
            name: "Instagram-clone",
            type: "Public",
            tech: "JavaScript",
            updated: "2 weeks ago",
            image: Instagram_image,
            category: "Web Development",
        },

    ];


    return (
        <Box sx={{
            padding: 2,
            width: 400, 
        }}>

            {/* Project Cards Container */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column", // Stack items vertically
                    gap: 2, // Space between items
                }}
            >
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex", // Flexbox for layout
                            flexDirection: "column", // Stack child elements vertically
                            position: "relative", // Position for child elements like badges or overlays
                            borderRadius: 3, // Rounded corners
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
                            height: 250, // Fixed height
                            backgroundColor: "#ffffff", // Optional: Background color for better visibility
                        }}
                    >
                        {/* Project Image */}
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{
                                width: "100%", // Make the image take up the full width of its container
                                height: "100%", // Maintain the aspect ratio
                                filter: "brightness(0.9)", // Adjust image brightness
                                borderRadius: "12px", // Rounded corners
                            }}
                        />

                        {/* Overlay "+" Icon */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "rgba(255, 255, 255, 0.9)",
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                                opacity: 0, // Initially hidden
                                transition: "opacity 0.3s ease-in-out", // Smooth transition
                                "&:hover": {
                                    opacity: 1, // Visible on hover
                                },
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" color="primary">
                                +
                            </Typography>
                        </Box>

                        {/* Category Badge */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 16,
                                left: 16,
                                background: "#ffffff",
                                padding: "4px 12px",
                                borderRadius: 2,
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <Typography variant="caption" fontWeight="bold">
                                {project.category}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
