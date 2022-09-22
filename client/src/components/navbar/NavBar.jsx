import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import IMAGE from '../../assets/LOGO CUADRADO.png'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import './NavBar.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';

export default function ButtonAppBar() {
  const [nav, setNav] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const links = [
    {
      id: 1,
      link: "/",
      name:'Home'
    },
    {
      id: 2,
      link: "Nosotros",
      name:'Nosotros'
    },
    {
      id: 3,
      link: "Clientes",
      name:'Clientes'
    },
    {
      id: 4,
      link: "Trabajos",
      name:'Trabajos'
    },
    {
      id: 5,
      link: "Contacto",
      name:'Contacto'
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#E9EEF4", color: "black"}} position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer style={{height: '60vh', width: '50vw'}} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List style={{fontSize: '30px', fontWeight: '600', height: '250px'}}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Productos"/>
            </ListItem>

            <ListItem button>
              <ListItemText primary="Catalogo" />
            </ListItem>
            </List>
            </Drawer>
            
       
          <div>
            <img style={{height:'50px'}} src={IMAGE} alt="No image" />
          </div>
          <Button color="inherit">Login</Button>
          <Link style={{color:'black', textDecoration:'none'}} to='/register'>
          <Button color="inherit">Registrarse</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

 {/* <ul className='desorder' style={{display:'none'}}>
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
      )} */}