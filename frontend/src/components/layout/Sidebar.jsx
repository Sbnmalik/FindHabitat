import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}