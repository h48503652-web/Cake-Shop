import { motion } from "framer-motion";
import type { Cake } from "../../types/cake";

interface CakeCardProps {
  cake: Cake;
  index?: number;
}

export default function CakeCard({ cake, index = 0 }: CakeCardProps) {
  return (
    <motion.div
      className="card glow-border"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
    >
      <div className="card-image-wrapper">
        <motion.img 
          src={cake.image} 
          alt={cake.name}
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        <div className="card-image-overlay" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{cake.name}</h3>
        <div className="card-footer">
          <span className="card-price">
            <span className="currency">₪</span>
            {cake.price}
          </span>
          <motion.span 
            className="card-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            Premium
          </motion.span>
        </div>
      </div>
      
      <div className="card-glow" />
    </motion.div>
  );
}