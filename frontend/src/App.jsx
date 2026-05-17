import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppRouter from "./routes/AppRouter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />

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