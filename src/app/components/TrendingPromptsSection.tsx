"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function TrendingPromptsSection() {
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
          See Trending Prompts
        </h2>
        <p
          className={`text-white/70 leading-relaxed max-w-2xl mx-auto mb-8 ${isVisible ? "animate-text-reveal" : ""}`}
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

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto ${isVisible ? "animate-scale-in" : ""}`}
          style={{
            animationDelay: "0.6s",
            animationFillMode: "both",
          }}
        >
          <button className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white border-opacity-40 text-white font-medium hover:bg-white hover:text-black hover:border-opacity-100 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap">
            Start Generating
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap">
            Download
          </button>
        </div>
      </div>

      <div
        className={`w-full max-w-6xl mx-auto ${isVisible ? "animate-scale-in" : ""}`}
        style={{
          animationDelay: "0.8s",
          animationFillMode: "both",
        }}
      >
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-neutral-800/50">
          <Image
            src="/dashboard-mockup.png"
            alt="Promptverse Dashboard Interface"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}