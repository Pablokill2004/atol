import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const opinion = {
  nombre: 'Fulano',
  producto: 'Xiaomi 13T Pro',
  opinion: 'God',
};
function Reviews() {
  return (
    <>
      <Forum />
    </>
  );
}

function Forum() {
  return (
    <>
      <React.Fragment>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="10vh"
        >
          <Typography variant="h3">Reseñas</Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar>H </Avatar>
          <TextField
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            id="outlined-required"
            label="Ingresa tu opinión"
            size="xs"
          />
        </Box>
        <Box margin="1vh">
          <Button variant="contained" size="small">
            Publicar
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar>C</Avatar>
          <Box margin="10vh">
            <Typography variant="h5">Chayanne </Typography>

            <Typography variant="body2">10 de 10, recomendadísimo </Typography>
          </Box>

          <Avatar>KB</Avatar>
          <Box margin="10vh">
            <Typography variant="h5">Kurco Bein </Typography>

            <Typography variant="body2">
              Estas ofertas me volaron la mente{' '}
            </Typography>
          </Box>
          <Avatar>LC</Avatar>
          <Box margin="10vh">
            <Typography variant="h5">Loquito del centro</Typography>

            <Typography variant="body2">Muy buenos focos</Typography>
          </Box>
          <Avatar>BO</Avatar>
          <Box margin="10vh">
            <Typography variant="h5">Barack Obama </Typography>

            <Typography variant="body2">
              No encontramos aceite, pero el servicio 10 de 10
            </Typography>
          </Box>
        </Box>
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
  return (
    <>
      <Reviews />
      <Contacto />
    </>
  );
}
