"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function AudioSection() {
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
    <section ref={sectionRef} className="w-full py-10 sm:py-16 md:py-20 px-2 sm:px-6 lg:px-8 bg-black text-white flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto mb-10 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={`font-semibold mb-3 sm:mb-4 transition-all duration-1000 ${isVisible ? "animate-text-reveal" : ""}`}
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            Generate audio and music
          </h2>
          <p
            className={`text-white/70 leading-relaxed max-w-xl mx-auto ${isVisible ? "animate-text-reveal" : ""}`}
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              animationDelay: "0.4s",
              animationFillMode: "both",
            }}
          >
            Discover endless creativity with Promptverse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.
          </p>
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto bg-[#181818] p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`${isVisible ? "animate-text-reveal" : ""}`}
            style={{
              animationDelay: "0.6s",
              animationFillMode: "both",
            }}
          >
            <h3
              className="font-semibold mb-4 sm:mb-6"
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.7rem)",
              }}
            >
              Enhance Your Projects with Ultra-Realistic AI Voices
            </h3>
            <p className="text-white/70 leading-relaxed mb-4 sm:mb-8" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
              Create engaging voice content with unique AI Voices perfect for your audience.
            </p>
            <p className="text-white/70 leading-relaxed mb-6 sm:mb-8" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
              Generate Conversational, Long-form or Short-form Voice Content With Consistent Quality and Performance.
            </p>
            <p className="text-white/70 leading-relaxed mb-6 sm:mb-8" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
              Secure and Private Voice Generations with Full Commercial and Copyrights
            </p>

            <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
                "AI Composition",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-white/80 hover:bg-neutral-700/50 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold ml-1 hover:bg-neutral-200 transition-colors duration-200">
                Generate now
              </button>
            </div>
          </div>

          <div
            className={`${isVisible ? "animate-scale-in" : ""} flex justify-center w-full`}
            style={{
              animationDelay: "0.8s",
              animationFillMode: "both",
            }}
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[420px] aspect-square mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image alt="audio mockup" src="/audio.png" fill style={{objectFit: 'cover'}} />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                  aria-label="Play audio"
                >
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#fff" fillOpacity="0.7"/>
                    <polygon points="14,11 26,18 14,25" fill="#E11D48" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}