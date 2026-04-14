import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "text-[#FF5722] font-bold border-b-2 border-[#FF5722] pb-1 font-['Plus_Jakarta_Sans']";
    }
    return "text-[#4e2120]/70 font-medium hover:text-[#FF5722] hover:bg-white/50 transition-all duration-300 px-3 py-1 rounded-full font-['Plus_Jakarta_Sans']";
  };

  const getMobileClasses = (path) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "flex flex-col items-center gap-1 text-[#FF5722]";
    }
    return "flex flex-col items-center gap-1 text-[#4e2120]/60";
  };

  return (
    <>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-[#fff4f3]/80 backdrop-blur-2xl shadow-[0_4px_48px_rgba(78,33,32,0.04)]">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-[#4e2120]">Culinary Canvas</Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link className={getLinkClasses('/')} to="/">Discover</Link>
              <Link className={getLinkClasses('/tracking')} to="/tracking">Orders</Link>
              <Link className={getLinkClasses('/favorites')} to="/favorites">Favorites</Link>
              <Link className={getLinkClasses('/promotions')} to="/promotions">Promos</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            
            {isAuthenticated ? (
                <button 
                  onClick={logout} 
                  className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container-low text-on-surface font-bold hover:bg-surface-variant active:scale-95 duration-200 transition-all"
                >
                    Logout {user?.name}
                </button>
            ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)} 
                  className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:brightness-110 active:scale-95 duration-200 transition-all"
                >
                    Sign In
                </button>
            )}

            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/checkout')} className="p-2 rounded-full hover:bg-white/50 text-[#4e2120] active:scale-95 duration-200">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
              <button onClick={() => navigate('/profile')} className="p-2 rounded-full hover:bg-white/50 text-[#4e2120] active:scale-95 duration-200">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#fff4f3]/90 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50">
        <button onClick={() => navigate('/')} className={getMobileClasses('/')}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/' ? "'FILL' 1" : "'FILL' 0" }}>explore</span>
          <span className="text-[10px] font-bold">Discover</span>
        </button>
        <button onClick={() => navigate('/promotions')} className={getMobileClasses('/promotions')}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/promotions' ? "'FILL' 1" : "'FILL' 0" }}>local_offer</span>
          <span className="text-[10px] font-medium">Offers</span>
        </button>
        <button onClick={() => navigate('/tracking')} className={getMobileClasses('/tracking')}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/tracking' ? "'FILL' 1" : "'FILL' 0" }}>receipt_long</span>
          <span className="text-[10px] font-medium">Orders</span>
        </button>
        <button onClick={() => navigate('/profile')} className={getMobileClasses('/profile')}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/profile' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </>
  );
}
