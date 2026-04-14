
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function Favorites() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto min-h-screen">
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="gsap-hero text-5xl font-extrabold tracking-tight text-on-surface mb-2">Curated Cravings</h1>
<p className="text-lg text-on-surface-variant max-w-2xl font-medium">Your personal editorial of the city's finest flavors and most cherished dining destinations.</p>
</div>
<div className="flex gap-2 p-1 bg-surface-container-low rounded-full w-fit">
<button className="px-6 py-2 bg-primary text-on-primary rounded-full font-semibold shadow-sm transition-all duration-200">Dishes</button>
<button className="px-6 py-2 hover:bg-surface-container-highest rounded-full font-semibold text-on-surface-variant transition-all duration-200">Restaurants</button>
</div>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group relative flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_48px_48px_rgba(78,33,32,0.08)]">
<div className="relative h-72 overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Gourmet wagyu beef burger with melting cheese, caramelized onions, and artisan bun, dramatic side lighting, vibrant food photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb7Fci0-3KHgTGvDvI4sMbsT2nl-L0c0OqtU9NR8QJCQwmZNU1RE8Qg7mB-u7XHwOw2K8c_JMUia9oz81vdmiqrDKJsvmEPlCAkI1DQfzeNC-Bil3g8K6A_lowlKaztqem6JkKY96XT-xfieoOfjwvDO50-sDgnhmPtuCgnUjJKm1vRQtppsY4mH1vc8EotZ0r_LPq9IacuqpphCGxWuin5rf1_MLvDdnZY__-DsGr38OKpZgZ6BGJXm-4DjJ3-9K9kpK9mMjOPIg" />
<div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-md text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Chef's Choice</div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-white transition-colors">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold leading-tight">The Heritage Wagyu Burger</h3>
<span className="text-secondary font-bold">$24.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 line-clamp-2 font-medium">Aged wagyu, truffle aioli, house-made brioche, and 12-hour caramelized shallots.</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-sm font-bold text-on-tertiary-container">4.9</span>
</div>
<span className="text-xs text-on-surface-variant font-medium">From Burger &amp; Barrel</span>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-gradient-to-r from-primary to-primary-container">
<span className="material-symbols-outlined text-xl" data-icon="shopping_basket">shopping_basket</span>
                        Order Again
                    </button>
</div>
</div>
<div className="group relative flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_48px_48px_rgba(78,33,32,0.08)] lg:mt-8">
<div className="relative h-72 overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Lush green harvest bowl with avocado, quinoa, roasted vegetables and poached egg, high-key bright clean lighting, fresh aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtahWDPKBuP_SG4AvLHHgAaneYNsYd-1iFK1nPNNRApnCjcQm_7-BucFGjdGhLTzrTvqLVJWdE6garqnzRTCRRdpcf76m6cKWT2ceEs7aNaP5uBUUuASwZDyLiD1_BxCXLfD1iqbSJbRt-tyBYq49pFQJF4mozz4MkR3x-_-xJO4tsiCZYHMAwKrk_Y-XiBXKepXv7_ccb3sNAWiD4dQcWZ4TGUrmCZAmm1NMMZyN9VX7oJM13RzbZGAcCoMdbWylgEq_Hf-e4IEo" />
<div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-md text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Health Conscious</div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-white transition-colors">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold leading-tight">Sun-Kissed Harvest Bowl</h3>
<span className="text-secondary font-bold">$18.50</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 line-clamp-2 font-medium">Seasonal greens, citrus-cured salmon, wild quinoa, and a tahini-lemon drizzle.</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-sm font-bold text-on-tertiary-container">4.7</span>
</div>
<span className="text-xs text-on-surface-variant font-medium">From Vitality Kitchen</span>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-gradient-to-r from-primary to-primary-container">
<span className="material-symbols-outlined text-xl" data-icon="shopping_basket">shopping_basket</span>
                        Order Again
                    </button>
</div>
</div>
<div className="group relative flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_48px_48px_rgba(78,33,32,0.08)]">
<div className="relative h-72 overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Artisanal sourdough pizza with fresh basil, buffalo mozzarella, and tomato sauce, rustic wood oven background, warm golden lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfTnQuUKG8H4alperiV-tBqwnlO3eDSxkF5QjETHGY3XZ0iAtbmxykRnLp-X2fHSQd4wNalAHMiMFENlQqiRhuzf7ae19YiNBIcfbD1DCm_-ABgFbZcjj3MzLPaajbfpLbPbPx4noEl2qoyXLZwPbHcgTVi8M5KIp0lLNXkU2j2wmaifznADr4chLVRW40xLlO5sbA8bCxqJ4E0kz0mj8cELR_4bIcwjivF9JE-ZnWGENvTIjlqZr2aYIpqSs81J1SC2QYX_F8_28" />
<div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Top Rated</div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-white transition-colors">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold leading-tight">Rustic Margherita Napoletana</h3>
<span className="text-secondary font-bold">$19.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 line-clamp-2 font-medium">Double-fermented dough, San Marzano tomatoes, and fresh house-pulled mozzarella.</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-sm font-bold text-on-tertiary-container">5.0</span>
</div>
<span className="text-xs text-on-surface-variant font-medium">From Flora &amp; Flame</span>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-gradient-to-r from-primary to-primary-container">
<span className="material-symbols-outlined text-xl" data-icon="shopping_basket">shopping_basket</span>
                        Order Again
                    </button>
</div>
</div>
<div className="group relative flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_48px_48px_rgba(78,33,32,0.08)] lg:-mt-8">
<div className="relative h-72 overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Succulent smoked brisket on a wooden tray with pickles and coleslaw, dark moody lighting, rustic textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR9oZTjC6GRu56w9EMQAhaS6rtjTy6O0AcmOnrN_rYsw_afiK_03aIDLcg5PyhAgoedwotDM5Zkm2LGidUvrJcAJHAwuh8WVzqagUNtapk-2JshhbU3beBN-4FMcYFnutVkVtuuomvKBNRtQOUb7isZRC2LmoZPz-FHIO2NLk4OcVT3y5VP_0KbQpFTz93co-5EMn8-LzZ3gXB4bQIy5k4mpSfuKXAQ_3tQt5Dk1aPeK0flnwaxq5QmqrbAvFb4c8LjogL4g3-wNA" />
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-white transition-colors">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold leading-tight">Oak-Smoked Central Brisket</h3>
<span className="text-secondary font-bold">$32.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 line-clamp-2 font-medium">16-hour slow-smoked Prime brisket, served with espresso BBQ sauce and pickled okra.</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-sm font-bold text-on-tertiary-container">4.8</span>
</div>
<span className="text-xs text-on-surface-variant font-medium">From Smoke &amp; Soul</span>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-gradient-to-r from-primary to-primary-container">
<span className="material-symbols-outlined text-xl" data-icon="shopping_basket">shopping_basket</span>
                        Order Again
                    </button>
</div>
</div>
<div className="group relative flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_48px_48px_rgba(78,33,32,0.08)]">
<div className="relative h-72 overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Elegant pan-seared scallops with pea puree and edible flowers, fine dining presentation, minimalist aesthetic, soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPOTEwCdQrSL6tfOsAACSIj8jl8Db9B_7wDk1lhRwaI2DIYp6muaN2JeoF_wYwRlTs2f2pPE1G4GOeHmVnU-zpiIsMnXOu6VHXauRUVgsOmCHtPOYrM3QIwqKIRRhOKaQ5OXNjdEvnI81fJ7xs1k0kicaUH49Fj7DxDNG_Kk4xdK9s1nRMyKZL6zN2FpA9AVFaiFjDuqESRHC5LcGcONEYCylFd0X66ydBC-m4D8QhpysPEyZao5RYxVRdK_37idXz5vlz3xcrcuA" />
<div className="absolute top-4 left-4 bg-tertiary/90 backdrop-blur-md text-on-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Premium</div>
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-white transition-colors">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold leading-tight">Diver Scallops &amp; Spring Pea</h3>
<span className="text-secondary font-bold">$28.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 line-clamp-2 font-medium">U10 scallops, minted pea velouté, crispy pancetta, and citrus pearls.</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-sm font-bold text-on-tertiary-container">4.9</span>
</div>
<span className="text-xs text-on-surface-variant font-medium">From The Glass House</span>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-gradient-to-r from-primary to-primary-container">
<span className="material-symbols-outlined text-xl" data-icon="shopping_basket">shopping_basket</span>
                        Order Again
                    </button>
</div>
</div>
<div className="group relative flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_48px_48px_rgba(78,33,32,0.08)] lg:mt-8">
<div className="relative h-72 overflow-hidden">
<FastImage  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Decadent chocolate lava cake with raspberry coulis and powdered sugar, dark rich food aesthetic, warm romantic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5T45p7YGYY7JxzvZ3muMFv1rPuDusooiWz5CG1a-p-963Cdw1MJZX1VEbwOX4GsUrSKUPVTqmTTqlNLU-P40JIKYbrT9OA74MOzJJGD6hCKWDAPYeLbcoAcs1mmY-BCuYyEC2ctBSs8Vhi0gxgUN0572mVfiGSl5VWHhdWwCnDz5n0g6FrXEOGqOqMtAqv40fwBudUe8SX-Y2h2LgOJ2thkOiaXQDj-TaLiWsYodTf4QVR_nQi9o8XP6abRFIQGBy1xvY0g2NQE" />
<button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-white transition-colors">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold leading-tight">Dark Chocolate Melting Heart</h3>
<span className="text-secondary font-bold">$14.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 line-clamp-2 font-medium">70% Valrhona chocolate, Tahitian vanilla bean gelato, and framboise reduction.</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-sm font-bold text-on-tertiary-container">4.6</span>
</div>
<span className="text-xs text-on-surface-variant font-medium">From Velvet &amp; Crumb</span>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-gradient-to-r from-primary to-primary-container">
<span className="material-symbols-outlined text-xl" data-icon="shopping_basket">shopping_basket</span>
                        Order Again
                    </button>
</div>
</div>
</section>
<section className="mt-24">
<h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-8">Beloved Establishments</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-lg transition-all duration-300 hover:bg-surface-container hover:shadow-sm">
<div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="Modern high-end restaurant interior with ambient lighting and sleek design, professional photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMf0OvG_lVS7DcLCbfn6BnVmVDITn24YvRDMEepTk0TJQ3n7RsjvMeMHqXWawT9Q1Orfo7YiaQsUWmRgYM36pCik8MPKNzGHYuOl5_UoVpd5LayJQ7yRIQE1DNy5-GVEyP6fO_DsMlh2yM-jT62dJB0BOsZYMSuBHmGlm5jFJI6u4ixxhw7HrwHyRT3nhUW6e0gq7eQImkvswiNJQ-hebOZRgCVh2y5fJkBj2JZIAD8QdT-iwywgr8W28hL0V2bKszmXC_l-E6B9Q" />
</div>
<div className="flex-grow">
<h4 className="text-xl font-bold mb-1">Burger &amp; Barrel</h4>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-semibold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Gourmet Burgers</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-xs font-bold text-on-surface">4.8 (1.2k+)</span>
</div>
</div>
<button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            View Menu <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-lg transition-all duration-300 hover:bg-surface-container hover:shadow-sm">
<div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="Luxury bistro exterior with warm light flowing through windows, evening atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQe24_xeddX20kn5i6BTnJaInsG5XuxmwAd8LrPHTiN6rfID_LQWpG8FaAko61WHkX1d_sRdQ6wqLfqqp4EBU7NcpBuCB_LnJEUDjkJkJnzSJm66mFZ9Vx0Mz_w-jWJl7RYRla8vxsCPndPjpw5tmkLA-yjsZY6Fe6BsXHNFKJgN6eoKc8bYNAXVxhfaI3cO6KTWWtjxoBsUuyq3aM8Rf6zmiwM-rntKMYKPpQcF-6pU-ftLGu5sK3JjlXRNIyXYd2h0iFhz1ITEk" />
</div>
<div className="flex-grow">
<h4 className="text-xl font-bold mb-1">The Glass House</h4>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-semibold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Contemporary French</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="text-xs font-bold text-on-surface">4.9 (850+)</span>
</div>
</div>
<button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            View Menu <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
</main>

      <Footer />
    </div>
  );
}
