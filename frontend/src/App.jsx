import AppRouter from "./routes/AppRouter";
import "./App.css";
import { Routes,Router, BrowserRouter } from "react-router-dom";
import CreateHouse from "./views/House/CreateHouse";
import EditHouse from "./views/House/EditHouse";
import ListHouses from "./views/House/ListHouses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListHouses />} />
        <Route path="/houses/create" element={<CreateHouse />} />
        <Route path="/houses/:id/edit" element={<EditHouse />} />
      </Routes>
    </BrowserRouter>
  );
}