import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const pages = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: "#000",
                width: "80%",
                margin: "30px auto",
                borderRadius: "15px", 
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            color: "#fff",
                            textDecoration: "none",
                        }}
                    >
                        Aditya
                        <span style={{ color: "#007BFF" }}>Folio</span>
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                href={`#${page.toLowerCase()}`}
                                sx={{
                                    my: 2,
                                    color: "#fff",
                                    textTransform: "capitalize",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Dark Mode Icon */}
                    <IconButton sx={{ color: "#fff", mr: 2 }}>
                        <Brightness4Icon />
                    </IconButton>

                    {/* "Let's Talk" Button */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            textTransform: "capitalize",
                            borderRadius: 20,
                        }}
                        href="#contact"
                    >
                        Let's Talk
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;
