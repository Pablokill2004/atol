import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './Footer.jsx';

function Todo() {
  return (
    <div>
      <br />
      <TablaProductos />
      <Contacto />
      <Footer />
    </div>
  );
}

function TablaProductos() {
  const handleAddToCart = () => {
    alert('Producto agregado al carrito');
  };

  return (
    <>
      <React.Fragment>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <CardMedia
              component="img"
              sx={{ width: '20%', height: '20%', marginRight: '20px' }}
              image="src/pages/img/iphone_15.jpg"
              title="Iphone15"
            />
            <div>
            <Box sx={{ width: '60%', height: '10%', background: '#F57A4D' }}>
              <Typography variant="h6" component="div">
                iphone 15 Pro Max
              </Typography>
            </Box>
              <Box component="div">
              <Typography variant="body2" color="text.secondary"  sx={{width: 500,textAlign: 'justify', paddingRight: 5 ,paddingTop: 2}}>
                orem Ipsum is simply dummy text of the printing and typesetting industry. 
                
                </Typography> 
              </Box> 

              <div style={{  mx: 'auto', width: 202 , paddingTop: 50, paddingLeft: 30}}>
                <CardActions>
                  <Button size="small" onClick={handleAddToCart} variant="contained" >Agregar al carrito</Button>
                </CardActions>
              </div>     
            </div>
            </CardContent>
        </Card>
      </React.Fragment>

      <br />
      <React.Fragment>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <CardMedia
              component="img"
              sx={{ width: '20%', height: '20%', float: 'left' }}
              image="src/pages/img/iphone_SE.jpg"
              title="Apple"
            />
              <div>
              <Box sx={{ width: '60%', height: '10%', background: '#F57A4D' }}>
               <Typography variant="h6" component="div"  sx={{ marginBottom: 2}} >
               iPhone SE 2
              </Typography>
              </Box>
              <Box component="div">
             
                <Typography variant="body2" color="text.secondary"  sx={{width: 500,textAlign: 'justify', paddingRight: 5 }}>
                orem Ipsum ihas been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type sp
                ecimen book. It has vived not only five centuries, but also the leap into elec
                tronic typesetting, remaining essentially unchanged. It was popularised in the 1960
                s with the release of Letraset sheets containing Lorem Ipsum passages, and more recent
                ly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>   
                </Box> 
                <div style={{  mx: 'auto', width: 202 , paddingTop: 50, paddingLeft: 30}}>
                <CardActions>
                  <Button size="small" onClick={handleAddToCart} variant="contained">Agregar al carrito</Button>
                </CardActions>
              </div>      
            </div>
          </CardContent>
          
        </Card>
      </React.Fragment>

      <br />
      <React.Fragment>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <CardMedia
                component="img"
                sx={{ width: '20%', height: '20%', float: 'center' }}
                image="src/pages/img/iphone_12.jpg"
                title="Apple"
              />
           <div>
           <Box sx={{ width: '60%', height: '10%', background: '#F57A4D' }}>
              <Typography variant="h6" component="div"  sx={{ marginBottom: 2}} >
                 iPhone 12 Pro Max
              </Typography>
          </Box>
              <Box component="div">
                <Typography variant="body2" color="text.secondary"  sx={{width: 500,textAlign: 'justify', paddingRight: 5 }}>
                orem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type sp
                ecimen book. It has survived not only five centuries, but also the leap into elec
                tronic typesetting, remaining essentially unchanged. It was popularised in the 1960
                s with the release of Letraset sheets containing Lorem Ipsum passages, and more recent
                ly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>   
                </Box> 
               <div style={{  mx: 'auto', width: 202 , paddingTop: 50, paddingLeft: 30}}>
                <CardActions>
                  <Button size="small" onClick={handleAddToCart} variant="contained">Agregar al carrito</Button>
                </CardActions>
              </div>      
            </div>
           
          
          </CardContent>
          
        </Card>
      </React.Fragment>
    </>
  );
}



export default function App() {
  return <Todo />;
}
