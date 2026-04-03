"use client";

import { useState, useEffect, useRef } from "react";
import { useKey } from "react-use";
import confetti from "canvas-confetti";

const getGifCandidates = (gifId: string) => [
  `https://media4.giphy.com/media/${gifId}/giphy.gif`,
  `https://media.giphy.com/media/${gifId}/giphy.gif`,
  `https://i.giphy.com/media/${gifId}/giphy.gif`,
];

const slides = [
  {
    title: "Hi, I'm Daisy 👋🏽",
    content: [
      "Technical Trainer",
      "Software Developer (apps + automations)",
      "Co-founder of a 2-month-old company ***(still alive, somehow)***",
    ],
    quote:
      '"I teach tech, fight bugs for a living, and recently started a business… because I clearly didn\'t have enough stress"',
    gifId: "3o7TKJ7stEm0x8LYOc",
    alt: "juggling fire",
  },
  {
    title: "⚠️ Before we start…",
    content: [
      "A career switch that makes no sense on paper",
      "Honest confessions about Googling everything",
      "At least one missing bracket joke",
    ],
    quote: "*You've been warned.*",
    gifId: "IeiMQviCogzg24Vzzx",
    alt: "TV static glitch",
  },
  {
    title: "Plot Twist 🔄",
    content: [
      "I did NOT start in tech.",
      "I studied **Nutrition** at JKUAT.",
      "Worked in hospitals as a Clinical Nutritionist.",
      "Told people what to eat.",
    ],
    quote:
      '"Then one day I thought… what if I told computers what to do instead?"',
    gifId: "axnZXRpZWSUwqpHdeT",
    alt: "confused math lady",
  },
  {
    title: "🐛 Caught the tech bug (202o)",
    content: [
      "HTML, CSS, JS – it was free",
      "Python, data, AI – the usual suspects",
      "ALX software engineering **(survived it ✔️)**",
      "Became a Software Engineer",
    ],
    quote:
      '"No dramatic \'aha\' moment. Just curiosity… and a terrifying amount of YouTube at 2am."',
    gifId: "rw0v2vXj6QIFBjB7as",
    alt: "person falling down stairs",
  },
  {
    title: "💻 What I built vs what I broke",
    content: [
      "**Built:** React apps, APIs, Automations",
      "**Also built:** Anxiety, a deep relationship with AI",
    ],
    quote:
      '"I spent 70% of my time debugging… 20% Googling… and 10% pretending I knew what I was doing."',
    gifId: "nrXif9YExO9EI",
    alt: "SpongeBob on fire",
  },
  {
    title: "Plot Twist… Again 🎢",
    content: [
      "Now I'm a **Technical Trainer**",
      "Teach software, data, QA",
      "Create curriculum",
      "Help people NOT cry when their code breaks",
    ],
    quote:
      '"So now I explain things that confused ME… to people who are currently confused. It\'s like therapy, but cheaper."',
    gifId: "Y1L0dHsQrUpkv8Org7",
    alt: "Spider-Man pointing",
  },
  {
    title: "🔓 Side Quest Unlocked",
    content: [
      "**Clairsens** (2 months ago. We're still alive.)",
      "Digital revamps",
      "Automations",
      "AI agents",
    ],
    quote:
      '"Basically we make computers do the boring stuff so humans don\'t have to."',
    gifId: "sUUPe6OQwRj56MhPXn",
    alt: "Mario power up",
  },
  {
    title: "🧩 Why This Works (somehow)",
    content: [
      "**From Nutrition:** Explain complex things simply, Deal with difficult clients",
      "**From Tech:** Build things that (sometimes) work, Pretend to be confident",
    ],
    quote: '"So now I\'m basically a tech translator for humans."',
    gifId: "a5viI92PAF89q",
    alt: "cat wearing glasses reading",
  },
  {
    title: "🚀 Where I'm Headed",
    content: [
      "Clairsens pulled me back into **AI**",
      "Build more AI automations",
      "Maybe deeper engineering",
      "Maybe scale training + products",
    ],
    quote:
      '"I don\'t have it all figured out… but I\'m definitely not going back to meal plans."',
    gifId: "XAdbHJywVjF5K",
    alt: "Jake Peralta cool cool cool",
  },
  {
    title: "🎤 Mic Drop",
    content: [
      "I went from helping people fix their diets…",
      "to helping people fix their code, their careers…",
      "and now, their businesses.",
    ],
    quote: "Also if anyone needs a chatbot or a webapp… you know who to call. 📞",
    gifId: "3o7qDSOvfaCO9b3MlO",
    alt: "Obama mic drop",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasConfettiRef = useRef(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useKey("ArrowRight", nextSlide);
  useKey("ArrowLeft", prevSlide);

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      if (!hasConfettiRef.current) {
        confetti({
          particleCount: 180,
          spread: 80,
          origin: { y: 0.6 },
          startVelocity: 22,
          colors: ["#ff2a6d", "#05d9e8", "#ffffff", "#ffb347", "#a855f7"],
        });
        hasConfettiRef.current = true;
      }
    } else {
      hasConfettiRef.current = false;
    }
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const gifCandidates = getGifCandidates(slide.gifId);

  return (
    <main className="min-h-screen bg-black text-white font-mono overflow-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 max-w-3xl mx-auto">
        <div className="w-full">
          <div className="text-xs text-gray-500 mb-8 text-center">
            {currentSlide + 1} / {slides.length}
          </div>

          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {slide.title}
            </h1>

            <ul className="space-y-2 text-lg md:text-xl">
              {slide.content.map((item, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-pink-400'>$1</strong>"),
                  }}
                />
              ))}
            </ul>

            <div className="border-l-4 border-pink-500 pl-4 my-6 text-cyan-300 italic">
              {slide.quote}
            </div>

            <div className="flex justify-center my-4">
              <img
                key={slide.gifId}
                src={gifCandidates[0]}
                alt={slide.alt}
                className="max-w-full h-auto rounded-lg max-h-80 object-contain"
                data-src-index="0"
                onError={(e) => {
                  const img = e.currentTarget;
                  const currentIndex = Number(img.dataset.srcIndex ?? "0");
                  const nextIndex = currentIndex + 1;
                  const nextSrc = gifCandidates[nextIndex];
                  if (!nextSrc) return;
                  img.dataset.srcIndex = String(nextIndex);
                  img.src = nextSrc;
                }}
              />
            </div>
          </div>

          <div className="fixed bottom-6 left-0 right-0 text-center text-gray-600 text-sm">
            ← →  arrow keys to navigate
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
