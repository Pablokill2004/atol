import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Tienda from './pages/Tienda.jsx';
import Reviews from './pages/Reviews.jsx';
import LogIn from './pages/LogIn.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tiendita" element={<Tienda />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
