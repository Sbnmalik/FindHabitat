import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <Header />

      <div className="app-body container">
        <Sidebar />

        <main className="app-content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}