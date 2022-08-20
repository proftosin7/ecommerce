import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  MenuItem,
  Menu,
  Typography,
  IconButton,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./navbar.module.css";
const Navbar = ({ totalItems }) => {
  const drawerWidth = 0;

  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={(theme) => ({
        appBar: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        },
      })}
    >
      <Toolbar>
        <NavLink to="/" activeClassName="active-link" exact>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <img
              src="https://www.freepnglogos.com/uploads/pics-photos-instagram-logo-png-4.png"
              alt="eosquare"
              height="25px"
            />
            EOSQUARE
          </Typography>
        </NavLink>
        <div className={styles.grow}></div>
        {location.pathname === "/" && (
          <div className={styles.button}>
            <NavLink to="/cart" activeClassName="active-link" exact>
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </NavLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
