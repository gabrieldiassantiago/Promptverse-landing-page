"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function CTASection() {
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

  const decorativeElements = [
    { top: "10%", left: "10%", size: 100, rotation: 45 }, 
    { top: "10%", right: "10%", size: 50, rotation: 0 }, 
    { bottom: "10%", left: "10%", size: 50, rotation: 30 }, 
    { bottom: "10%", right: "10%", size: 100, rotation: 60 },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden flex items-center justify-center"
    >
      <div className="relative max-w-5xl w-full bg-[#0E0E0E] p-8 sm:p-12 md:p-20 rounded-2xl mx-auto text-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
            backgroundImage: "url('/blur.png')",
            backgroundSize: "cover",
            backgroundPosition: "top rigth", 
            filter: "blur(24px)",
            opacity: 0.3,
        }}
        ></div>

        {decorativeElements.map((element, i) => (
          <div
            key={i}
            className={`absolute pointer-events-none transition-all duration-1000 z-10 ${
              isVisible
                ? "opacity-30 scale-100"
                : "opacity-0 scale-0"
            }`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
              transform: `rotate(${element.rotation}deg)`,
              transitionDelay: `${i * 0.2}s`,
            }}
          >
            <Image
              src="/star2.svg"
              alt="Star decorative"
              width={element.size}
              height={element.size}
           
            />
          </div>
        ))}
     
        <div className="relative z-20">
          <h2
            className={`font-medium mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              transitionDelay: "0.2s",
            }}
          >
            Promptverse has no limitation.
          </h2>
          <p
            className={`font-medium mb-8 sm:mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              transitionDelay: "0.4s",
            }}
          >
            Get Started in a journey with promptverse.
          </p>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: "0.6s",
            }}
          >
            <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 text-base sm:text-lg">
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}