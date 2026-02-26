import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// GSAP اور ScrollTrigger کو رجسٹر کریں
// اگر npm استعمال کر رہے ہیں تو آپ import statements استعمال کریں؛ 
// اگر CDN استعمال کر رہے ہیں تو یہ statements comment کر دیں یا حذف کر دیں

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// اگر import statements استعمال کر رہے ہیں تو رجسٹر کریں:
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // ہیڈر سیکشن اینیمیشن
  const headerTimeline = gsap.timeline();
  headerTimeline
    .to(".animate-element", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to(".header h1", { opacity: 1, y: -20, duration: 1 }, "-=0.5")
    .to(".header p", { opacity: 1, y: -20, duration: 1 }, "-=0.8");

  // اباؤٹ سیکشن اینیمیشن
  gsap.from(".about h2", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 1
  });

  // پروجیکٹس سیکشن اینیمیشن
  gsap.from(".project-item", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2
  });

  // سکلز سیکشن اینیمیشن
  gsap.from(".skill-item", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.1
  });

  // رابطہ سیکشن اینیمیشن
  gsap.from(".contact h2", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 1
  });
});
