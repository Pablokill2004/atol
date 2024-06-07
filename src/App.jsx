import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Apple from './pages/Tienda/Apple.jsx';
import Samsung from './pages/Tienda/Samsung.jsx';
import Xiaomi from './pages/Tienda/Xiaomi.jsx';
import Reviews from './pages/Reviews.jsx';
import LogIn from './pages/LogIn.jsx';
import './App.css';
import { createMuiTheme,ThemeProvider } from '@mui/material/styles';


export default function App() {

  const theme = createMuiTheme({
    typography:{
      fontFamily:[
        "Poppins",
         "sans-serif"
      ].join(','),
      fontweight: [400].join(','),
    fontstyle:["normal"].join(','),
    }
 
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Inicio" element={<Home />} />
          <Route path="Apple" element={<Apple />} />
          <Route path="Samsung" element={<Samsung />} />
          <Route path="Xiaomi" element={<Xiaomi />} />
          <Route path="Reseñas" element={<Reviews />} />
          <Route path="LogIn" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
