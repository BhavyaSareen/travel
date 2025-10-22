
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthLayout from '../components/Auth/AuthLayout'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'
import ForgotPassword from '../components/Auth/ForgotPassword'
import Dashboard from '../Pages/Dashboard';
import ProtectedRoute from '../routes/ProtectedRoute';

function App() {

  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/auth");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

      </Routes>
      {!hideLayout && <Footer />}

    </>
  )
}

export default App
