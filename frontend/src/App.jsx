import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppRouter from "./routes/AppRouter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/houses/create" element={<CreateHouse />} />
        <Route path="/houses/:id/edit" element={<EditHouse />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/houses" element={<ListHouses />} />
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