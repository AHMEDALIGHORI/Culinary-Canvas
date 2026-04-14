import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FastImage({ src, alt, className, style, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className || ''}`} style={style}>
      {/* Low quality placeholder / Skeleton */}
      <motion.div 
        className="absolute inset-0 bg-surface-variant/40 animate-pulse"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* High Quality Image lazily decoded */}
      <motion.img
        src={src}
        alt={alt || "image"}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...props}
      />
    </div>
  );
}
