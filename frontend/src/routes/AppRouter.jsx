import { Navigate, Routes, Route } from "react-router-dom";
import {ProtectedRoute} from "../components/layout/ProtectedRoute";
import CreateHouse from "../views/House/CreateHouse";
import EditHouse from "../views/House/EditHouse";
import ListHouses from "../views/House/Houses";
import Register from "../pages/RegisterPage";
import Login from "../pages/LoginPage";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/houses" element={<ProtectedRoute><ListHouses /></ProtectedRoute>} />
        <Route path="/houses/create" element={<ProtectedRoute><CreateHouse /></ProtectedRoute>} />
        <Route path="/houses/:id/edit" element={<ProtectedRoute><EditHouse /></ProtectedRoute>} />
      </Routes>
  );
}