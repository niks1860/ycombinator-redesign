import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  Link,
  Grid,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"

interface NavItem {
  text: string
  to: string
}

const menus: NavItem[] = [
  { text: "Stories", to: "/stories" },
  { text: "Shows", to: "/shows" },
  { text: "Asks", to: "/asks" },
  { text: "Jobs", to: "/jobs" },
]

const footerItems: NavItem[] = [
  { text: "Guidelines", to: "https://news.ycombinator.com/newsguidelines.html" },
  { text: "FAQ", to: "https://news.ycombinator.com/newsfaq.html" },
  { text: "Lists", to: "https://news.ycombinator.com/lists" },
  { text: "API", to: "https://github.com/HackerNews/API" },
  { text: "Security", to: "https://news.ycombinator.com/security.html" },
  { text: "Legal", to: "http://www.ycombinator.com/legal/" },
  { text: "Apply to YC", to: "http://www.ycombinator.com/apply/" },
]

const Layout = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const navigateTo = (to?: string) => {
    navigate(to || "")
    handleCloseNavMenu()
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, ml: 2, display: { xs: "none", sm: "flex" } }}
          >
            Hacker News
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="Naigation links"
              aria-control="menu-appbar"
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
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {menus.map(({ text, to }) => (
                <MenuItem key={to} onClick={() => navigateTo(to)}>
                  <Typography textAlign="center">{text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
          >
            Hacker News
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {menus.map(({ text, to }) => (
              <Button
                key={to}
                onClick={() => navigateTo(to)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
      <Divider />
      <Grid sx={{ p: 3 }} container spacing={3}>
        {footerItems.map(({ text, to }) => (
          <Grid item key={to}>
            <Link target="_blank" underline="none" rel="noreferrer" href={to}>
              {text}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Layout
