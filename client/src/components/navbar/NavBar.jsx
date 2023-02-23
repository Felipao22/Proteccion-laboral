import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import IMAGE from "../../assets/LOGO CUADRADO.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import IMAGE2 from "../../assets/LOGO ALARGADO.png";

export default function ButtonAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box className="box" sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar"
        style={{ backgroundColor: "#E9EEF4", color: "black" }}
        position="static"
      >
        <Toolbar className="toolbar">
          <IconButton
            className="menu"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon className="menu" />
          </IconButton>
          <Drawer
            style={{ height: "60vh", width: "100vw" }}
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <List
              style={{
                fontSize: "30px",
                fontWeight: "600",
                height: "250px",
                width: "40vw",
              }}
            >
              <ListItem button component="a">
                <Link style={{ color: "black", textDecoration: "none" }} to="/">
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  to="/nosotros"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary="Nosotros" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  to="/services"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary="Servicios" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  to="/contact"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary="Contacto" />
                </Link>
              </ListItem>
            </List>
          </Drawer>
          <Link to="/">
            <img
              className="logo"
              style={{ maxHeight: "6rem", paddingRight: "2rem" }}
              src={IMAGE}
              alt="logo"
            />
          </Link>
          <Link to="/">
            <img
              className="logo-largo"
              style={{ height: "60px" }}
              src={IMAGE2}
              alt="logo largo"
            />
          </Link>
          <div className="container-botones">
            <div>
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/nosotros"
              >
                <Button color="inherit">Nosotros</Button>
              </Link>

              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/services"
              >
                <Button color="inherit">Servicios</Button>
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/contact"
              >
                <Button color="inherit">Contacto</Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
