
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function Search() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-8 flex gap-12">

<aside className="hidden lg:block w-72 shrink-0">
<div className="sticky top-28 space-y-10">
<div>
<h3 className="text-lg font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">filter_list</span>
                        Refine Search
                    </h3>

<div className="mb-8">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 block mb-4">Cuisine</span>
<div className="space-y-3">
<label className="flex items-center justify-between group cursor-pointer">
<span className="flex items-center gap-3">
<input  checked="" className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary/20" type="checkbox"/>
<span className="font-medium text-primary">Japanese</span>
</span>
<span className="text-xs bg-surface-container-low px-2 py-1 rounded-full text-on-surface-variant">24</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<span className="flex items-center gap-3">
<input  className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary/20" type="checkbox"/>
<span className="font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Italian</span>
</span>
<span className="text-xs bg-surface-container-low px-2 py-1 rounded-full text-on-surface-variant">18</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<span className="flex items-center gap-3">
<input  className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary/20" type="checkbox"/>
<span className="font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Chinese</span>
</span>
<span className="text-xs bg-surface-container-low px-2 py-1 rounded-full text-on-surface-variant">12</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<span className="flex items-center gap-3">
<input  className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary/20" type="checkbox"/>
<span className="font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Thai</span>
</span>
<span className="text-xs bg-surface-container-low px-2 py-1 rounded-full text-on-surface-variant">9</span>
</label>
</div>
</div>

<div className="mb-8">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 block mb-4">Price Range</span>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-full bg-surface-container-highest font-bold text-on-surface active:scale-95 transition-all">$</button>
<button className="flex-1 py-2 rounded-full bg-primary text-on-primary font-bold active:scale-95 transition-all">$$</button>
<button className="flex-1 py-2 rounded-full bg-surface-container-highest font-bold text-on-surface active:scale-95 transition-all">$$$</button>
<button className="flex-1 py-2 rounded-full bg-surface-container-highest font-bold text-on-surface active:scale-95 transition-all">$$$$</button>
</div>
</div>

<div className="mb-8">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 block mb-4">Rating</span>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input  className="w-5 h-5 border-none bg-surface-container-high text-primary focus:ring-primary/20" name="rating" type="radio"/>
<div className="flex items-center gap-1 text-on-surface-variant group-hover:text-on-surface">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-medium">4.5 &amp; Above</span>
</div>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input  checked="" className="w-5 h-5 border-none bg-surface-container-high text-primary focus:ring-primary/20" name="rating" type="radio"/>
<div className="flex items-center gap-1 text-on-surface font-semibold">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-medium">4.0 &amp; Above</span>
</div>
</label>
</div>
</div>

<div className="pt-6">
<div className="bg-gradient-to-br from-primary-container to-primary p-6 rounded-lg text-on-primary relative overflow-hidden group">
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 group-hover:scale-110 transition-transform">percent</span>
<p className="font-headline font-bold text-lg leading-tight mb-2">Unlock Chef Deals</p>
<p className="text-xs opacity-90 mb-4">Get up to 40% off on your first sushi order today.</p>
<button className="bg-on-primary text-primary px-4 py-2 rounded-full text-xs font-bold w-full active:scale-95 transition-all">View Offers</button>
</div>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
<span className="material-symbols-outlined text-base">location_on</span>
<span>Delivering to Downtown, NY</span>
</div>
<h1 className="gsap-hero text-4xl font-extrabold tracking-tight">Best <span className="text-primary italic">Sushi</span> in your area</h1>
<p className="text-on-surface-variant mt-2">Showing 24 top-rated restaurants matching your search.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-on-surface-variant">Sort by:</span>
<button className="bg-surface-container-low px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                        Relevance
                        <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

<article className="md:col-span-2 group relative bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_24px_48px_rgba(78,33,32,0.08)]">
<div className="flex flex-col md:flex-row h-full">
<div className="relative md:w-3/5 h-64 md:h-auto overflow-hidden">
<FastImage  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Premium close-up of a diverse sushi platter with fresh salmon, tuna, and avocado rolls on a dark slate background, warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOwlt8Lfw4FWb1eHKa_tfKgh0jdRqz45JIHVPf87l0_OmPVgfAUppcikOrhep281z_Dxh8hsgRZ5b5B3ckJu9eTScxPgL2pdnbbd0n9ZkWnGELt8mkdgRjQUa88sB3JslsGncE4ErXszU2sPwW8fKU4UQMbODxIOTbqNyzhIBdEyNsCncfBdeXLEXUrBMcq8ZUvW9o9kzRQ-bJ4BkX8ydIyL8gR8r5_fL3a5BPXcyfflu9aMg9h7xtDbdNOn18GUfI3f5VD3UyWWM" />
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-opacity-90">Must Try</span>
<span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold">Featured</span>
</div>
</div>
<div className="p-8 md:w-2/5 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl font-bold">Orizuru Sushi Lab</h2>
<div className="flex items-center gap-1 text-secondary font-bold">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span>4.9</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mb-4">Fusion • Omakase • Sustainable Sourcing</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs bg-surface-container-low px-3 py-1 rounded-full font-medium italic">"The dragon roll is legendary"</span>
</div>
</div>
<div className="flex items-center justify-between mt-4">
<div className="text-sm font-medium">
<span className="text-secondary font-bold">$15.00</span> Delivery
                                    <span className="mx-2 text-outline-variant">•</span> 25-35 min
                                </div>
<button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_12px_24px_rgba(78,33,32,0.06)] group">
<div className="relative h-48 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Artistic overhead shot of spicy tuna rolls decorated with thin slices of jalapeno and microgreens on a white ceramic plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBdbjVFb9Qd7NYhn40jVpCCal0zD_HtByjZLnqmHhfLuR4EYAubSKxXeeGYlJXZQXWN6S-bS2lGARJBKId2Q5SfVsJesCBKloAkyL-YD4NSUUdRrC8G-r1GyYVhUfS1JD23lSA6-9PuIU4tXCan9cr8Sfec09nFeYLOmjNiYnintL7RyiPvHRCIlXzzp9ggkUCnE_NcZG4Vdra9yzblUWZTkh-4pdEErtEgxgduEu_WrXT3o4JJuE7KzAZeg_M3_XbpN89a9jFv0k" />
<div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-on-surface">20-30 min</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h3 className="font-bold text-lg truncate">Sakura Zen Garden</h3>
<div className="flex items-center gap-1 text-secondary font-bold text-sm">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span>4.7</span>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-4">Traditional Japanese • $$</p>
<div className="flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-medium">Free delivery over $35</span>
<button className="text-primary text-sm font-bold flex items-center gap-1">
                                View Menu <span className="material-symbols-outlined text-xs">chevron_right</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_12px_24px_rgba(78,33,32,0.06)] group">
<div className="relative h-48 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Interior of a modern high-end sushi bar with ambient orange lighting and a professional chef preparing nigiri" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWXLpQASKpe-JMSBpvjRNWJh-J1gJ_2jDH7ORZ2neGLayAb63xNW6jFhKzqj4ejIVp_i-XbwpOTCdG47HAVhYhhExeY-q5E8ZjgyfsTY5hMM0VTwXOOdFQjIHrkiv3tClmoleadm6KjqAscMiEn6ynz1pUOM4JrEXUYDPeQ3ZF2_YtPfJdQxr8N5CpNgf90ABz_yrKkSsf56kZuFVPmP23kWp1NBgAS5_KC5rZ2Jm-9p08xhHHNCQz_XwuQRiKWedANo-b6Kzou8" />
<div className="absolute top-3 right-3 bg-error text-on-error px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Fastest</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h3 className="font-bold text-lg truncate">Neon Tokyo Rolls</h3>
<div className="flex items-center gap-1 text-secondary font-bold text-sm">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span>4.2</span>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-4">Modern Rolls • $</p>
<div className="flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-medium">$2.99 Delivery Fee</span>
<button className="text-primary text-sm font-bold flex items-center gap-1">
                                View Menu <span className="material-symbols-outlined text-xs">chevron_right</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_12px_24px_rgba(78,33,32,0.06)] group">
<div className="relative h-48 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of steaming pork ramen bowl with a soft boiled egg, bamboo shoots, and green onions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Pts4RWUjPH-GthLNHpwWDI4wdNYYmQLbflZwLxMA8EXHC_jI61UK9dL9d_w_LMZIJ_8PGM4UJFe5J0rTLrXfuQ7aU0_yaX-h8Wgm9_e9FxzscP1tXpXG2iRO0mSOK4_tjdDhnOlsZomLuBp5qctwEZw3ahHD_7e9M5LvUobE55v09oGItme9Rckc_EcEBDN3zmr3kqoFKCSOHjsJ-0ls1l59ouVlwKzb0jN1NTZBDvB9PeHMi6vwvz6qS_DZgPuFV9tHiOyH6Lc" />
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h3 className="font-bold text-lg truncate">Kobe Ramen &amp; Sushi</h3>
<div className="flex items-center gap-1 text-secondary font-bold text-sm">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span>4.5</span>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-4">Ramen • Sushi • Japanese • $$</p>
<div className="flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-medium">15-25 min</span>
<button className="text-primary text-sm font-bold flex items-center gap-1">
                                View Menu <span className="material-symbols-outlined text-xs">chevron_right</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_12px_24px_rgba(78,33,32,0.06)] group">
<div className="relative h-48 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of fresh salmon sashimi pieces arranged neatly with wasabi and ginger on the side" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFYig96tuTpNeQTvS2_OR05-jMhKgy4ph6xkPlskeZGMLvaR5uvH9c0oO_NacxBPsqOHxmJ8m3pGjHZ1ignV_4RQtQ6U18K2Dl1lZ9-QoXGAWwEOjy8lwO0dr5ZckmVbivUoyNrJL03LpcYBgUP8Y41wnHPDTgjAmyBymlI0-pzoaYd4maklMhT7dWoPd2EwSIwcyEK-KDgUTOe4qJvdDi9_pbwVLo9OiKM6P8mHAu4rwCORnDyK7nGV7Yt1KIJFoLYbGXVnR5k6M" />
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h3 className="font-bold text-lg truncate">Ocean Fresh Nigiri</h3>
<div className="flex items-center gap-1 text-secondary font-bold text-sm">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span>4.8</span>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-4">Sushi • Seafood • $$$</p>
<div className="flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-medium">35-45 min</span>
<button className="text-primary text-sm font-bold flex items-center gap-1">
                                View Menu <span className="material-symbols-outlined text-xs">chevron_right</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_12px_24px_rgba(78,33,32,0.06)] group">
<div className="relative h-48 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A large party platter of assorted sushi rolls, nigiri, and maki on a wooden boat display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM-cffTznfa5Y5RsOxarRnIt8oeqO4YjGGKwKhjDyjv9tgqyWJ9cx6EZm_GCYkdpW5oRRG7uFDITV94nSVTqdXKK1pOIdDhnjYT94OifQcAvMpkCv32WyOS5DtR6oV845pPFAFQUv1gJx89YBpHt2QmO_p0xZZiEH79DNm7Xy4F2-1bIvNmzBnNUnK7dQFsUWtmDGAJs1qahqr7m6jTgSONhN2ggVyRC9iRqbYNS4MIpExGJFt8gNV5SQA_Ihr0ak2rShfldQsTTg" />
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h3 className="font-bold text-lg truncate">The Sushi Boat</h3>
<div className="flex items-center gap-1 text-secondary font-bold text-sm">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span>4.1</span>
</div>
</div>
<p className="text-sm text-on-surface-variant mb-4">Japanese • Big Portions • $$</p>
<div className="flex items-center justify-between">
<span className="text-xs text-on-surface-variant font-medium">30-40 min</span>
<button className="text-primary text-sm font-bold flex items-center gap-1">
                                View Menu <span className="material-symbols-outlined text-xs">chevron_right</span>
</button>
</div>
</div>
</article>
</div>

<div className="mt-16 flex justify-center">
<button className="bg-surface-container-high text-on-surface px-12 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-all flex items-center gap-3">
                    Load More Flavors
                    <span className="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>
</main>


      <Footer />
    </div>
  );
}
