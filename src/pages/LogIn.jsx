import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';

function Login() {
  return (
    <>
      <br></br>
      <React.Fragment>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="10vh"
        >
          <Avatar src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />

          <Typography variant="h3" component="div">
            Iniciar sesion
          </Typography>
        </Box>
        <Box justifyContent="center" alignItems="center" margin="2vh">
          <TextField
            id="outlined-required"
            label="Correo electronico"
            id="margin-none"
          />
        </Box>
        <Box justifyContent="center" alignItems="center" margin="2vh">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Box>
        <Box>
          <Button variant="contained">Iniciar sesion</Button>
          <Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                {'¿No tienes una cuenta?'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    </>
  );
}
export default function App() {
  return <Login />;
}
