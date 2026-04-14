
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function OrderTracking() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto space-y-8">

<header className="relative overflow-hidden rounded-lg bg-surface-container-low p-8 md:p-12">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-medium">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                        Chef is preparing your meal
                    </div>
<h1 className="gsap-hero text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface">
                        Arriving in <span className="text-primary">18 mins</span>
</h1>
<p className="text-lg text-on-surface-variant max-w-md">
                        Saffron &amp; Silk’s signature butter chicken is currently being simmered to perfection by Chef Marco.
                    </p>
<div className="flex items-center gap-4">
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
</div>
<span className="text-sm font-bold text-primary">65%</span>
</div>
</div>
<div className="hidden md:block relative">
<FastImage  alt="fresh dish" className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" data-alt="Close-up of a steaming bowl of orange-hued curry with fresh cilantro garnish and artisan naan bread on a warm wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkR36zeF8EET0SL9Aws-_pPe1Gf6_jNIM5ibSzOJ-1Vwjjyw5mEu7twIoSsCOHzlTalWTfSOjZLND3pYgKXaynuC29iTN3eygKj8JUqLFI5pMkBSomKsXkcpkSAtAkNl6Roqqs6XhTCWrIQrT9aDQiFcufCiapVziucLOQl2cz5iGUOaq8tdbAeHjgXmqBuWn0UfhC8gabfo2luZygkLLgaLXakD-UyNFntWOvehw_FH0cMmqQb38haxN567-UBDVH_T_7S1zJum8" />
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<section className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-sm">
<div className="absolute inset-0 bg-surface-container">
<FastImage  alt="delivery map" className="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="Stylized top-down urban map with a vibrant orange delivery route line connecting a restaurant icon to a house icon" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Mcg7FqztcblfaFJf8sHZD3MxrL5qyZk0GI75UWXiahymaMaKCxl6hpHu-yIgbUzveD1aaYzHIwEY4Bps7gD0dg3b8Nhfxs3IfUBHYSATFtUB9vdnx-kDuTYmovBGJunYxRfRk6kdSHbR4KUIEVHTIeFCks9owkq4POqgpTyBe6lFBbRjZVFATU3TOiQ1d8lD_Ro6xb1M5UyMmPc2cCiQkcKNVNVnOCG-560Bo8ACPZCqqtVOaSmfrTKNAt2Cb4km3_NeBWTvQLI" />
</div>

<div className="absolute top-6 left-6 flex flex-col gap-3">
<div className="glass-panel px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
<div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
<span className="font-bold text-on-surface">Live Location</span>
</div>
</div>

<div className="absolute bottom-1/3 right-1/4">
<div className="relative">
<div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping"></div>
<div className="relative bg-primary text-white p-3 rounded-full shadow-xl">
<span className="material-symbols-outlined">electric_moped</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-6 rounded-lg flex flex-wrap items-center justify-between gap-6 shadow-[0_48px_48px_rgba(78,33,32,0.04)]">
<div className="flex items-center gap-5">
<div className="relative">
<FastImage  alt="driver" className="w-20 h-20 rounded-full object-cover border-4 border-surface-container-high" data-alt="Portrait of a friendly delivery person wearing a professional uniform with a warm smile, soft natural outdoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqSf9vxUr89exjAde5jOaoGR_xG7EzM1tqzp8KgqbUqLTvEO13o7H5fSgI1_MZi3XRsvW5fGK6jKWr92AMS_gcwVJGqU0j8OH46WsSyiLXsXLPTkmVH6pk1lFKp0egWwOiGWOHzY3hXlbvm_dac-Sc5Q2n2dYlVMidFZPN3QSBd5A6PswgZ_DgQ1XQpAHzH6_UUSkKhuc9azm_oCdKPZV_21DZILpRtG4rrXfPprpA2EgZ7dK8yQJwq72FcpNKlKe3mcFoGrRyS2Q" />
<div className="absolute -bottom-1 -right-1 bg-secondary text-white text-[10px] px-2 py-1 rounded-full font-bold">
                                4.9 ★
                            </div>
</div>
<div>
<h3 className="text-xl font-bold text-on-surface">Alessandro V.</h3>
<p className="text-on-surface-variant">Your Delivery Partner</p>
<div className="flex gap-1 mt-2">
<span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
<span className="text-xs font-medium text-secondary">Eco-friendly delivery</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-colors">
                            Message
                        </button>
<button className="bg-gradient-to-br from-primary to-primary-container text-white p-4 rounded-full shadow-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined">call</span>
</button>
</div>
</section>
</div>

<aside className="space-y-8">
<div className="bg-surface-container-low p-8 rounded-lg sticky top-32">
<h3 className="text-2xl font-bold mb-8 text-on-surface">Order Summary</h3>
<div className="space-y-6">

<div className="flex justify-between items-start">
<div className="flex gap-4">
<span className="font-bold text-primary">1x</span>
<div>
<p className="font-bold text-on-surface">Classic Butter Chicken</p>
<p className="text-sm text-on-surface-variant italic">Extra spice, Garlic Naan</p>
</div>
</div>
<span className="font-bold text-on-surface">$24.00</span>
</div>
<div className="flex justify-between items-start">
<div className="flex gap-4">
<span className="font-bold text-primary">2x</span>
<div>
<p className="font-bold text-on-surface">Vegetable Samosas</p>
<p className="text-sm text-on-surface-variant italic">Mint chutney</p>
</div>
</div>
<span className="font-bold text-on-surface">$12.00</span>
</div>
<div className="flex justify-between items-start border-t border-dashed border-outline-variant/30 pt-6">
<div className="flex gap-4">
<span className="font-bold text-primary">1x</span>
<div>
<p className="font-bold text-on-surface">Mango Lassi</p>
</div>
</div>
<span className="font-bold text-on-surface">$6.50</span>
</div>

<div className="pt-8 space-y-4">
<div className="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span>$42.50</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Delivery Fee</span>
<span className="text-secondary font-bold">FREE</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Service Fee</span>
<span>$2.15</span>
</div>
<div className="flex justify-between items-center pt-6 border-t border-outline-variant/30">
<span className="text-xl font-bold text-on-surface">Total</span>
<span className="text-3xl font-black text-primary">$44.65</span>
</div>
</div>

<div className="mt-8 p-4 bg-surface-container-highest/50 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
<span className="text-sm font-bold text-on-surface">•••• 8829</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Apple Pay</span>
</div>
</div>
</div>
</aside>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-2 bg-[#fff4f3]/80 dark:bg-[#1a0f0e]/80 backdrop-blur-xl rounded-t-[2rem] shadow-[0_-8px_24px_rgba(78,33,32,0.04)] z-50">
<a className="flex flex-col items-center justify-center text-[#4e2120] dark:text-[#ffedeb] p-3 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">explore</span>
<span className="font-['Be_Vietnam_Pro'] text-[10px] font-medium">Discover</span>
</a>
<a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#a13900] to-[#ff793e] text-white rounded-full p-3 tap-highlight-none animate-pulse-subtle" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
<span className="font-['Be_Vietnam_Pro'] text-[10px] font-medium">Orders</span>
</a>
<a className="flex flex-col items-center justify-center text-[#4e2120] dark:text-[#ffedeb] p-3 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">favorite</span>
<span className="font-['Be_Vietnam_Pro'] text-[10px] font-medium">Favorites</span>
</a>
<a className="flex flex-col items-center justify-center text-[#4e2120] dark:text-[#ffedeb] p-3 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-['Be_Vietnam_Pro'] text-[10px] font-medium">Profile</span>
</a>
</nav>

      <Footer />
    </div>
  );
}
