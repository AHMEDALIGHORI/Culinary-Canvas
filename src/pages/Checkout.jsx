
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">

<div className="mb-12">
<h1 className="gsap-hero text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Review Your Order</h1>
<p className="text-on-surface-variant font-medium">Finishing touches for your gourmet experience.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 space-y-8">

<section className="bg-surface-container-low rounded-lg overflow-hidden">
<div className="h-48 w-full relative">
<FastImage  className="w-full h-full object-cover grayscale-[0.2] contrast-[0.9]" data-alt="stylized architectural map view of a metropolitan residential area with soft coral and cream tones and clean navigation markers" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-xA1Y1vJoIxKdYHhPbEvrhj8dI0uf4ID9xqifW8u4NwUm_P5uSXdqGII6bYQXxUrgRY2rQTpD1q_YHm7OJKhRR5Pghs2YYFXjew72y0RV0CbffPfy5oJU6gMTwJBlYUXhQQR1073DIxThbPn75gl4w2uHCfgqsyd54_b5TMpUs2ueO0kmFtiRd-xObEtj3K1vvWD6Y278ZN_1Z9fuOyDP2Jo2v0iEkxHdLKR-uVPDMEPdRXXanWQInssjTWCmTdmiezYsYaapE4Y" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-6 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
<span className="text-xs font-bold tracking-wide uppercase text-on-surface-variant">Estimated: 25-35 mins</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h2 className="text-xl font-headline font-bold text-on-surface">Delivery Address</h2>
<button className="text-primary font-bold text-sm hover:underline underline-offset-4">Change</button>
</div>
<div className="flex items-start gap-4">
<div className="bg-surface-container-highest p-3 rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="home">home</span>
</div>
<div>
<p className="font-bold text-on-surface">Home Sanctuary</p>
<p className="text-on-surface-variant leading-relaxed">248 Culinary Lane, Suite 402<br/>West Vineyard, CA 94103</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low p-8 rounded-lg">
<div className="flex justify-between items-start mb-6">
<h2 className="text-xl font-headline font-bold text-on-surface">Payment Method</h2>
<button className="text-primary font-bold text-sm hover:underline underline-offset-4">Manage</button>
</div>
<div className="bg-surface-container-lowest p-6 rounded-md border border-outline-variant/15 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-on-surface/5 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="credit_card">credit_card</span>
</div>
<div>
<p className="font-bold text-on-surface">•••• •••• •••• 8842</p>
<p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Expires 12/26</p>
</div>
</div>
<div className="material-symbols-outlined text-secondary" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</div>
</div>
</section>
</div>

<div className="lg:col-span-5 sticky top-28">
<div className="bg-surface-container-highest/30 rounded-lg p-8 ring-1 ring-inset ring-outline-variant/10">
<h2 className="text-2xl font-headline font-bold text-on-surface mb-8">Summary</h2>

<div className="space-y-6 mb-8">
<div className="flex gap-4 items-center">
<div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
<FastImage  className="h-full w-full object-cover" data-alt="macro close-up of a premium double wagyu beef burger with melting cheese and artisan brioche bun on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGb-5gTGtNsG6h1BTvJe-Jk6xsb2rRzFo4ke74AG84adjV-GocOSFzkPztRr5UvEQ4qh5lm4AS1rsZ8HiwcFuAAUJoZX_fhe6hZJzuI0qouXcn6xVALyjzbgj6ucgJkO3xjhAW81Ua6-YM6Nbm7Dh49TFob8t5yTtX-0eInzFtnf4A1e8b8ga1KQE3M1wzbSpGOlkI3yLeszVSl45p10zXsYgwQtIr3Y795PDL9geInA63I2hFpfAVzDRpQb98cBuPS8e3XjPs1vo" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-center">
<p className="font-bold text-on-surface">Classic Burger</p>
<p className="font-bold text-on-surface">$25.80</p>
</div>
<p className="text-sm text-on-surface-variant">2 × $12.90</p>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
<FastImage  className="h-full w-full object-cover" data-alt="crispy golden french fries dusted with sea salt and herbs served in a rustic paper cone with warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoYjMrMtq_WSzYJ2XyT12YqE6rChZoc-JHI3cz3czBwZ3CDM61KFtowdm6rDyR62hMVkpyJmfSfULC8P9e1G31WZfXpl9o14bxZTL9xEmYB0ZOb0bg-hrAMbzveCFgfMEnMVi-8gZpYWMO05moHQE5Vou7gS0ynqOUAuc20y231jsbZF2ZkZuycOyqexW98M1VKknr1PMTIR5sftVmCj6JxzrOXk7eSg11lanCEceEXQAybM5vXdopsg05qpWfEQWzvU-flpehiRU" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-center">
<p className="font-bold text-on-surface">Large Fries</p>
<p className="font-bold text-on-surface">$6.50</p>
</div>
<p className="text-sm text-on-surface-variant">1 × $6.50</p>
</div>
</div>
</div>

<div className="space-y-4 pt-6 border-t border-outline-variant/20">
<div className="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span>$32.30</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Delivery Fee</span>
<span>$4.00</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Tax &amp; Fees</span>
<span>$2.45</span>
</div>
<div className="flex justify-between items-center pt-4">
<span className="text-xl font-headline font-bold text-on-surface">Total</span>
<span className="text-2xl font-headline font-extrabold text-primary">$38.75</span>
</div>
</div>

<button className="w-full mt-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-full text-lg shadow-[0_12px_24px_rgba(161,57,0,0.2)] active:scale-95 transition-all duration-200">
                        Place Order • $38.75
                    </button>
<p className="text-center mt-6 text-xs text-on-surface-variant/70 px-4 leading-relaxed">
                        By placing your order, you agree to our Terms of Service and Privacy Policy.
                    </p>
</div>
</div>
</div>
</main>


      <Footer />
    </div>
  );
}
