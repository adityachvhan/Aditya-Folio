import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

export default function ProfileCard() {
    return (
        <Card
            sx={{
                maxWidth: 400,
                height:620,
                mx: "auto",
                mt: 3,
                borderRadius: 4,
                boxShadow: 3,
                textAlign: "center",
                
            }}
        >
            {/* Profile Picture */}
            <CardMedia
                sx={{
                    height: 350,
                    mx: "auto",
                    p: 3,
                }}
                component="img"
                alt="Cris Rayaan"
                image="https://cdn.pixabay.com/photo/2020/01/07/23/01/sketch-4748895_640.jpg"
            />

            <CardContent>
                {/* Name */}
                <Typography variant="h5" component="div" fontWeight="bold">
                    Aditya Chavhan 👋
                </Typography>

                {/* Subtitle */}
                <Typography variant="body1" color="text.secondary" mt={1}>
                    A Passionate <b>Full Stack Developer</b> 💻 & <b>Youtuber </b>
                    having 1 years of experience
                </Typography>
            </CardContent>

            {/* Buttons */}
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 1,
                }}
            >
                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Book A Call
                </Button>
                <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                        borderColor: "#007BFF",
                        color: "#007BFF",
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Copy Email
                </Button>
            </CardActions>

            {/* Social Media Icons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1.5,
                    mt: 2,
                    mb: 3,
                }}
            >
                <IconButton>
                    <Facebook sx={{ color: "#4267B2", fontSize: 32 }} />
                </IconButton>
                <IconButton>
                    <Instagram sx={{ color: "#E4405F", fontSize: 32 }} />
                </IconButton>
                <IconButton>
                    <LinkedIn sx={{ color: "#0077B5", fontSize: 32 }} />
                </IconButton>
                <IconButton>
                    <YouTube sx={{ color: "#FF0000", fontSize: 32 }} />
                </IconButton>

            </Box>
        </Card>
    );
}
