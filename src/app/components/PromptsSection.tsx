"use client"

import { useEffect, useRef, useState } from "react"

export default function PromptsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const prompts = [
    "Write a attractive hero title for the following website",
    "Write a attractive hero title for the following website",
    "Write a attractive hero title for the following website",
    "Write a attractive hero title for the following website",
    "Write a attractive hero title for the following website",
    "Write a attractive hero title for the following website",
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2
          className={`font-semibold mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? "animate-text-reveal" : ""}`}
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          Create more with Promptverse
        </h2>
        <p
          className={`text-white/70 leading-relaxed max-w-2xl mx-auto ${isVisible ? "animate-text-reveal" : ""}`}
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            animationDelay: "0.4s",
            animationFillMode: "both",
          }}
        >
          Discover endless creativity with Promptverse. Generate diverse content effortlessly using prompts. Stay
          updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a
          sleek, futuristic design. Create more, effortlessly.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {prompts.map((prompt, i) => (
          <div
            key={i}
            className={`bg-neutral-900/80 rounded-lg p-5 sm:p-6 flex flex-col gap-3 border border-neutral-800/50 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-300 cursor-pointer ${isVisible ? "animate-scale-in" : ""}`}
            style={{
              animationDelay: `${0.6 + i * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            <span
              className="text-white/90 leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 1.8vw, 0.95rem)",
              }}
            >
              {prompt} ↗
            </span>
            <a
              href="https://zeltalabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 break-words"
              style={{
                fontSize: "clamp(0.75rem, 1.6vw, 0.8rem)",
              }}
            >
              https://zeltalabs.com/
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}