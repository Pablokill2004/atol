import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
const footer = ()=>{
    return(
            <>
               <Box component="footer" sx={{ py: 3, mt: 4, backgroundColor: 'black',color:'white'}}>
                <Container sx={{ textAlign: 'left' }}>
                  <Grid container spacing={13}>
                    <Grid item xs={12} sm={6}>
                          <Typography gutterBottom variant="h5" component="div" >
                            Informacion de contacto
                          </Typography>
                          <Typography gutterBottom variant="subtitle2" component="div" >
                            Pablo Siquinajay - 22006477
                          </Typography>
                          <Typography gutterBottom variant="subtitle2" component="div" >
                            Ricardo Caballeros - 22006477
                          </Typography>
                          <Typography gutterBottom variant="subtitle2" component="div" >
                            Guatemala, Guatemala 2024
                          </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </>
           
          
    );
}

export default  footer;