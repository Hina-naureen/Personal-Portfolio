"use strict";

// Register ScrollTrigger plugin (loaded via CDN)
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile hamburger menu
var hamburger = document.getElementById("hamburger");
var navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {

  // Hero section animations
  var headerTimeline = gsap.timeline();
  headerTimeline
    .to(".animate-element", { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" })
    .to(".header h1",       { opacity: 1, y: -20, duration: 1 },   "-=0.5")
    .to(".header p",        { opacity: 1, y: -20, duration: 1 },   "-=0.8")
    .to(".btn-hero",        { opacity: 1, y: -10, duration: 0.8 }, "-=0.6");

  // Scroll animations using IntersectionObserver (reliable on all browsers)
  var observerOptions = { threshold: 0.15 };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(
    ".about h2, .about p, .project-item, .skill-item, .contact h2, .contact-btn, .contact > p, .social-links"
  ).forEach(function (el) {
    el.classList.add("fade-up");
    observer.observe(el);
  });

});
