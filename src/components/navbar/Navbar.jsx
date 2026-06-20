import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../logo/Logo.jsx";
import { Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import style from "./Navbar.module.css";
import router from "../../Routes.jsx";
import { useContext } from "react";
import { AuthContext } from './../../context/AuthContext.jsx';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Cart",
    path: "/cart",
  },
];
const settingsForUnLoggedUsers = [
  {
    name: "Sign In",
    path: "/auth/login",
  },
  {
    name: "Sign Up",
    path: "/auth/register",
  } 
];
const settingsForLoggedUsers = [
  {
    name:"Profile",
    path:'/profile'
  },
  {
    name:"Logout",
    path:'/auth/login'
  }
];

// const settings = ['Profile', 'Account', 'Dashboard','','', ''];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {userAccessToken,logout}=useContext(AuthContext);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#978063",boxShadow:"none" }}>
      <Container>
        <Toolbar disableGutters>
          {/* md screen*/}
          {/* logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* logo */}
            <Logo width={"9rem"} />
          </Box>

          {/* xs screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                userAccessToken?
                <MenuItem
                  component={RouterLink}
                  to={page.path}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{color:"#8B5E3C" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
                :
                page.name !="Cart"?<MenuItem
                  component={RouterLink}
                  to={page.path}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{color:"#8B5E3C" }}>
                    {page.name}
                  </Typography>
                </MenuItem>:null
              ))}
            </Menu>
          </Box>
 
          {/* logo  */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            {/* logo */}
            <Logo width={"9rem"} />
          </Box>

          {/* md screen*/}
          <Box
            sx={{
              gap: 4,
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              userAccessToken?
                  <Link
                component={RouterLink}
                to={page.path}
                underline="none"
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
                {/* {page.name=='Cart'? 3:''} */}
              </Link>
              :
              page.name!="Cart"?
                  <Link
                component={RouterLink}
                to={page.path}
                underline="none"
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
               </Link> :null
          
            ))}
          </Box>

          {/* settings */}
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userAccessToken==null?
                //  للشخص الزائر 
                // <PersonIcon fontSize="large" sx={{ color: "#ffffff" }} />
                <Avatar sx={{ bgcolor: '#E47221' }} src="/broken-image.jpg" />
                :
                // للشخص المسجل دخوله
                 <Avatar sx={{ bgcolor: '#E47221' }} alt="Raghad" src="/static/images/avatar/2.jpg" />  

                }

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {(userAccessToken?settingsForLoggedUsers:settingsForUnLoggedUsers).map((setting) => (
                setting.name=="Logout"?
                <MenuItem
                  component={RouterLink}
                  to={setting.path}
                  key={setting.name}
                  onClick={handleLogout }
                >
                  <Typography sx={{color:"#8B5E3C" }}  >
                    {setting.name} <LogoutIcon sx={{paddingTop:1}} />
                  </Typography>
                </MenuItem>
                :
                <MenuItem
                  component={RouterLink}
                  to={setting.path}
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                >
                  <Typography sx={{color:"#8B5E3C" }}>
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
