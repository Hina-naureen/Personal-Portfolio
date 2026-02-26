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

  // About section
  gsap.from(".about h2", {
    scrollTrigger: { trigger: ".about", start: "top 80%", toggleActions: "play none none none" },
    opacity: 0, y: 30, duration: 1
  });
  gsap.from(".about p", {
    scrollTrigger: { trigger: ".about", start: "top 80%", toggleActions: "play none none none" },
    opacity: 0, y: 20, duration: 1, delay: 0.3
  });

  // Projects section
  gsap.from(".project-item", {
    scrollTrigger: { trigger: ".projects", start: "top 80%", toggleActions: "play none none none" },
    opacity: 0, y: 40, duration: 1, stagger: 0.2
  });

  // Skills section
  gsap.from(".skill-item", {
    scrollTrigger: { trigger: ".skills", start: "top 80%", toggleActions: "play none none none" },
    opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1
  });

  // Contact section
  gsap.from(".contact h2", {
    scrollTrigger: { trigger: ".contact", start: "top 80%", toggleActions: "play none none none" },
    opacity: 0, y: 20, duration: 1
  });
  gsap.from(".contact-btn", {
    scrollTrigger: { trigger: ".contact", start: "top 80%", toggleActions: "play none none none" },
    opacity: 0, y: 20, duration: 0.8, stagger: 0.2, delay: 0.3
  });

});
