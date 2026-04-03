"use client";

import { useState, useEffect, useRef } from "react";
import { useKey } from "react-use";
import confetti from "canvas-confetti";

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
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenJnNGxleWh1MjRkcHhobTdiMGxkeHEwN2xueGVkOHQyZzJzaW1lOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKJ7stEm0x8LYOc/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWM4NjJveWU1dnAyczZtbXBkY2ZoODV1N3hsaXFnNHlmN2Q1ZDhsbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IeiMQviCogzg24Vzzx/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzcyb2phNnBzZWtzYTJpejFmdnd6ZHFyenV6YmkwMml3aDFjdjZjYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/axnZXRpZWSUwqpHdeT/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzcyeGVjam5obzFuYWQ0M2ExbDZwYWN3MXNoNnU0YXF2eGZ4NHI4ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rw0v2vXj6QIFBjB7as/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG5mcjhibTRtY2I2djdkbXNzMWxtOG8yNnR3M21yNWZvZWRhMndiMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nrXif9YExO9EI/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmFiZTZyMjRmZXU5MjFybmFkbDQyazg0dnJhNXIyOTE3bWF3dm13YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Y1L0dHsQrUpkv8Org7/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZlODV1NWl2bWYzdnFxdDFkbG1wcXVhb2JpMmZhaHhzcDJsaDdzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sUUPe6OQwRj56MhPXn/giphy.gif",
    alt: "Mario power up",
  },
  {
    title: "🧩 Why This Works (somehow)",
    content: [
      "**From Nutrition:** Explain complex things simply, Deal with difficult clients",
      "**From Tech:** Build things that (sometimes) work, Pretend to be confident",
    ],
    quote: '"So now I\'m basically a tech translator for humans."',
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlia3dtNWU1dW0zazZsM3k3NW95M24waG81cGZuMG9uZzR4ejh4ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/a5viI92PAF89q/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlwc2R3Z2R1ajR5a2xkdWF6d2d5d3Q3YmdlMWF1Y25vZmExYmZxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XAdbHJywVjF5K/giphy.gif",
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
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHk0NHVrZXhlN3RnbTZ3dGZzanZlejhlZmVraTA5dWljczNyb3NmbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7qDSOvfaCO9b3MlO/giphy.gif",
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
                src={slide.gif}
                alt={slide.alt}
                className="max-w-full h-auto rounded-lg max-h-80 object-contain"
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