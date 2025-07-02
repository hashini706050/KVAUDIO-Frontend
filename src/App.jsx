import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/adminPage';
import HomePage from './pages/admin/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
    <Routes path="/*">
      <Route path="/testing" element={<Testing />} />
       <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/*" element={<AdminPage/>} />
      <Route path="/*" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
