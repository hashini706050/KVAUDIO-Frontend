import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';
import ProductOverview from './pages/home/productOverviewPage';

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
    <Routes path="/*">
      <Route path="/testing" element={<Testing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/*" element={<AdminPage/>} />
      <Route path="/product/:key" element={<ProductOverview />} />
      <Route path="/*" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
