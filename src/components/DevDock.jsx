import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const DOCK_LINKS = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/search', label: 'Search', icon: 'search' },
    { path: '/restaurant', label: 'Menu', icon: 'restaurant_menu' },
    { path: '/checkout', label: 'Cart', icon: 'shopping_bag' },
    { path: '/tracking', label: 'Tracking', icon: 'local_shipping' },
    { path: '/promotions', label: 'Promos', icon: 'loyalty' },
    { path: '/favorites', label: 'Saved', icon: 'favorite' },
    { path: '/profile', label: 'Profile', icon: 'person' },
];

export default function DevDock() {
    const location = useLocation();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] px-4 pointer-events-none w-full flex justify-center">
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-[0_32px_64px_rgba(0,0,0,0.3)] pointer-events-auto flex items-center gap-1 overflow-x-auto max-w-full no-scrollbar"
                style={{
                    boxShadow: '0 8px 32px rgba(255,107,107,0.1), inset 0 1px 1px rgba(255,255,255,0.2)'
                }}
            >
                {DOCK_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link 
                            key={link.path} 
                            to={link.path}
                            className={`relative px-4 py-2.5 rounded-full flex items-center gap-2 transition-colors duration-300 ${isActive ? 'text-white font-bold' : 'text-white/60 hover:text-white/90 font-medium'}`}
                        >
                            {isActive && (
                                <motion.div 
                                    layoutId="devdock-indicator"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#ff8e8e] rounded-full -z-10 shadow-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span 
                                className="material-symbols-outlined text-[18px]" 
                                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                            >
                                {link.icon}
                            </span>
                            <span className="text-sm whitespace-nowrap">{link.label}</span>
                        </Link>
                    )
                })}
            </motion.div>
        </div>
    );
}
