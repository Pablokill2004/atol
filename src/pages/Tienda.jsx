import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

function Boton() {
  function handleClick() {
    alert('Este producto se ha agregado al carrito');
  }
  return <button onClick={handleClick}>Agregar al carrito</button>;
}
function Table() {
  return (
    <>
      <div>
        <img
          src="https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/2023/09/apple-iphone-15-6.jpg"
          width="50"
          height="50"
        />
        <p>Descripcion breve</p>
        <Boton />
      </div>
      <div>
        <img
          src="https://www.techyloud.com/wp-content/uploads/2021/03/Galaxy-S23-Ultra.jpg"
          width="50"
          height="50"
        />
        <p>Descripción breve</p>
        <Boton />
      </div>
      <div>
        <img
          src="https://www.91-cdn.com/hub/wp-content/uploads/2023/08/xiaomi-13t-image.jpg?tr=q-100"
          width="50"
          height="50"
        />
        <p>Descripción breve</p>
        <Boton />
      </div>
    </>
  );
}
export default function App() {
  return (
    <>
      <Table />
      <Contacto />
    </>
  );
}
