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

function Todo() {
  return (
    <div>
      <Encabezado />
      <br></br>
      <TablaProductos />
      <Contacto />
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
          <div style={{ padding: '20px', color: 'white' }}>
            {
              <Card>
                <CardMedia sx={{ height: 70 }} />
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
  return (
    <>
      <React.Fragment>
        <Card sx={{ maxWidth: 345 }}>
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
        <Card sx={{ maxWidth: 345 }}>
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
        <Card sx={{ maxWidth: 345 }}>
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

function Contacto() {
  return (
    <>
      <React.Fragment>
        <Card>
          <CardMedia sx={{ height: 20 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Informacion de contacto
            </Typography>
            <Typography variant="body2">Ricardo Caballeros 19001133</Typography>
            <Typography variant="body2">Pablo Siquinajay 22006477</Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    </>
  );
}
export default function App() {
  return <Todo />;
}
