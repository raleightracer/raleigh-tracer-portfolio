"use client";

import { useEffect, useRef } from "react";

/**
 * Reproduces the behaviour of the original vanilla script.js:
 *   1. a custom cursor dot that follows the mouse
 *   2. fade-up reveal on scroll via IntersectionObserver
 *   3. active nav-link highlight based on scroll position
 */
export default function ClientEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // 1. Cursor dot
    const onMouseMove = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = e.clientX - 3 + "px";
      cursor.style.top = e.clientY - 3 + "px";
    };
    document.addEventListener("mousemove", onMouseMove);

    // 2. Fade-up on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const fadeEls = document.querySelectorAll<HTMLElement>(".fade-up");
    fadeEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 0.08 + "s";
      observer.observe(el);
    });

    // 3. Active nav highlight
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const navLinks =
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach((a) => {
        a.style.color =
          a.getAttribute("href") === "#" + current ? "#f0ede8" : "";
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return <div className="cursor-dot" id="cursor" ref={cursorRef} />;
}
