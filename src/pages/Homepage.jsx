
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FastImage from '../components/FastImage';

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-24 pb-20">

<section className="relative px-8 max-w-7xl mx-auto mb-16 overflow-hidden">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="z-10">
<h1 className="gsap-hero text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight">
                        Artisanal flavor,<br/>delivered to <span className="text-primary italic">your canvas.</span>
</h1>
<p className="text-xl text-on-surface-variant mb-10 max-w-lg">Experience curated dining from the city's finest chefs, brought straight to your doorstep with meticulous care.</p>
<div className="relative max-w-xl group">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-primary">
<span className="material-symbols-outlined">search</span>
</div>
<input  className="w-full py-6 pl-14 pr-32 bg-surface-container-lowest rounded-full border-none shadow-[0_8px_32px_rgba(78,33,32,0.06)] focus:ring-4 focus:ring-primary/20 transition-all text-lg placeholder:text-on-surface-variant/50" placeholder="Find your favorite meal" type="text"/>
<button className="absolute right-3 top-3 bottom-3 px-8 rounded-full bg-primary text-on-primary font-bold hover:bg-primary-dim transition-colors active:scale-95">
                            Search
                        </button>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="relative w-full h-full">
<div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden rotate-3 shadow-2xl z-0">
<FastImage  className="w-full h-full object-cover" data-alt="top-down artistic arrangement of gourmet Mediterranean dishes with vibrant vegetables and roasted meats on a rustic table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnVEh2BsQQX__hSrEvhR2v0LylFwQ1LJQ3bOsTQW4p6fFMOo8fjVp6w7MiblHGXOzfpxCOr4WrNhIeWWDOHMwNR4TDu8smFKVb-NQVCLt6eJMIFwI-N6yEJ43Lt9TxgVKyzDodVAckRQik-vfSObMpMnMrKPqT88WIuoC2XJ8jQcNvS6pZSxVUmH8ERl-Rkmqd0P_RSNcHy8Es_jc8jwshHLoIdP0bu2DJ58GvbnhZ4ykctHAcG-_ftBnSLH2AWC_mPa6igL9Fkuc" />
</div>
<div className="absolute bottom-10 left-0 w-3/5 h-3/5 rounded-lg overflow-hidden -rotate-6 shadow-2xl z-10 border-[12px] border-surface">
<FastImage  className="w-full h-full object-cover" data-alt="close-up of a fresh wood-fired pizza with melting mozzarella, vibrant basil leaves, and artisanal tomato sauce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASd8N6NkemHZXV0Whaz7gE6Hu3aGRPonVVoSN18elb6U8gUAYqVnrv7uNckuFia9HduFsfi58NzJ-qIiggD8CUdRMdc_7JPQuO8YtILz8nALzXc9WVtpKyTQ6ck9Fnu0qKLCpp7R7VUWS_7xCb-q6kUh3wn5Njfl-6CR5tfhwCZqmuCt6Asp1RwxHGUeqAl31Si4usiT7jvqHidVSW56h9CHEf4oyRcpQSc9-vjFzBNyOIbIYWjFu4TpjfzSgb6ThrggzdUblo6G0" />
</div>
</div>
</div>
</div>
</section>

<section className="mb-20">
<div className="px-8 max-w-7xl mx-auto mb-8 flex justify-between items-end">
<div>
<h2 className="text-3xl font-bold tracking-tight mb-2">Curated Categories</h2>
<p className="text-on-surface-variant">Explore by your current craving</p>
</div>
<button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-6 px-8 max-w-7xl mx-auto pb-4">

<div className="flex-shrink-0 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-container-low flex flex-col items-center justify-center gap-3 group-hover:bg-primary-container transition-all duration-300">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="vibrant slice of pepperoni pizza on a wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjf8c5jJNQ92Yr6Ord1YuLr_5FYnCH3ds0E-A9alhPe3sNI0hukziyvv2XID3U225HgUztSfBT9xREwDQFMwDB5OpN26itDrfQD9vSrEwvDRqWDUK4Ud-0MVy-OIQvl9mR4O4fix9hAhEIoO-UlSEK_NIkB9p4Wk6i15altJP61U1ishgxYc-u0_S8HLZDIZr9PhGgKAkU_EmHjtJvwBuinN8pU4uSJo9PihFqXQaMDGrPdNnUnmzD1aI3Y2SNcYJw-JJyGXXecCk" />
</div>
</div>
<p className="text-center mt-3 font-bold text-sm text-on-surface">Pizza</p>
</div>

<div className="flex-shrink-0 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-container-low flex flex-col items-center justify-center gap-3 group-hover:bg-primary-container transition-all duration-300">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="fresh salmon nigiri sushi with a touch of wasabi and ginger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV_Fw1xEp9I2xAJjWR__-Fk6fRmg7wherK7IEW3oNNhDdw68LQSE9BO9Llt0e9OsSpiJV7FAqt7uFbwH6MAHJDdc5cw9VcZXcr9Kw4H087ulfrX1eFbqASiqqrZPBL7eRNgan0FCvudAqSy0jMR5iH-DlxqA0SNU_Kvd4j_Ueek2DIMwmJepp95V6WyLZkJXw0uHVwSfScaWNS1uFOt6Zdi-JlWzLtP_xMXIJZqEzWHWAWAGv1xoqFMnNrvuMq9d1UpxD4cfZjR8M" />
</div>
</div>
<p className="text-center mt-3 font-bold text-sm text-on-surface">Sushi</p>
</div>

<div className="flex-shrink-0 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-container-low flex flex-col items-center justify-center gap-3 group-hover:bg-primary-container transition-all duration-300">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="stack of juicy smash burgers with melting cheese and fresh lettuce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHZOqrZ0nqOwo2Qtmh3roH8efnKrIsC0IjB-2GonMt-sDsWNPRP9P_cm7iHvT2fj_sGAQv2YRHLawsc4oZrtGFDKVM3k2o2BOsqqqf-7HXHIZAWVgYOkiPukEOXyTVgxIngwJByEpDFg0bSZ8HAKZFLAVjXrXbWa6SlUiWXYd6QoO09U0ff1oHBmNa2xSGm7f2OX8_HQXWFFspEgjA6sZbEE1STurGYZNcJIoFmNgSKzoLEa6ALprj9QR88bLyjhjqYayYzOnjHfo" />
</div>
</div>
<p className="text-center mt-3 font-bold text-sm text-on-surface">Burgers</p>
</div>

<div className="flex-shrink-0 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-container-low flex flex-col items-center justify-center gap-3 group-hover:bg-primary-container transition-all duration-300">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="vibrant buddha bowl with avocado, quinoa, and colorful fresh vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIXwAays26gLNvbdXsPRvm93Oq0inDY8jtYd38Q2O4808UKE-oTJ2UEPXSOtq58ig7-eQXKgbi0wlLMIwjIRmgSgyv1Mq1EX4xtKlbRxTQYcEa3TUzBd2BtIMoyLAPYGNm1TeMXkvFRnFBKi5oeI52CWir6GxhX__3-YPIZ4l31SoBOeO0eytKQw6OKAEuRfW_i7JJXbwB3QvPcz1-VtaYImfzNVfRmi4ph-GLTUkez-plHtifkLVkBqWzCN4HTYFAlHZX9DJZplM" />
</div>
</div>
<p className="text-center mt-3 font-bold text-sm text-on-surface">Healthy</p>
</div>

<div className="flex-shrink-0 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-container-low flex flex-col items-center justify-center gap-3 group-hover:bg-primary-container transition-all duration-300">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="decadent chocolate lava cake with a molten center and dusting of sugar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0t_0tvDgecu-S6UxqTDMkZQu2Lm-hb3ggsj3lW-UMwqsB6ayzA5slqsLw25PnVsC4ulv21nekmSY-5DtC7ExaPpTvGnBQ_LoNoZIUMjRt_QSNMOh0QVfZHqd0vMiOv2xy2IDwU5If0Lxo8-HR9Raxe2-KTA11fG6ZDAIqrcj1oL6MZLaak3xdPMq9b_CBIV9VgQGzzRnP_NkzA50E0z0oFJ4xg9FXwtOEjWK4XqWETuIKSR47x7bCptiXksB3X1VhsjteetATPLY" />
</div>
</div>
<p className="text-center mt-3 font-bold text-sm text-on-surface">Desserts</p>
</div>

<div className="flex-shrink-0 group cursor-pointer">
<div className="w-32 h-32 rounded-full bg-surface-container-low flex flex-col items-center justify-center gap-3 group-hover:bg-primary-container transition-all duration-300">
<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
<FastImage  className="w-full h-full object-cover" data-alt="authentic street tacos with cilantro, onions, and fresh lime wedges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9NZKJ222qMwt3H_hF4QwBGkabbRDOf0pPN6oATcZWVYYguHmrrpXA0djxwLO2_a9KwyYVJHP3QFO3aI8Ysv0SjAddYcvzdcoLE4P7YHKHjfzgZk44ig0Q0klxa60sw5z1KdIvWOE5HHUZ7Ti5pk-uI5NumSJcU-ZgOPgfLJMFVTUWHQ7XnZ8Hrq6tL3wnSHDmx1Uiwp26JzT9DuOZ37J0WugsnuiJFFFEj1RxW0oxC6PRsW0BL5TALERbFtOACbja1KV2nDP4t14" />
</div>
</div>
<p className="text-center mt-3 font-bold text-sm text-on-surface">Tacos</p>
</div>
</div>
</section>

<section className="bg-surface-container-low py-20">
<div className="px-8 max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-4xl font-bold tracking-tight mb-3">Popular Near You</h2>
<p className="text-on-surface-variant text-lg">Top rated selections from your local culinary scene</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div onClick={() => navigate("/restaurant")} className="gsap-card bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_8px_48px_rgba(78,33,32,0.04)] group cursor-pointer">
<div className="relative h-64 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="upscale restaurant interior with warm lighting and beautifully plated gourmet food" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArEFlTasja-9X2OXrV7hfWiiCNbV5pPKNnCaHuTa-rnDryf1JlgSY2yhO7VPdIfDO4OI5UcjiBHKjqd-I-17ZUU6Z75odkd1vlEJgyoZ3gKubLaJ2GJPaK5edxI_io6-hSeGWJ2pyHXw23CWfWrtU45sAKqBdjZ4Vj1I2QWhqUnyJ1-Ndkfr2Dtoa7JkDMM3JwDZh_GRb0iDCmDnKzaxEG2pko09Q9ADFIfQqW16S1U39lD01JYiaAoBeWIfY-HIOqu__rKC5n3TM" />
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm">
<span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                4.9
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold">The Golden Truffle</h3>
<span className="text-secondary font-bold">$45+</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Fine Dining • French • Artisanal</p>
<div className="flex items-center gap-4 text-sm font-medium border-t border-surface pt-4">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">schedule</span>
                                    25-35 min
                                </div>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-lg">moped</span>
                                    Free Delivery
                                </div>
</div>
</div>
</div>

<div onClick={() => navigate("/restaurant")} className="gsap-card bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_8px_48px_rgba(78,33,32,0.04)] group cursor-pointer">
<div className="relative h-64 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="rustic italian pasta dish with fresh tomatoes, basil, and dusting of parmesan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBguDIpjrQlFDHLW62Ni5D9Pp_JzAo5IzVXZitGYztiSYYPoutjVnqeNK4hCIpuvYBqlA6anHO9TE9HXbNbHbX6JYWLjInlRVApax7b3eK8ryhvhQ6Kq2_FfN045j7m4wXMwh-WwP5r5Eb7OOg8k61qkYYqfp1I07B7B5SGT1zTPjyzc5D5uX0-MlS06rJuMI4HRNLWGoMxV3-QkUQGDVTtj7FHluhWaXjFgHK_J_acmFB6kW1l8VGhqF7W40XaV7bNQPuQQr8ywpw" />
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm">
<span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                4.7
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold">Verdant Harvest</h3>
<span className="text-secondary font-bold">$22+</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Healthy • Vegan • Farm-to-Table</p>
<div className="flex items-center gap-4 text-sm font-medium border-t border-surface pt-4">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">schedule</span>
                                    15-25 min
                                </div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">moped</span>
                                    $2.99
                                </div>
</div>
</div>
</div>

<div onClick={() => navigate("/restaurant")} className="gsap-card bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_8px_48px_rgba(78,33,32,0.04)] group cursor-pointer">
<div className="relative h-64 overflow-hidden">
<FastImage  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="gourmet double-patty burger with specialty sauces and artisan brioche bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLeDehPyg5VKI2kV5mJA5eliRho-XrSVZVreEvC0IZjFTIcS-KhlzhuQ_IFdcvYzYoRAK_qLfCxAZCxGc_lpCLMCJ-SsCT8_a0i8k_XiEGswDjEcSiq0mkMI1ohnEE00rUjZLFva375xUHiZPG8ccG8HiNI8eKxk5Sa96RAgxFkFrq9jJG28z7mfZWp7wbVuIl8rTPNxsMwoap7ctp0wWTvMDSuWZ086cMu6oZIwbL35_xqy4Y10gtceQceg04_HvCHiKrRVv2mjs" />
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm">
<span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                4.8
                            </div>
<div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-bold text-xs">
                                Chef's Choice
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold">Neo Burger Lab</h3>
<span className="text-secondary font-bold">$18+</span>
</div>
<p className="text-on-surface-variant text-sm mb-4">Gourmet Burgers • American • Craft</p>
<div className="flex items-center gap-4 text-sm font-medium border-t border-surface pt-4">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-lg">schedule</span>
                                    20-30 min
                                </div>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-lg">moped</span>
                                    Free Delivery
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
<div className="md:col-span-2 md:row-span-2 bg-primary rounded-lg relative overflow-hidden p-12 text-on-primary flex flex-col justify-end">
<FastImage  className="absolute inset-0 w-full h-full object-cover opacity-40" data-alt="vibrant culinary scene showing a chef preparing fresh sushi with artistic precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrOjQeix8wGmzXktpSwCHILFrcmVWz7IniqCM4Gf5cmTq804ButQuMEJZkNUhCodnCLp3GgGhZOR0z22lG1eXBorcbz_s2m_7Z5pXTNBCJcMWlKkcAElj09RHH1YVLVbBOwa0lOTJ_yhcsyHcrsLI0bHfhZs6TFbQVK_5w06omyLkn88Rfu0Xq5Ln7-9yZuzVoatPaEyUaSmGsAROkbJpT0yS09Jl6POCyecz_zQdxOJuMCkWPjgmPQ0wkaL7GnGAiXosQKoORGF0" />
<div className="relative z-10">
<h2 className="text-4xl font-extrabold mb-4">Unlock Culinary Mastery</h2>
<p className="text-lg opacity-90 mb-8 max-w-md">Join our premium membership for exclusive access to Michelin-starred menus and priority delivery.</p>
<button className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-surface-container-low transition-colors">Join Canvas+</button>
</div>
</div>
<div className="md:col-span-2 bg-secondary rounded-lg relative overflow-hidden p-8 text-on-secondary flex items-center">
<FastImage  className="absolute inset-0 w-full h-full object-cover opacity-30" data-alt="overhead view of a healthy salad with poached egg and vibrant seasoning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKVDrZT17T7NIs0-9cCFYWWhj_D3id4yB1LBGm_yC98kO2WiKA3THDgJdh5JcG4tY6rMymu1X_EHPRYbGVjQ23s5f1fCZWhVJVpgEcMhumr0bdQoUdHO-uJp67NyEmKW7qDn67b_V2w6EmOuIpgmESSL2CJ9aUfDbAGslvCszY6zo-9NK6FkqhXWS9hGW2eA7setK-X-GFh8V6pxMmDy71GnoWGFdZWB_Ux7N7M2pcd9QYSES0H_ZdH7gSZP0CXgofaMvqhGYA_2k" />
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-2">Wellness Curated</h3>
<p className="opacity-90">Nutritious meals designed by dietitians.</p>
</div>
</div>
<div className="bg-tertiary-container rounded-lg p-8 flex flex-col justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-4xl mb-4">eco</span>
<h3 className="text-xl font-bold mb-1">Sustainable</h3>
<p className="text-sm opacity-80">100% compostable packaging on all orders.</p>
</div>
<div className="bg-surface-container-highest rounded-lg p-8 flex flex-col justify-center text-on-surface">
<span className="material-symbols-outlined text-4xl mb-4">local_shipping</span>
<h3 className="text-xl font-bold mb-1">Zero-Touch</h3>
<p className="text-sm opacity-80">Safe, contactless delivery as standard.</p>
</div>
</div>
</section>
</main>


      <Footer />
    </div>
  );
}
