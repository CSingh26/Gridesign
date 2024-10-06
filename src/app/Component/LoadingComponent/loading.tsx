"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import "./loading.css"; // Ensure this path is correct

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Simulate loading effect on page change
    handleStart();
    const timer = setTimeout(() => {
      handleComplete();  // Hide loader after 2.5 seconds
    }, 2500);  // Adjust to 2.5 seconds for full animation

    return () => clearTimeout(timer);
  }, [pathname]);  // Trigger effect on path change

  if (!loading) return null; // Return null if not loading

  // Create grid positions for each item based on the 8x8 grid (40px step for grid items with gaps)
  const gridItems = Array.from({ length: 8 * 8 }, (_, i) => ({
    x: (i % 8) * 40, // Calculate X position for each block
    y: Math.floor(i / 8) * 40, // Calculate Y position for each block
  }));

  return (
    <div className="loader-container">
      <div className="loader-grid">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="loader-grid-item"
            style={{
              "--x": `${item.x}px`,
              "--y": `${item.y}px`,
            } as React.CSSProperties} /* Ensure custom properties are applied */
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;