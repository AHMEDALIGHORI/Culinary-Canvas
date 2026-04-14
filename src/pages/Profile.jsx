
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="lg:col-span-3 space-y-8">
<div className="flex flex-col items-center p-8 bg-surface-container-low rounded-lg text-center relative overflow-hidden group">
<div className="relative z-10">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container mb-4">
<FastImage  alt="Alex Sterling" className="w-full h-full rounded-full object-cover" data-alt="high quality portrait of Alex Sterling, a trendy male with creative style against a minimalist architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBylsXVooMkBb9J6I_0w2-Y7quwNqhXvrP0DKPid0-ewYwf8qhAa3143C_iF-1cgrhgRRQzGssjR1zUMLoQEH6NmYgaN-Li9IQIKGnlMv9bYzoShttjH1W9iy7-ThN1td3cekE2pnBRaaRjl-l26ZYfdzv_Qm_AT2nWm5FzJkbJMulb4Iu98sfjaeEDlmzF3jFX528PDOi8rVFJFQODYp6cloFdu7TSN-O-o1Z369ta2n22cOkRmbSaEazrYECFu2urfhLx3GPzqsw" />
</div>
<h2 className="text-xl font-bold text-on-surface">Alex Sterling</h2>
<p className="text-sm text-on-surface-variant mb-6">Member Since Jan 2023</p>
</div>

<div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-container/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
</div>
<nav className="flex flex-col gap-2 p-2 bg-surface-container-lowest rounded-lg shadow-sm">
<a className="flex items-center gap-4 px-6 py-4 rounded-full bg-primary text-on-primary font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span>Personal Info</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 rounded-full text-on-surface hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span>Order History</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 rounded-full text-on-surface hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
<span>Saved Places</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 rounded-full text-on-surface hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Payments</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 rounded-full text-on-surface hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
<span>Favorites</span>
</a>
</nav>
</aside>

<div className="lg:col-span-9 space-y-16">

<section>
<div className="flex items-center justify-between mb-8">
<h3 className="text-3xl font-extrabold tracking-tight">Personal Info</h3>
<button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                            Edit Profile
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-surface-container-low rounded-lg">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-2">Full Name</label>
<div className="p-4 bg-surface-container-lowest rounded-full text-on-surface font-medium">Alex Sterling</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-2">Email Address</label>
<div className="p-4 bg-surface-container-lowest rounded-full text-on-surface font-medium">alex.sterling@culinary.com</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-2">Phone Number</label>
<div className="p-4 bg-surface-container-lowest rounded-full text-on-surface font-medium">+1 (555) 0123 4567</div>
</div>
</div>
</section>

<section>
<h3 className="text-2xl font-extrabold mb-8">Saved Addresses</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 bg-surface-container-lowest rounded-lg border border-transparent hover:border-primary-container/30 transition-all shadow-sm group">
<div className="flex items-start justify-between mb-4">
<div className="bg-primary/10 p-3 rounded-full text-primary">
<span className="material-symbols-outlined" data-icon="home">home</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
</div>
<h4 className="text-lg font-bold mb-1">Home</h4>
<p className="text-on-surface-variant leading-relaxed">245 Editorial Ave, Suite 402<br/>Lower Manhattan, NY 10013</p>
</div>
<div className="p-8 bg-surface-container-lowest rounded-lg border border-transparent hover:border-primary-container/30 transition-all shadow-sm group">
<div className="flex items-start justify-between mb-4">
<div className="bg-secondary/10 p-3 rounded-full text-secondary">
<span className="material-symbols-outlined" data-icon="work">work</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_vert</span>
</div>
<h4 className="text-lg font-bold mb-1">Office</h4>
<p className="text-on-surface-variant leading-relaxed">98 Canvas Plaza, Floor 12<br/>DUMBO, Brooklyn, NY 11201</p>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-extrabold">Recent Orders</h3>
<a className="text-primary font-bold hover:underline" href="#">View All History</a>
</div>
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden">
<div className="divide-y divide-surface-container">

<div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden">
<FastImage  alt="Burger" className="w-full h-full object-cover" data-alt="top-down macro shot of a juicy gourmet wagyu burger with melted cheese and fresh greens on a brioche bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyv2FNXWF5gK9I2hSYOXMXJlxgeSwTcqCQAgSd1y_iYArzlvhZMnrosm7G4a7E1XXEnMjVsmgsDRiNYqBP0SqrlhJs-dLofi0DKsYcOuBZhjK39STL4CaRnZMSDa-lDLdzL6zHcTdWOGiuHnwafpSeTMy1PL2NuanXHrdxtaGOp3NDJhEF1SDWN6vdtUyQ7_MoCK53n1qYdccVTArOcQm08xk4DxiR3d83ZQNWhSJjwfbOQBfJRygnG8fQ1CEb04LPfx4f-Cq1nNM" />
</div>
<div>
<h4 className="font-bold text-lg">Gourmet Burger Kitchen</h4>
<div className="flex items-center gap-3 text-sm text-on-surface-variant">
<span>Oct 24, 2023</span>
<span className="w-1 h-1 rounded-full bg-on-surface-variant/30"></span>
<span>$42.50</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Delivered</span>
<button className="text-primary text-sm font-bold">Reorder</button>
</div>
</div>

<div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden">
<FastImage  alt="Sushi" className="w-full h-full object-cover" data-alt="exquisite platter of nigiri sushi including tuna, salmon, and hamachi arranged artfully on a dark slate plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAIHw-Olvrovje2XPCFWJ1pg43cvQ3tlSQrAGMleUau9pVNm_q70iOUtcl1GUQW6sl5-EFHshj6uf-2hgi2OSZM33OioL27qPUxeWrQV_dpn39sokB5Syjs2WS9S_HG_z3YOyB_lkmssK3KcQK5KRkOC5GN0tx1Yhl5cOHnU6aS1iahxaxlRdqCXCTsZjUT1MmHjwG69zUfB_XshgCUOSLff5jIu8xXCWIKGNzf9k0lLHY-OSFtu3PMfetsSEGK4ClsXhSVCX143Q" />
</div>
<div>
<h4 className="font-bold text-lg">Orizuru Sushi Lab</h4>
<div className="flex items-center gap-3 text-sm text-on-surface-variant">
<span>Oct 20, 2023</span>
<span className="w-1 h-1 rounded-full bg-on-surface-variant/30"></span>
<span>$68.00</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Delivered</span>
<button className="text-primary text-sm font-bold">Reorder</button>
</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-2xl font-extrabold mb-8">Favorites</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(78,33,32,0.04)] transition-transform hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<FastImage  alt="Italian Restaurant" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="vibrant authentic italian kitchen setting with hand-stretched pizza topped with fresh basil and mozzarella buffalo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRdQ9B_BsCmMgRSNnsNLeuJiZBCjCDCHmt-OApiFK3b3XOWRObmEHsN5REKjS0KVy4bze4OxXSuL-hSfXe3ukjPXfPx3NDEi1_oo_50YvWFX1lfFXpT3uDIlJ08cuhKlan9nL-mDQuENZ2xnvB05nw0X7pkp7zfL269NIImZWLULxGfNdzI2HtCb4S603lOR3fcyUhM-7va_l_lLnq4RAAayFruppDX5zcJn3nROrZEeNCF5Py7yvPrQ-RtAlJdf7XoKqK87pdEsM" />
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-primary shadow-lg">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold">Roma Artisanal Pizza</h4>
<span className="flex items-center gap-1 text-secondary font-bold">
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        4.9
                                    </span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Wood-fired perfection &amp; organic ingredients</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Italian</span>
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Organic</span>
</div>
</div>
</div>
<div className="group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(78,33,32,0.04)] transition-transform hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<FastImage  alt="Healthy Bowls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="colorful garden fresh salad bowl with avocado, roasted chickpeas, and tahini dressing under bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlWwTqOLDCDOBFYGr3olT7Shf7VpB1vWJVC_3x0BUQdWy9co1Qcdtw2q2YROi07Tcn_GbVrQZ61Rxn4rAxxHPnAvfM8KDKPyLtP3BqhPrAr57MQu-KLfdSKyH8mXdx7ITnp_LjI2ibddItnAW9-zIlKH6DNPso1wjUegp4Eli5bFUZMTMWBwuzNQJ2lvhKmoPqkIta0aI_WvFqA9lRWTGkG07ggiZI1ij7CPzffRUDq6LV0GI7MM7jL9J-awnMzey8IF6LGw99qdo" />
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-primary shadow-lg">
<span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold">The Green Harvest</h4>
<span className="flex items-center gap-1 text-secondary font-bold">
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        4.7
                                    </span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Nutrient-dense power bowls &amp; smoothies</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Healthy</span>
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Vegan</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>


      <Footer />
    </div>
  );
}
