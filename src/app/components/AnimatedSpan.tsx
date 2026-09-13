"use client";

import { motion } from "framer-motion";

const AnimatedSpan = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="mb-6 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-900/50 dark:text-brand-300">
        {children}
      </span>
    </motion.div>
  );
};

export default AnimatedSpan;
