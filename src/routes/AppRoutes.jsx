import { Routes, Route } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"
import IsLogin from "../components/IsLogin"
import Profile from "../pages/Profile"
import CRUD from "../pages/CRUD"

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
                  <Route path="/profile" 
                        element={
                        <IsLogin>
                              <Profile />
                        </IsLogin>
                        } />
                  <Route path="/crud" 
                        element={
                        <IsLogin>
                              <CRUD />
                        </IsLogin>
                        } />
            </Routes>
      )
}

export default AppRoutes