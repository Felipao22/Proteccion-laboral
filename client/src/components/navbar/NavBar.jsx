import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import IMAGE from "../../assets/LOGO CUADRADO.png";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./NavBar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";

export default function ButtonAppBar() {
  const [nav, setNav] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "Nosotros",
      name: "Nosotros",
    },
    {
      id: 3,
      link: "Clientes",
      name: "Clientes",
    },
    {
      id: 4,
      link: "Trabajos",
      name: "Trabajos",
    },
    {
      id: 5,
      link: "Contacto",
      name: "Contacto",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar"
        style={{ backgroundColor: "#E9EEF4", color: "black" }}
        position="static"
      >
        <Toolbar>
          <IconButton
          className='menu'
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
              style={{ fontSize: "30px", fontWeight: "600", height: "250px" }}
            >
              <ListItem button component="a" href="/login">
                <ListItemText primary="Login"/>
              </ListItem>
              <ListItem button component="a" href="/register">
                <ListItemText primary="Registrase" />
              </ListItem>
              <ListItem button component="a" href="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="/nosotros">
                <ListItemText primary="Nosotros" />
              </ListItem>

              <ListItem button component="a" href="/clientes">
                <ListItemText primary="Clientes" />
              </ListItem>
              <ListItem button component="a" href="/servicios">
                <ListItemText primary="Servicios" />
              </ListItem>
              <ListItem button component="a" href="/contact">
                <ListItemText primary="Contacto" />
              </ListItem>
            </List>
          </Drawer>

          <Link to="/">
            <img style={{ height: "50px" }} src={IMAGE} alt="No image" />
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
            <div className="log">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/register"
              >
                <Button color="inherit">Registrarse</Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{
  /* <ul className='desorder' style={{display:'none'}}>
        {links.map(({ id, link }) => (
          <li
            key={id}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
      >
        {nav ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
      </div>

      {nav && (
        <div >
        <ul className="uli">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                style={{color:'black', textDecoration:'none'}}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      )} */
}
