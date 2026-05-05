import AppRouter from "./routes/AppRouter";
import "./App.css";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import CreateHouse from "./views/House/CreateHouse";
import EditHouse from "./views/House/EditHouse";
import ListHouses from "./views/House/Houses";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListHouses />} />
        <Route path="/houses/create" element={<CreateHouse />} />
        <Route path="/houses/:id/edit" element={<EditHouse />} />
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