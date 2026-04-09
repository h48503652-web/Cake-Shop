import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="navbar"
    >
      <Link to="/" className="logo-link">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/src/assets/logo2.png" 
            alt="Sweet Moments by Chani" 
            className="logo-image"
          />
        </motion.div>
      </Link>

      <div className="links">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <Link 
                to={link.path} 
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="link-text">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}