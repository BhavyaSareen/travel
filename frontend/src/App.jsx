
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthLayout from '../components/Auth/AuthLayout'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'
import ForgotPassword from '../components/Auth/ForgotPassword'

function App() {

  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
        <Footer />


    </>
  )
}

export default App
