import { motion } from "framer-motion";

const contactInfo = {
  email: "h48503652@gmail.com",
  name: "חני",
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      
      <div className="footer-content">
        {/* Logo & Tagline */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/src/assets/logo2.png" 
            alt="Sweet Moments by Chani" 
            className="footer-logo-image"
          />
          <p className="footer-tagline">הקינוחים המושלמים לרגעים מתוקים</p>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="contact-title">צרו קשר</h4>
          
          <div className="contact-items">
            {/* Email */}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="contact-item glow-border"
            >
              <span className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div className="contact-details">
                <span className="contact-label">אימייל</span>
                <span className="contact-value">{contactInfo.email}</span>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:054-8503652"
              className="contact-item glow-border"
            >
              <span className="contact-icon phone">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div className="contact-details">
                <span className="contact-label">טלפון</span>
                <span className="contact-value">054-8503652</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="links-title">ניווט מהיר</h4>
          <nav className="footer-nav">
            <a href="/">ראשי</a>
            <a href="/gallery">גלריה</a>
            <a href="/gallery#number-cakes">עוגות מספר</a>
            <a href="/gallery#dessert-cups">כוסיות קינוח</a>
            <a href="/gallery#cakes">עוגות</a>
          </nav>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="footer-divider" />
        <p className="copyright">
          © {new Date().getFullYear()} Sweet Moments by Chani. כל הזכויות שמורות.
        </p>
        <p className="made-with">
          Made with <span className="heart">♥</span> in Israel
        </p>
      </motion.div>
    </footer>
  );
}
