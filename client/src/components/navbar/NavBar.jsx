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
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
// import { Avatar, AvatarBadge } from '@chakra-ui/react'
import Avatar from "@mui/material/Avatar";

export default function ButtonAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(user.nombreEmpresa);
  const history = useHistory();

  let nombre = user?.nombreEmpresa?.toString();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar"
        style={{ backgroundColor: "#E9EEF4", color: "black" }}
        position="static"
      >
        <Toolbar>
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
              {user && user.active === true ? (
                <Avatar
                  onClick={() => history.push("/user")}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "40%",
                    marginBottom: "10px",
                  }}
                  {...stringAvatar(nombre)}
                />
              ) : (
                <>
                  <ListItem button component="a" href="/login">
                    <ListItemText primary="Login" />
                  </ListItem>
                  <ListItem button component="a" href="/register">
                    <ListItemText primary="Registrase" />
                  </ListItem>
                </>
              )}

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
                  to="/clientes"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary="Clientes" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  to="/servicios"
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
            {user && user.active === true ? (
              <div className="log">
                <Avatar
                  onClick={() => history.push("/user")}
                  {...stringAvatar(nombre)}
                />
              </div>
            ) : (
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
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
