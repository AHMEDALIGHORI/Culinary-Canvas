
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function Promotions() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8 max-w-screen-2xl mx-auto">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
<div className="lg:col-span-2 relative overflow-hidden rounded-lg bg-primary-container text-on-primary-container p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
<div className="absolute inset-0 z-0">
<FastImage  alt="" className="w-full h-full object-cover mix-blend-overlay opacity-30" data-alt="high-end editorial food photography of various artisan dishes on a warm textured table background with soft sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSUQX_F7sLgKNZESsKLbXGs3FKFTwBQ87yiqhBK9-7lu8ZDEWeVxe8uOuHde1L95mjZDwpn643Kw1xwPEl79PIES_gFZBjZvim6_eNjEpU5BKVokvwf-a7pOK-vEfFmX00UrnpmLXO2hOH4WlhUfp3k5eT4D9Ow3f_vKvf6GRSDAoMkAEbfNMG0LhsMXTtqRM5r9JAfZbH2f7uT-udErF375IDZ5YG21gBDCZvJGVa7v80qohHpNctSdlnm-Wnv01MzseOTwhP9WQ" />
</div>
<div className="relative z-10 space-y-6">
<span className="inline-block px-4 py-1 bg-on-primary-container text-primary-container rounded-full text-sm font-bold uppercase tracking-wider">Welcome Offer</span>
<h1 className="gsap-hero text-4xl md:text-6xl font-black leading-tight max-w-xl">20% off your first order</h1>
<p className="text-lg md:text-xl font-medium max-w-md opacity-90">Start your culinary journey with a taste of excellence. Valid on all restaurants this week.</p>
<button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-transform">Claim Offer Now</button>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-8 flex flex-col justify-between border-2 border-primary/10">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-4xl" data-weight="fill">stars</span>
</div>
<span className="text-xs font-bold text-tertiary uppercase tracking-widest">Gold Member</span>
</div>
<h2 className="text-2xl font-bold mb-2">Epicurean Rewards</h2>
<p className="text-on-surface-variant text-sm mb-8">You're 250 points away from your next $10 credit.</p>
<div className="space-y-4">
<div className="flex justify-between text-sm font-bold">
<span>Points Progress</span>
<span>750 / 1000</span>
</div>
<div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-3/4 rounded-full"></div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-outline-variant/30">
<a className="flex items-center justify-between group" href="#">
<span className="font-bold text-primary">View Loyalty Benefits</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</section>

<section className="mb-16">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl font-black text-on-surface mb-2">New User Specials</h2>
<p className="text-on-surface-variant">Exclusive curated deals to get you started</p>
</div>
<button className="text-primary font-bold hover:underline">View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-surface-container-lowest rounded-lg p-4 shadow-[0_48px_48px_rgba(78,33,32,0.04)] hover:shadow-xl transition-all duration-300">
<div className="relative h-48 mb-4 rounded-md overflow-hidden">
<FastImage  alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="close-up of a fresh artisanal pizza with melting mozzarella and basil leaves on a rustic board" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpO4B_IFaMA0SlgoAzUYH5vze4nlJMeOpB4i2Dfz-2YLuPHfWrzk7JmOFLHbAlX9hTvOMqcEH2j8XBKbnIUlEOwfRJzr8L5opYlyR2nIN1sWedYoWsLcLg-WC0j659QMIP-AH8q3UzNIffTSZOuZ8PtMHPYtK_3TYhmPUgmKZU0Tt1KtgEwz9ay5fZ68qIZtzNdqV71O5ld2h-Kp6T9NmSWFRI6Sf55mDA0m-N5bXiZOX7Kc498TrCYznZ-e_DgeWNNLb09ysRpeM" />
<div className="absolute top-3 left-3 bg-secondary text-on-secondary text-xs font-bold px-3 py-1 rounded-full uppercase">BOGO</div>
</div>
<h3 className="text-lg font-bold mb-1">Artisan Pizzeria</h3>
<p className="text-sm text-on-surface-variant mb-4">Buy one signature pizza, get a classic margherita free.</p>
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">$18.00+</span>
<button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-lg p-4 shadow-[0_48px_48px_rgba(78,33,32,0.04)] hover:shadow-xl transition-all duration-300">
<div className="relative h-48 mb-4 rounded-md overflow-hidden">
<FastImage  alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="vibrant healthy grain bowl with avocado, edamame, and radish on a light marble surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoUlxT6etVFpPCN60FNA90P0NERGasQCtq5XhjRuSy9LZ67HmtYFZ8Bg3DV7X12UkU57KTau39EWBWI_jcAuuQFugb1TBm6dcsWUehyMiJcws28tviJ3yehy1fpW8zodTGJXUigvC8hBnpOfkwSxFIXGAq68BGpbFtMLVNBqazcUIMRxv48YqF0NbpSbdx90GLTS4ZmzqMPPMMlQMcpBD2rlR-J13BJOOKFNLtYtLUtWEKJ1iv3TYHX1DkWcIdtchnijy7Om5bFR4" />
<div className="absolute top-3 left-3 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase">50% OFF</div>
</div>
<h3 className="text-lg font-bold mb-1">The Green Kitchen</h3>
<p className="text-sm text-on-surface-variant mb-4">Half price on all seasonal salad bowls for new explorers.</p>
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">$9.50</span>
<button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-lg p-4 shadow-[0_48px_48px_rgba(78,33,32,0.04)] hover:shadow-xl transition-all duration-300">
<div className="relative h-48 mb-4 rounded-md overflow-hidden">
<FastImage  alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="luxury sushi platter with gold leaf accents on a black slate tray, dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCy45miMvhZs4ABM_erf6cpOxnKGA8FAoHuhiDKgFQIJc8c62wBJRNQQ92wf_MkMg0pRd203iDEXQBffNKakTtAmxahQcrO5JkxgqMRPG2oR18AmhX1yZKVkiTN-iDh3MSwtaezVXZtXfllt9apmuCct3mNThik5JTYbkjht96xVFIOxqmoq3uNusCca1_axZbr8R2qlonAEyWjmO3XRgpzRa2bc-1tzXdlE0jhJIIkgqPWFsppJSqpP7q0rods0EX0ZdV4KwDJU" />
<div className="absolute top-3 left-3 bg-tertiary text-on-tertiary text-xs font-bold px-3 py-1 rounded-full uppercase">FREE DELIVERY</div>
</div>
<h3 className="text-lg font-bold mb-1">Mizu Sushi House</h3>
<p className="text-sm text-on-surface-variant mb-4">No delivery fees on orders over $40 today only.</p>
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">$40.00+</span>
<button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-lg p-4 shadow-[0_48px_48px_rgba(78,33,32,0.04)] hover:shadow-xl transition-all duration-300">
<div className="relative h-48 mb-4 rounded-md overflow-hidden">
<FastImage  alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="elegant chocolate fondant with a molten center and fresh berries on a white designer plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBvfTZTxMN4HGo0D7pR4xfe7yg5emg9LNMEdch3MZhSKaQDGEmRDHk0osit5kYc7apizXVk840BclfjGqjOF_PEj4FYaCGrVAZpfD8p8NofSWCDWWkyMHSTPTS4CTPNWKGaic1d8Pu3PaPt_6ns7AIwRQC7IYQbrk3Dt9YHaa2hX9FZ0oeB3NsW9EXfipNQM-ex6wMIp_hxC_mc7FgPDaJBq-pY3xUJPI4lcHJyNgrrNe0OPzLyIHzl1h6-4eRYoPmO_Flyd0eEpA" />
<div className="absolute top-3 left-3 bg-primary-fixed-dim text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase">CHEF'S GIFT</div>
</div>
<h3 className="text-lg font-bold mb-1">Velvet Confections</h3>
<p className="text-sm text-on-surface-variant mb-4">Complimentary truffle with any main dessert order.</p>
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">$12.00+</span>
<button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-3xl font-black text-on-surface mb-8">Nearby Deals</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-8 relative rounded-lg overflow-hidden group bg-surface-container shadow-inner">
<FastImage  alt="" className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700" data-alt="interior of a bustling gourmet restaurant with warm lighting and wooden accents, blurry people in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1vqpSFlUaprcZKywuOs4A7oOCZCVxjLnV9scmxbMDg625Z8BWARMyFDqaxZY8P5cDD1_cCpR-Woq2S12eD2v9JrtKNzNHisIjnhzbrN_gPgF_u1d0xmIQmyflGno9XMoDCVebZZI5jplLQNqWELkYYtDDRqB1oryif6Lac-oAAYrlrOoqQcq1YMqnTgyZ7f7YayHhbM8TfTf3VwG8x0RenO1tBC5viz7enFfcbMOcrLBYlw1Zx1jxpR6YrMYUxmkrYMG7uzhkL6c" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 text-white">
<span className="bg-secondary px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">LOCAL FAVORITE</span>
<h3 className="text-3xl md:text-5xl font-black mb-4">The Ember Grill</h3>
<p className="text-lg opacity-90 max-w-lg mb-8 font-light">Join us for "Smoky Sundays" - All grilled platters are 25% off when you dine-in or order for pickup.</p>
<button className="bg-white text-on-surface font-bold px-8 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">Book a Table</button>
</div>
</div>

<div className="md:col-span-4 bg-[#ffedeb] rounded-lg p-6 flex flex-col justify-between group">
<div className="space-y-4">
<div className="w-full h-40 rounded-md overflow-hidden">
<FastImage  alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="hot artisan coffee pouring into a ceramic cup with soft morning light and steam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnLkX8ObrS0LtxHw0-pRWa3A8CbDa15WaiTjKMdYrEt-naXaTPYdGDrdj3_fpkFVgsDZAJkugOkB7rf8SieF5OU2yAcloeQVwcAEn5ExBcAx5Wp1QVjgm-EHx25d_STOVmJJFZQcrNwaQUEjpz_J2bsxcbeb787poVOpmaiq9o21OIOIfk0j0hhZOJAblvkrFNh53VPqh2jw3fBL6a2LzqB4DNdXTpYzb4Jx86tc0BKOb6opKVLC4L5-RpDyb8OAozksw3mYht_U" />
</div>
<h4 className="text-xl font-bold">Morning Perk</h4>
<p className="text-on-surface-variant text-sm">Buy 5 coffees, get the 6th free at any "Bean &amp; Brew" location near you.</p>
</div>
<div className="pt-6">
<span className="text-primary font-black text-2xl">FREE COFFEE</span>
</div>
</div>

<div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-lg p-6 flex flex-col justify-between group">
<div className="flex items-center space-x-3 mb-4">
<span className="material-symbols-outlined text-3xl">timer</span>
<span className="font-bold uppercase tracking-tighter text-sm">Flash Deal - Ends in 2h</span>
</div>
<h4 className="text-xl font-black mb-2">Street Food Festival</h4>
<p className="text-sm opacity-90 mb-4">Flat $5 off on all street food orders over $15. Limited to first 500 orders.</p>
<button className="w-full bg-on-tertiary-container text-tertiary-container py-3 rounded-full font-bold">Grab It Now</button>
</div>

<div className="md:col-span-8 bg-surface-container-highest rounded-lg p-8 flex items-center justify-between border-2 border-dashed border-primary/20">
<div className="flex-1">
<h4 className="text-2xl font-black text-primary mb-2">Invite your friends!</h4>
<p className="text-on-surface-variant">They get $10 off, and you get $10 off. It's a win-win dinner party.</p>
</div>
<div className="ml-6">
<div className="bg-white p-4 rounded-lg border border-outline-variant shadow-sm text-center">
<code className="text-xl font-black text-on-surface tracking-widest">SAVOR10</code>
<p className="text-[10px] uppercase font-bold text-on-surface-variant mt-2">Copy Code</p>
</div>
</div>
</div>
</div>
</section>
</main>


      <Footer />
    </div>
  );
}
