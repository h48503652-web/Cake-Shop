import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cakes, categories } from "../data/cakes";
import Container from "../components/ui/Container";
import type { CakeCategory, Cake } from "../types/cake";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const categoryOrder: CakeCategory[] = ["number-cakes", "dessert-cups", "cakes"];

// Lightbox Component
function Lightbox({
  cake,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: {
  cake: Cake | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  if (!isOpen || !cake) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="lightbox-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={onClose}>
              ×
            </button>

            {hasPrev && (
              <button className="lightbox-nav lightbox-prev" onClick={onPrev}>
                ‹
              </button>
            )}

            <div className="lightbox-image-wrapper">
              <img src={cake.image} alt={cake.name} className="lightbox-image" />
              <div className="lightbox-image-glow" />
            </div>

            {hasNext && (
              <button className="lightbox-nav lightbox-next" onClick={onNext}>
                ›
              </button>
            )}

            <div className="lightbox-info">
              <h3 className="lightbox-title">{cake.name}</h3>
              <p className="lightbox-price">₪{cake.price}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CategorySection({
  categoryKey,
  items,
  onImageClick,
}: {
  categoryKey: CakeCategory;
  items: typeof cakes;
  onImageClick: (cake: Cake) => void;
}) {
  const category = categories[categoryKey];

  return (
    <motion.section
      className="category-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {/* Category Header */}
      <div className="category-header">
        <motion.div
          className="category-indicator"
          style={{ backgroundColor: category.color }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        />
        <div className="category-info">
          <h2 className="category-title">{category.name}</h2>
          <p className="category-description">{category.description}</p>
        </div>
        <span className="category-count">{items.length} פריטים</span>
      </div>

      {/* Category Grid */}
      <motion.div
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((cake) => (
          <motion.div key={cake.id} variants={itemVariants}>
            <div className="gallery-card" onClick={() => onImageClick(cake)}>
              <div className="gallery-card-image-wrapper">
                <img src={cake.image} alt={cake.name} className="gallery-card-image" />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-icon">🔍</div>
                </div>
              </div>
              <div className="gallery-card-info">
                <h3 className="gallery-card-title">{cake.name}</h3>
                <p className="gallery-card-price">₪{cake.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default function Gallery() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allCakes = cakes;

  const handleOpenLightbox = (cake: Cake) => {
    setSelectedCake(cake);
    setCurrentIndex(allCakes.findIndex((c) => c.id === cake.id));
  };

  const handleCloseLightbox = () => {
    setSelectedCake(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allCakes.length;
    setCurrentIndex(nextIndex);
    setSelectedCake(allCakes[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? allCakes.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedCake(allCakes[prevIndex]);
  };

  const cakesByCategory = categoryOrder.map((key) => ({
    key,
    items: cakes.filter((cake) => cake.category === key),
  }));

  return (
    <Container>
      <Lightbox
        cake={selectedCake}
        isOpen={!!selectedCake}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={true}
        hasPrev={true}
      />
      {/* Page Header */}
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <span className="gallery-subtitle">Our Collection</span>
        <h1 className="gallery-title">
          <span className="gradient-text-pink">הקינוחים</span> שלנו
        </h1>
        <p className="gallery-description">
          גלו את המבחר המיוחד שלנו — עוגות מעוצבות, קינוחים אישיים, ועוגות שכבות מרהיבות
        </p>
      </motion.div>

      {/* Category Tabs/Navigation */}
      <motion.div
        className="category-nav"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {categoryOrder.map((key, index) => {
          const category = categories[key];
          return (
            <motion.a
              key={key}
              href={`#${key}`}
              className="category-tab"
              style={{ "--category-color": category.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tab-dot" style={{ backgroundColor: category.color }} />
              <span className="tab-name">{category.name}</span>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
      />

      {/* Categories */}
      <div className="categories-wrapper">
        {cakesByCategory.map(({ key, items }) => (
          <div key={key} id={key}>
            <CategorySection categoryKey={key} items={items} onImageClick={handleOpenLightbox} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        className="gallery-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="highlight">הזמנות מותאמות אישית</span> — 
        צרו קשר לעיצובים מיוחדים לפי הזמנה
      </motion.p>
    </Container>
  );
}