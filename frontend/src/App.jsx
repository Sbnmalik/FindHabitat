import AppRouter from "./routes/AppRouter";
import "./App.css";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import CreateHouse from "./views/House/CreateHouse";
import EditHouse from "./views/House/EditHouse";
import ListHouses from "./views/House/Houses";
import { Toaster } from "react-hot-toast";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListHouses />} />
        <Route path="/houses/create" element={<CreateHouse />} />
        <Route path="/houses/:id/edit" element={<EditHouse />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#111827",
            color: "#fff",
          },
        }}
      />
    </BrowserRouter>    
  );
}