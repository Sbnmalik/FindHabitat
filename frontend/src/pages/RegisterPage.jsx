import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/authApi";
import "../styles/Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Create account</h1>
        <p className="auth-subtitle">
          Join FindHabitat to post homes or request available housing.
        </p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </label>

          <label>
            Account type
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="USER">User looking for housing</option>
              <option value="LANDLORD">Landlord posting homes</option>
            </select>
          </label>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}