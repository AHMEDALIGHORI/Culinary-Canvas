import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#ffedeb] w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold text-[#4e2120] font-['Plus_Jakarta_Sans']">Culinary Canvas</span>
          <p className="text-sm tracking-wide text-[#4e2120]/60 font-['Be_Vietnam_Pro'] max-w-xs">
            Elevating the food delivery experience into an editorial journey for the modern epicurean.
          </p>
          <div className="flex gap-4 mt-2">
            <span className="material-symbols-outlined text-[#4e2120]/60 cursor-pointer hover:text-[#FF5722]">public</span>
            <span className="material-symbols-outlined text-[#4e2120]/60 cursor-pointer hover:text-[#FF5722]">share</span>
            <span className="material-symbols-outlined text-[#4e2120]/60 cursor-pointer hover:text-[#FF5722]">mood</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#4e2120]">Company</h4>
          <nav className="flex flex-col gap-3">
            <Link className="text-sm text-[#4e2120]/60 hover:text-[#FF5722] underline-offset-4 hover:underline transition-all" to="/">About Us</Link>
            <Link className="text-sm text-[#4e2120]/60 hover:text-[#FF5722] underline-offset-4 hover:underline transition-all" to="/">Sustainability</Link>
            <Link className="text-sm text-[#4e2120]/60 hover:text-[#FF5722] underline-offset-4 hover:underline transition-all" to="/">Chef Partners</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#4e2120]">Legal</h4>
          <nav className="flex flex-col gap-3">
            <Link className="text-sm text-[#4e2120]/60 hover:text-[#FF5722] underline-offset-4 hover:underline transition-all" to="/">Privacy Policy</Link>
            <Link className="text-sm text-[#4e2120]/60 hover:text-[#FF5722] underline-offset-4 hover:underline transition-all" to="/">Terms of Service</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#4e2120]">Newsletter</h4>
          <p className="text-sm text-[#4e2120]/60">Join the epicurean inner circle for weekly tasting notes.</p>
          <div className="flex gap-2">
            <input className="bg-white border-none rounded-full px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Email" type="email" />
            <button className="bg-primary text-on-primary p-2 rounded-full active:scale-95 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 mt-12 pt-8 border-t border-[#4e2120]/5 text-center">
        <p className="text-sm tracking-wide text-[#4e2120]/60 font-['Be_Vietnam_Pro']">© 2024 Culinary Canvas. Crafted for the epicurean.</p>
      </div>
    </footer>
  );
}
