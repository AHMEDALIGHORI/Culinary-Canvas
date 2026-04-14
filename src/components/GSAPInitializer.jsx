import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPInitializer() {
    const location = useLocation();

    useGSAP(() => {
        // Clear all existing ScrollTriggers to prevent duplicates on route change
        ScrollTrigger.getAll().forEach(t => t.kill());
        
        // --- 1. Global Hero Titles (Slide Up + Fade) ---
        gsap.fromTo(".gsap-hero", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1 }
        );

        // --- 2. Scroll Trigger Cards (Fade up on scroll in) ---
        // Using batch or staggered mapping for cards
        const cards = gsap.utils.toArray('.gsap-card');
        
        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0, 
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", // Trigger when top of card hits 85% of viewport height
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Add standard Hover micro-interactions using GSAP timelines
            // We use simple mouseenter/mouseleave bindings
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out", overwrite: "auto" });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out", overwrite: "auto" });
            });
        });

        // --- 3. Staggered Bubbles (e.g. Categories) ---
        gsap.fromTo(".gsap-stagger-bubble",
            { scale: 0.8, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.6, 
                ease: "back.out(1.5)", 
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".gsap-stagger-parent",
                    start: "top 80%",
                }
            }
        );

        // Refresh ScrollTrigger to ensure measurements are accurate after DOM injections
        setTimeout(() => ScrollTrigger.refresh(), 200);

    }, { dependencies: [location.pathname], revertOnUpdate: true });

    return null; // Purely logic component
}
