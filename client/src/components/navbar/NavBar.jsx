import { useState } from "react";
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
import IMAGE2 from "../../assets/logo largo.png";
import { useAppSelector } from "../../redux/hooks.js";
import { getUser } from "../../redux/userSlice.js";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export default function ButtonAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const user = useAppSelector(getUser);

  const navigate = useNavigate();

  let nombre = user?.nombreSede;

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
    const firstName = name?.split(" - ")[0];

    const initials = firstName
      ?.split(" ")
      .map((part) => part[0])
      .join("");

    const bgcolor = stringToColor(firstName);

    return {
      sx: {
        bgcolor: bgcolor,
      },
      children: initials,
    };
  }

  function stringAvatarAdmin(user) {
    const { name, lastName } = user || { name: "", lastName: "" };
    const initials = name[0] + lastName[0];
    const bgcolor = stringToColor(name + lastName);

    return {
      sx: {
        bgcolor: bgcolor,
      },
      children: initials,
    };
  }

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
            sx={{ mr: 0.5 }}
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
                width: "50vw",
              }}
            >
              {user &&
              user.email !== "" &&
              user.userId !== "" &&
              user.isAdmin !== "" ? (
                <>
                  {user.isAdmin && user.isAdmin !== "" ? (
                    <Avatar
                      onClick={() => {
                        setIsDrawerOpen(false);
                        navigate("/dashboard");
                      }}
                      {...stringAvatarAdmin(user)}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "40%",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <Avatar
                      onClick={() => {
                        setIsDrawerOpen(false);
                        navigate("/usuario");
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "40%",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                      {...stringAvatar(nombre)}
                    />
                  )}
                </>
              ) : (
                <>
                  <ListItem button component="a">
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/login"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      <ListItemText primary="Iniciar sesión" />
                    </Link>
                  </ListItem>
                </>
              )}

              <ListItem button component="a">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  to="/nosotros"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary="Nosotros" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  to="/services"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemText primary="Servicios" />
                </Link>
              </ListItem>
              <ListItem button component="a">
                <Link
                  onClick={() => setIsDrawerOpen(false)}
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
              style={{ height: "40px" }}
              src={IMAGE2}
              alt="logo largo"
            />
          </Link>

          <div className="container-botones">
            <div>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/nosotros"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Button color="inherit">Nosotros</Button>
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/services"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Button color="inherit">Servicios</Button>
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/contact"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Button color="inherit">Contacto</Button>
              </Link>
            </div>

            {user && user.email !== "" && user.userId !== "" ? (
              <>
                {user.isAdmin && user.isAdmin !== "" && user.userId !== "" ? (
                  <Avatar
                    onClick={() => {
                      setIsDrawerOpen(false);
                      navigate("/dashboard");
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                    {...stringAvatarAdmin(user)}
                  />
                ) : (
                  <Avatar
                    onClick={() => {
                      setIsDrawerOpen(false);
                      navigate("/usuario");
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                    {...stringAvatar(nombre)}
                  />
                )}
              </>
            ) : (
              <div className="log">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/login"
                >
                  <Button
                    color="inherit"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
