import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const features = [
  {
    icon: "🎂",
    title: "עוגות מעוצבות",
    description: "עוגות מספר מרהיבות לכל גיל ואירוע, מעוצבות בקפידה עד הפרט האחרון",
  },
  {
    icon: "💫",
    title: "חומרי גלם פרימיום",
    description: "משתמשים רק בשוקולד הבלגי הטוב ביותר, שמנת טרייה, ופירות טריים",
  },
  {
    icon: "🚚",
    title: "משלוח עד הבית",
    description: "מגיעים עד אליך עם הקינוח טרי ומושלם, ארוז היטב להגנה מקסימלית",
  },
];

const featuredProducts = [
  {
    name: "עוגת מספר 18 - ורוד זהב",
    image: "/src/assets/עוגת מספר 18.jpg",
    price: 320,
    tag: "הכי נמכר",
  },
  {
    name: "פחזניות במילוי קרם ווניל",
    image: "/src/assets/פחזניות.PNG",
    price: 180,
    tag: "חדש",
  },
  {
    name: "עוגת מספר 13 בר מצווה",
    image: "/src/assets/מספר13.jpg",
    price: 280,
    tag: "קלאסיקה",
  },
];

const testimonials = [
  {
    name: "מיכל",
    text: "עוגת ה-30 של חני פשוט הדהימה את כל האורחים! הטעם והעיצוב היו מושלמים",
    rating: 5,
    image: "",
  },
  {
    name: "תמר",
    text: "המארז כוסיות לבר המצווה של הבן שלי היה יצירת מחשבת. תודה חני!",
    rating: 5,
    image: "",
  },
  {
    name: "יעל",
    text: "העוגה ליום ההולדת של אמא שלי הייתה יפהפייה וטעימה להפליא. מומלץ בחום!",
    rating: 5,
    image: "",
  },
];

const processSteps = [
  {
    step: "01",
    title: "בחירת קינוח",
    description: "בחרו מגלריית הקינוחים או בקשו עיצוב מותאם אישית",
  },
  {
    step: "02",
    title: "הזמנה",
    description: "צרו קשר במייל או בטלפון 054-8503652 עם פרטי ההזמנה והתאריך",
  },
  {
    step: "03",
    title: "הכנה ואפייה",
    description: "אני מכינה את הקינוח בקפידה עם חומרי הגלם הטובים ביותר",
  },
  {
    step: "04",
    title: "אספקה טרייה",
    description: "הקינוח מגיע אליכם טרי ומושלם בדיוק בזמן לאירוע",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="home-page">
      {/* HERO SECTION WITH PARALLAX */}
      <section ref={heroRef} className="hero hero-with-image">
        <div className="hero-bg-elements">
          <motion.div
            className="glow-orb orb-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="glow-orb orb-2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ y: contentY }}
          >
            <motion.div variants={fadeInUp} className="hero-badge">
              <span className="badge-dot" />
              <span>מאמנת קונדיטורית מוסמכת</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="hero-title">
              <span className="title-line">קינוחים שמפתים</span>
              <span className="title-line gradient-text">מבט ראשון</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-subtitle">
              עוגות מעוצבות וקינוחים פרימיום לאירועים מיוחדים
            </motion.p>

            <motion.p variants={fadeInUp} className="hero-description">
              כל קינוח נעשה באהבה, מחומרי הגלם האיכותיים ביותר, עם דגש על עיצוב מרהיב וטעם בלתי נשכח
            </motion.p>

            <motion.div variants={fadeInUp} className="hero-actions">
              <Button onClick={() => navigate("/gallery")} size="lg">
                צפייה בגלריה
              </Button>
              <Button variant="secondary" size="lg" onClick={() => window.location.href = "#contact"}>
                בואו נדבר
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-stats">
              <div className="stat-item">
                <span className="stat-value gradient-text-gold">500+</span>
                <span className="stat-label">לקוחות מרוצים</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value gradient-text-gold">15+</span>
                <span className="stat-label">שנות ניסיון</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-value gradient-text-gold">100%</span>
                <span className="stat-label">טרי וטעים</span>
              </div>
            </motion.div>
          </motion.div>

          {/* PARALLAX CAKE IMAGE */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ y: imageY }}
          >
            <div className="hero-image-glow" />
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=80"
              alt="עוגת יום הולדת מרהיבה"
              className="hero-cake-image"
            />
            <div className="hero-image-badge">
              <span className="badge-star">★</span>
              <span>Best Seller</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">למה לבחור בי?</span>
            <h2 className="section-title">
              ההבדל של <span className="gradient-text">Sweet Moments</span>
            </h2>
          </motion.div>

          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glow-border"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-image-stack">
                <img
                  src="/src/assets/בר מעוצב.jpeg"
                  alt="בר מעוצב עם קינוחים מרהיבים"
                  className="about-image main"
                />
              </div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="section-subtitle">הסיפור שלי</span>
              <h2 className="section-title">
                מאהבה <span className="gradient-text">לאומנות</span>
              </h2>
              <div className="about-text">
                <p>
                  אני <strong>חני</strong>, קונדיטורית עם 15+ שנות ניסיון בהכנת קינוחים מרהיבים לאירועים מיוחדים.
                  התשוקה שלי להכנת עוגות מתחילה מכל ביס - השילוב המושלם בין טעם מדהים לעיצוב מרהיב.
                </p>
                <p>
                  כל קינוח נעשה <strong>בידיים</strong> שלי, מחומרי הגלם האיכותיים ביותר -
                  שוקולד בלגי, שמנת טרייה, פירות העונה, וכל התשומת לב שמגיעה ליום המיוחד שלכם.
                </p>
                <p>
                  אני מאמינה שקינוח טוב הוא לא רק טעים - הוא חוויה. וזה בדיוק מה שאני מביאה לכל אירוע.
                </p>
              </div>
              <div className="about-signature">
                <span className="signature-name">חני</span>
                <span className="signature-title">מאמנת קונדיטורית</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">המבחר שלנו</span>
            <h2 className="section-title">
              הקינוחים <span className="gradient-text-pink">המובילים</span>
            </h2>
            <p className="section-description">
              המוצרים האהובים ביותר על לקוחותינו - עוגות וקינוחים שמעניקים חוויה מתוקה בלתי נשכחת
            </p>
          </motion.div>

          <motion.div
            className="featured-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="featured-card"
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
              >
                <div className="featured-image-wrapper">
                  <img src={product.image} alt={product.name} />
                  <span className="featured-tag">{product.tag}</span>
                  <div className="featured-overlay" />
                </div>
                <div className="featured-content">
                  <h3 className="featured-name">{product.name}</h3>
                  <div className="featured-footer">
                    <span className="featured-price">
                      <span className="currency">₪</span>
                      {product.price}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate("/gallery")}
                    >
                      פרטים →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="featured-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button onClick={() => navigate("/gallery")} size="lg">
              לכל הקינוחים
            </Button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">לקוחות מספרים</span>
            <h2 className="section-title">
              <span className="gradient-text">חוויות</span> מהשטח
            </h2>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar-placeholder">
                    {testimonial.name[0]}
                  </div>
                  <div className="testimonial-info">
                    <span className="testimonial-name">{testimonial.name}</span>
                    <div className="testimonial-rating">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">איך זה עובד?</span>
            <h2 className="section-title">
              מההזמנה <span className="gradient-text">לצלחת</span>
            </h2>
          </motion.div>

          <motion.div
            className="process-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                variants={fadeInUp}
              >
                <span className="process-number">{step.step}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="process-arrow">→</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="cta-section">
        <div className="cta-bg">
          <motion.div
            className="cta-glow"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="cta-title">
              מוכנים להזמין את הקינוח <span className="gradient-text">המושלם</span>?
            </h2>
            <p className="cta-description">
              צרו קשר עוד היום ונתחיל לתכנן את הקינוח המיוחד לאירוע שלכם
            </p>
            <div className="cta-actions">
              <Button
                onClick={() => window.location.href = "mailto:h48503652@gmail.com"}
                size="lg"
              >
                <span className="btn-icon">✉️</span>
                שליחת מייל
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate("/gallery")}
                size="lg"
              >
                צפייה בגלריה
              </Button>
            </div>
            <div className="cta-contact">
              <span className="cta-label">או פנו ישירות:</span>
              <a href="mailto:h48503652@gmail.com" className="cta-email">
                h48503652@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}