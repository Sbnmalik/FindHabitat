import { Navigate, Routes, Route } from "react-router-dom";
import CreateHouse from "../views/House/CreateHouse";
import EditHouse from "../views/House/EditHouse";
import ListHouses from "../views/House/Houses";
import Register from "../pages/RegisterPage";
import Login from "../pages/LoginPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/houses" element={<ListHouses />} />
        <Route path="/houses/create" element={<CreateHouse />} />
        <Route path="/houses/:id/edit" element={<EditHouse />} />
      </Routes>
    </BrowserRouter>
  );
}