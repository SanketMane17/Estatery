import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import "./Header.css";

const pages = ['Rent', 'Buy', 'Sell', "Manage Property", "Resources"];
const responsivePages = ['Rent', 'Buy', 'Sell', "Manage Property", "Resources", "Login", "Signup"];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "white", color: "rgb(120 98 217)" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <BedroomParentIcon className="icon" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#403e6c',
                            textDecoration: 'none',
                        }}
                    >
                        Estatery
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {responsivePages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color="#403e6c">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <BedroomParentIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#403e6c',
                            textDecoration: 'none',
                        }}
                    >
                        Estatery
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, idx) => {

                            if (idx === 0) {
                                return <Button
                                    key={page}
                                    className="header-section"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#403e6c', backgroundColor: "#e8e0f6", display: 'block' }}
                                >
                                    {page}
                                </Button>
                            }

                            return <Button
                                key={page}
                                className="header-section"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#403e6c', display: 'block' }}
                            >
                                {page}
                            </Button>
                        })}
                    </Box>
                    <Box className="header-footer">
                        <Button className="user-btn" variant="outlined">Login</Button>
                        <Button className="user-btn" variant="contained">Sign up</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
