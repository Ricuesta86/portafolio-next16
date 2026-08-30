// src/components/AnimatedBox.tsx
"use client";

import { motion } from "framer-motion";

export const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-500 p-4"
    >
      Animado con Framer Motion
    </motion.div>
  );
};