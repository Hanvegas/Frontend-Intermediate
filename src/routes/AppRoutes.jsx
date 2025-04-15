import { Routes, Route } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"
import IsLogin from "../components/IsLogin"

const AppRoutes = () => {
      return (
            <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" 
                  element={
                  <IsLogin>
                        <Home />
                  </IsLogin>
            } />
            </Routes>
      )
}

export default AppRoutes