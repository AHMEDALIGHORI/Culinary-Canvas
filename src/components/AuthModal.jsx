import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    setLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            className="fixed inset-0 bg-[#240304]/60 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface-container-lowest rounded-3xl p-8 shadow-2xl z-[9999]"
            initial={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-extrabold text-[#4e2120] font-['Plus_Jakarta_Sans']">
                {isRegister ? 'Join Canvas' : 'Welcome Back'}
              </h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[#4e2120]">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {isRegister && (
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-1">Full Name</label>
                  <input type="text" required className="w-full bg-surface py-3 px-4 rounded-xl border-none focus:ring-2 focus:ring-primary/40 outline-none" placeholder="Chef Gusteau" />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface py-3 px-4 rounded-xl border-none focus:ring-2 focus:ring-primary/40 outline-none" 
                  placeholder="epicurean@canvas.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-1">Password</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface py-3 px-4 rounded-xl border-none focus:ring-2 focus:ring-primary/40 outline-none" 
                  placeholder="••••••••" 
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-2 py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold active:scale-[0.98] transition-transform flex justify-center items-center gap-2"
              >
                {loading ? (
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                ) : (
                    isRegister ? 'Create Account' : 'Sign In Securely'
                )}
              </button>
            </form>

            <p className="text-center mt-6 text-on-surface-variant text-sm font-medium">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}
              <button 
                onClick={() => setIsRegister(!isRegister)} 
                className="ml-2 text-primary font-bold hover:underline underline-offset-4"
              >
                {isRegister ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
