import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Promotions from './pages/Promotions'
import Favorites from './pages/Favorites'
import OrderTracking from './pages/OrderTracking'
import RestaurantDetail from './pages/RestaurantDetail'
import Checkout from './pages/Checkout'
import GSAPInitializer from './components/GSAPInitializer'
import DevDock from './components/DevDock'



// We need a wrapper to access useLocation for AnimatePresence to work on nested routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/restaurant" element={<RestaurantDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/tracking" element={<OrderTracking />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    // Initialize Lenis for Smooth Scrolling globally
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis with GSAP's Ticker for ultra-smooth rendering
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    // This prevents GSAP from correcting lag, ensuring Lenis handles it raw
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    }
  }, []);

  return (
    <Router>
      <GSAPInitializer />
      <DevDock />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
