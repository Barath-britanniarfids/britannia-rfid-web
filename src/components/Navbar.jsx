import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import brfidLogo from "../../public/images/brfid-logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function goToSection(id) {
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setMenuOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={brfidLogo} alt="BRFID Logo" style={{ height: 48, width: 'auto' }} />
        </Link>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setMenuOpen(false)}
            >
              PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setMenuOpen(false)}
            >
              CLIENT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        <button
          className={styles.contactBtn}
          onClick={() => goToSection("contact")}
        >
          Contact us
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
