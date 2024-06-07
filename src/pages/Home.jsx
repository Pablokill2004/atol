import { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from './Footer.jsx';
import { Container } from '@mui/material';

function Todo() {
  return (
    <div>
      <Encabezado />
      <Container sx={{ justifyContent: 'center',}}>
       <TablaProductos />
      </Container>
      <Footer />
    </div>
  );
}

function Encabezado() {
  const cardStyle = {
    backgroundImage:
      'https://cdn.thewirecutter.com/wp-content/media/2024/03/androidphones-2048px-0793-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
    backgroundSize: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  return (
    <>
      <React.Fragment>
        <div style={cardStyle}>
          <div style={{ padding: '20px', color: 'white' , textAlign:'center'}}>
            {
              <Card  sx={{ height: 300, maxWidth:1100, margin: 2 ,justifyContent: 'center'}}>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h1" component="div">
                    Store Phones
                  </Typography>
                  <Typography variant="body1">
                    Aqui podras encontrar el telefono indicado para ti, con
                    especificaciones y reseñas que te ayudaran a saber escoger
                    segun sean tus necesidades
                  </Typography>
                </CardContent>
              </Card>
            }
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

function TablaProductos() {
  <style>
    
  </style>
  return (
    <>
    
      <React.Fragment>
        <Card sx={{ maxWidth: 1100}}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://i.imgur.com/6ty0r2c.jpeg"
            title="Apple"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Apple
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Innovación, elegancia y rendimiento líder en la industria de la
              tecnología
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
      </React.Fragment>
      <br></br>
      <React.Fragment>
        <Card sx={{maxWidth: 1100 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://i.imgur.com/Yo6IgZo.png"
            title="Samsung"
          />
          <CardContent>
            <Typography variant="h3" component="div">
              Samsung
            </Typography>
            <Typography gutterBotton variant="body2" color="text.secondary">
              Tecnología versátil, diseño moderno y una amplia gama de opciones
              para cada estilo de vida
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
      </React.Fragment>
      <br></br>
      <React.Fragment>
        <Card sx={{ maxWidth: 1100 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2024/03/xiaomi-14-3283519.jpg?tf=1200x1200"
            title="Xiaomi"
          />
          <CardContent>
            <Typography variant="h3" component="div">
              Xiaomi
            </Typography>
            <Typography gutterBotton variant="body2" color="text.secondary">
              Excelente relación calidad-precio, innovación disruptiva y un
              enfoque centrado en la comunidad.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver más</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    </>
  );
}



export default function App() {
  return <Todo />;
}