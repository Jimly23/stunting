import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Konsultasi from "../pages/Konsultasi"
import Pencegahan from "../pages/Pencegahan"
import Pengobatan from "../pages/Pengobatan"
import PenyebabStunting from "../pages/PenyebabStunting"
import CheckEmail from "../pages/CheckEmail"
import ResetPassword from "../pages/ResetPassword"
import TentangStunting from "../pages/TentangStunting"
import CiriStunting from "../pages/CiriStunting"
import CheckUp from "../pages/CheckUp"
import Profile from "../pages/Profile"
import Splash from "../pages/Splash"
import DataStatus from "../pages/DataStatus"
import DetailHistory from "../pages/DetailHistory"
function App() {

  return (
    <>
      {/* <div className="min-h-screen bg-red-300">
        <h3 className="bg-blue-200 font-bold text-center">Hello</h3>
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/pencegahan" element={<Pencegahan />} />
          <Route path="/ciri" element={<CiriStunting />} />
          <Route path="/pengobatan" element={<Pengobatan />} />
          <Route path="/penyebab" element={<PenyebabStunting />} />
          <Route path="/tentang" element={<TentangStunting />} />
          <Route path="/checkup" element={<CheckUp />} />
          <Route path="/data-status" element={<DataStatus />} />
          <Route path="/detail-history" element={<DetailHistory />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
