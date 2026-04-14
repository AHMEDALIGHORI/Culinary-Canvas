
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function RestaurantDetail() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-20">

<section className="relative w-full h-[614px] overflow-hidden">
<div className="absolute inset-0">
<FastImage  className="w-full h-full object-cover" data-alt="dramatic close-up of a stacked gourmet burger with melting cheese, crispy onions, and fresh greens on a toasted brioche bun, warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgThAtbb7WSw9B_FcsXSF6IIUmr4FV4eQCFz4cD3jgNOII20fLQG5ZAonWB_9DcmJVZG9-sx-dCPeJ1CFWVZpq7nUZ7ksgpv5DTVXQiBe1jufJbJt8brXeUdjRcYHZ0BftH3LNSLS9Ksd6sLj28jRtm5Xjbtpt3jZyOdvgtNQTl8e3ad7pdxd0-d1O59oDgVhvAtEIf0-om737OvZ0ViqaAO3AFGGwk5AHY17hBHJGtJU3bAErTdcBilnDCmxZu1XNyFoa2WD1IVk" />
<div className="absolute inset-0 bg-gradient-to-t from-[#4e2120]/80 via-transparent to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
<div className="flex flex-col gap-2 md:gap-4">
<div className="flex gap-2">
<span className="bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Premium Partner</span>
</div>
<h1 className="gsap-hero text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tight leading-tight">Gourmet Burger Kitchen</h1>
<div className="flex items-center gap-6 text-white/90">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-lg">4.8</span>
<span className="text-sm text-white/70">(2k+ reviews)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">schedule</span>
<span className="font-medium">25-35 min</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">delivery_dining</span>
<span className="font-medium">Free Delivery</span>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-12">

<div className="flex-1 space-y-16">

<div className="sticky top-20 z-40 bg-surface/90 backdrop-blur-xl py-4 flex gap-8 overflow-x-auto no-scrollbar">
<a className="whitespace-nowrap font-headline font-bold text-primary border-b-2 border-primary pb-2" href="#starters">Starters</a>
<a className="whitespace-nowrap font-headline font-medium text-on-surface-variant hover:text-primary transition-all" href="#main-course">Main Course</a>
<a className="whitespace-nowrap font-headline font-medium text-on-surface-variant hover:text-primary transition-all" href="#drinks">Drinks</a>
<a className="whitespace-nowrap font-headline font-medium text-on-surface-variant hover:text-primary transition-all" href="#desserts">Desserts</a>
</div>

<section id="starters">
<div className="mb-8">
<h2 className="text-3xl font-headline font-extrabold text-on-surface">Starters</h2>
<p className="text-on-surface-variant mt-2">Perfect beginnings for your burger journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-surface-container-lowest p-4 rounded-lg flex gap-4 hover:shadow-[0_4px_48px_rgba(78,33,32,0.04)] transition-all group">
<div className="w-32 h-32 rounded-DEFAULT overflow-hidden flex-shrink-0">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" data-alt="crispy seasoned potato wedges served in a rustic ceramic bowl with a side of creamy garlic aioli dip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8rjFEK1wp7IlasAGm2-oikgKBruWfhHTOYL6P5QiXmnltf71hrT4doBWyZk1qwP-a3YXAeerOpWBvZ3gSZ_-P3mMIfcFEI1ef1EqLOGnVBRQ9NGg6IcN3oCn2CTipe7FIpWbEFR8FVGa15_KTrOTWHfcoNSqanymDFZVZrjT3TswRVAfOCEk5v1M2dsZKPds8Im3llQ48Tahh7RTcDm8FMDspFFTdWW5t9DlY34cW4gxA-FTL-9v04FL4t4ThlLecnthD_IMEKGQ" />
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">Truffle Wedges</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mt-1">Hand-cut potato wedges tossed in truffle oil and parmesan.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-secondary font-bold text-lg">$8.50</span>
<button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-lg flex gap-4 hover:shadow-[0_4px_48px_rgba(78,33,32,0.04)] transition-all group">
<div className="w-32 h-32 rounded-DEFAULT overflow-hidden flex-shrink-0">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" data-alt="crispy golden fried chicken wings glazed with spicy honey buffalo sauce and garnished with sesame seeds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPvq8k4m8fHnqTsRhLJ8OfCGT1cOD7Gca08NBWdkYfxxsYbyI_UlQw8mLfP59L7mDesG3Z-KBy35jQAEAIs-5wubaWWDJqRnTerjarC4zUVp17tXoDN0BsEzKjnmeS_tQwyK_5wnaB6fFMrJ4w8buZStwcBZgevHqb19-Ja_1OjfCpVjk0dpY4gN_KpYOO7521hb6HjsT5qU03_MAo_dHX5Lwm84E8dpk-iRsQYPvkOy9v0negJRsm1m-Mfq3l5UkSHQfPGsp81Tg" />
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">Spicy Buffalo Wings</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mt-1">6 piece wings served with celery sticks and blue cheese dip.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-secondary font-bold text-lg">$12.00</span>
<button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section id="main-course">
<div className="mb-8">
<h2 className="text-3xl font-headline font-extrabold text-on-surface">Main Course</h2>
<p className="text-on-surface-variant mt-2">The stars of the show, crafted with premium Wagyu.</p>
</div>
<div className="grid grid-cols-1 gap-8">

<div className="bg-surface-container-low rounded-lg overflow-hidden flex flex-col md:flex-row group border border-transparent hover:border-primary/20 transition-all">
<div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" data-alt="huge juicy wagyu beef burger with aged cheddar, caramelized onions, and house-made pickle on a shiny bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQl2JgzqAIKZJfoMAlOgjVYygw4pdkjRh9rVKujCipwV4ccp-eBE2-1CLzgBVOUXeFa5bUmShaX3qd3B16tjKHeJ-eKsE7CFIFBG4b07Z07HtdoSWedDkXK2qR5_jxTtwa_IwzXAiXrrCUdpduItZFwkknMJIP3djyx9_uMDCNIYSloRy6QtDOdN5gE0AgwqIoJmoGmEtazwa_btIcGMtfqQaBZDtYorePnTO00to_gbew092jpe5R_tei2-Y_67YKsCeFxtG3_t4" />
</div>
<div className="p-8 md:w-1/2 flex flex-col justify-center gap-4">
<div className="flex justify-between items-start">
<div>
<span className="text-primary font-bold text-xs tracking-widest uppercase mb-1 block">Chef's Signature</span>
<h3 className="text-2xl font-headline font-extrabold text-on-surface">The Ultimate Wagyu</h3>
</div>
<span className="text-secondary font-bold text-2xl">$24.00</span>
</div>
<p className="text-on-surface-variant text-base leading-relaxed">200g Wagyu beef patty, double aged cheddar, maple bacon, truffle mayo, caramelized onions, and house-made brioche bun.</p>
<div className="flex items-center gap-4 mt-4">
<button className="flex-1 px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold active:scale-95 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add_shopping_cart</span>
                                        Add to Cart
                                    </button>
<button className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-surface-container-lowest p-4 rounded-lg flex gap-4 hover:shadow-[0_4px_48px_rgba(78,33,32,0.04)] transition-all group">
<div className="w-32 h-32 rounded-DEFAULT overflow-hidden flex-shrink-0">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" data-alt="classic cheeseburger with fresh lettuce, tomato, and red onion slices on a seeded bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVOVx_VDJs6Y0Sh2LxQrQ2arUluU6DncP_EaQN-mt3GsA8xF8_iYNMpb2mafI1fZbT3VDZROxffVPJ23BGIdU6IULJHqoxe1SHTbj0ulpXMsfLyRa1l7j2XxTx4P0GXmMduNSonKjre2NYMpv8OFsNnXkkfRZNblodtPjb9yXXf_IYbTdifu-JBmopTHaLuShxclIwnJFb_rxVNxYZ5C24xIcIYCskMI-eTDwYx-Sdo16EJNSg1Ben5c6doMvPonIJD0alrpWXVJw" />
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">Classic Cheeseburger</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mt-1">Angus beef, American cheese, crisp lettuce, tomato, GBK sauce.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-secondary font-bold text-lg">$16.50</span>
<button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-lg flex gap-4 hover:shadow-[0_4px_48px_rgba(78,33,32,0.04)] transition-all group">
<div className="w-32 h-32 rounded-DEFAULT overflow-hidden flex-shrink-0">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" data-alt="gourmet veggie burger featuring a grilled halloumi slice and roasted portobello mushroom with pesto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZUve7ve1TGcPMUdnrAfREdMs4CjHkpFv3znrJEQoAm1kxBoN8y70cIt0XQPsWcP7aWadTEL5XVr1gDawGxmDu4JKk-8hUTPhtYvO5FyWsUqMJd6SSV95DV5xSWtUfhCbCFt4oM40m1tzjThETNMUDWIGZPZ0ey3xgViFduDlZK56xm-w3RXQUiTMIfq2r3wa2Abi50Tii-x-4biejCiJfLq08HcPsHsVstM97k25frFeP5jxmIxJnqD2yoGanntFAcJc30Ekak9A" />
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">The Halloumi Stack</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mt-1">Grilled halloumi, roasted red pepper, pesto, wild arugula.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-secondary font-bold text-lg">$15.00</span>
<button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="drinks">
<div className="mb-8">
<h2 className="text-3xl font-headline font-extrabold text-on-surface">Drinks</h2>
<p className="text-on-surface-variant mt-2">Craft sodas and house-made milkshakes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-container-lowest p-4 rounded-lg flex gap-4 group">
<div className="w-32 h-32 rounded-DEFAULT overflow-hidden flex-shrink-0">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" data-alt="a tall thick chocolate milkshake topped with whipped cream and chocolate shavings in a vintage glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4lUektn3vz-C0tE040olkt78-xICsYKiTQg8uUw4CP8pPBCIyRgsSkGgrkN2L_sdTFfZmcSU_5SpFPhK3BszQtMqSRrjXoyJJMvqvHgoqp9GwmuxCcK0XjECUyXlaJvTgy7itQVEfqFS0RHJ60CGLlj5P7Kx_wMZr_HOZAtO_6TQCKJaSqy-QPc5jdrxIpewhWuZ9lLdUOEYeTOC3EA-giSPOzAd7Rzsr7SoCXrRuXxcVhN4dJUvmf0QJogISDjLSc763tqU6poI" />
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">Bourbon Vanilla Shake</h3>
<p className="text-sm text-on-surface-variant mt-1">Real vanilla bean blended with organic milk.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-secondary font-bold text-lg">$7.00</span>
<button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-all">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded-lg flex gap-4 group">
<div className="w-32 h-32 rounded-DEFAULT overflow-hidden flex-shrink-0">
<FastImage  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" data-alt="refreshing ice-cold craft ginger beer in a frosted glass with a fresh lime wedge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0tELzyHTFPAFxInMDa53C4CBL3mKwQj_85RREWbPpteILPd3y4PFXMZ3iEBXI89rRrVhTHDCy1zuNCwLhQwoajNKTRMeTnreqxaSE_LhcNSjwp6r6uRenpv_13SoKCKVe1UFmVT-eG2srv4jxD8Z4CPywx3HqGMMRoT9bjwQTNrNibc6HfMHyymK1B6leHDaqILcismltlS1JeHWLt7iDvhxcXohJ_ZO7TL7yrI6f7-O9a5lu8knnKKiLvcR82UcwX1PL0kvbvU4" />
</div>
<div className="flex flex-col justify-between flex-1">
<div>
<h3 className="text-lg font-headline font-bold text-on-surface">Craft Ginger Beer</h3>
<p className="text-sm text-on-surface-variant mt-1">Locally sourced, naturally fermented.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-secondary font-bold text-lg">$5.50</span>
<button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-all">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

<aside className="w-full lg:w-96">
<div className="sticky top-32 bg-surface-container-low rounded-lg p-6 shadow-[0_4px_48px_rgba(78,33,32,0.04)] flex flex-col gap-6">
<div className="flex justify-between items-center">
<h2 className="text-xl font-headline font-extrabold text-on-surface">Your Order</h2>
<span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold">2 Items</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center gap-4">
<div className="flex items-center gap-3">
<span className="text-primary font-bold">1×</span>
<span className="text-on-surface font-medium">The Ultimate Wagyu</span>
</div>
<span className="text-on-surface font-bold">$24.00</span>
</div>
<div className="flex justify-between items-center gap-4">
<div className="flex items-center gap-3">
<span className="text-primary font-bold">1×</span>
<span className="text-on-surface font-medium">Truffle Wedges</span>
</div>
<span className="text-on-surface font-bold">$8.50</span>
</div>
</div>
<div className="space-y-2 pt-6 border-t border-outline-variant/30">
<div className="flex justify-between text-on-surface-variant text-sm">
<span>Subtotal</span>
<span>$32.50</span>
</div>
<div className="flex justify-between text-on-surface-variant text-sm">
<span>Delivery Fee</span>
<span className="text-secondary font-bold">FREE</span>
</div>
<div className="flex justify-between text-on-surface text-xl font-headline font-extrabold pt-2">
<span>Total</span>
<span>$32.50</span>
</div>
</div>
<button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold text-lg active:scale-95 transition-all shadow-xl shadow-primary/20">
                        Proceed to Checkout
                    </button>
<div className="flex items-center gap-2 justify-center text-on-surface-variant text-xs">
<span className="material-symbols-outlined text-sm">verified_user</span>
                        Secure payment processing
                    </div>
</div>
</aside>
</div>
</main>


      <Footer />
    </div>
  );
}
