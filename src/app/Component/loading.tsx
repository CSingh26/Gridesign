"use client";  // This marks the component as a Client Component

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';  // Replace useRouter with usePathname
import './loading.css';  // Import your loader CSS

const Loader = () => {
  const pathname = usePathname();  // Get the current pathname
  const [loading, setLoading] = useState(false);

  // Detect route change by using pathname
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);  // Keep the loader visible for 2 seconds
    };

    handleStart();  // Simulate page load start
    handleComplete();  // Simulate page load complete

    // Cleanup when component is unmounted
    return () => {
      setLoading(false);
    };
  }, [pathname]);  // Trigger loader when the pathname changes

  // If not loading, return null
  if (!loading) return null;

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid-animation" />
    </motion.div>
  );
};

export default Loader;