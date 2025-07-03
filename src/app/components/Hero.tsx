"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stars = [
    { top: "10%", left: "15%", size: 4, opacity: 0.8, delay: 0, duration: 4.5 },
    { top: "20%", left: "85%", size: 3, opacity: 0.6, delay: 0.2, duration: 3.8 },
    { top: "15%", left: "75%", size: 5, opacity: 0.9, delay: 0.4, duration: 5.2 },
    { top: "35%", left: "10%", size: 3, opacity: 0.7, delay: 0.6, duration: 4.1 },
    { top: "45%", left: "90%", size: 4, opacity: 0.8, delay: 0.8, duration: 4.8 },
    { top: "25%", left: "45%", size: 3, opacity: 0.5, delay: 1.0, duration: 3.5 },
    { top: "60%", left: "20%", size: 4, opacity: 0.7, delay: 1.2, duration: 4.3 },
    { top: "70%", left: "80%", size: 3, opacity: 0.6, delay: 1.4, duration: 3.9 },
    { top: "80%", left: "15%", size: 5, opacity: 0.8, delay: 1.6, duration: 5.1 },
    { top: "85%", left: "70%", size: 3, opacity: 0.5, delay: 1.8, duration: 3.7 },
    { top: "30%", left: "60%", size: 4, opacity: 0.7, delay: 2.0, duration: 4.6 },
    { top: "50%", left: "5%", size: 3, opacity: 0.6, delay: 2.2, duration: 3.4 },
    { top: "40%", left: "95%", size: 4, opacity: 0.8, delay: 2.4, duration: 4.9 },
    { top: "65%", left: "50%", size: 3, opacity: 0.5, delay: 2.6, duration: 3.6 },
    { top: "75%", left: "40%", size: 5, opacity: 0.9, delay: 2.8, duration: 5.3 },
  ]

  const particles = [
    { left: "10%", delay: 0, duration: 8 },
    { left: "30%", delay: 2, duration: 10 },
    { left: "60%", delay: 4, duration: 9 },
    { left: "80%", delay: 6, duration: 11 },
  ]

  return (
    <section
      className="relative flex flex-col items-center justify-center pt-12 min-h-[100svh] overflow-hidden py-8 sm:py-12 md:py-16"
      style={{
        background: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)",
      }}
    >
      {/* Fundo blur */}
      <div className="absolute inset-0 animate-fade-in">
        <Image
          src="/blur.png"
          alt="Background blur"
          fill
          className="object-cover pointer-events-none select-none opacity-60"
          priority
          quality={100}
          style={{ zIndex: 0 }}
        />
      </div>

      {/* efeito do ,mouse */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          zIndex: 1,
          transition: 'background 0.3s ease-out',
        }}
      />

      {/* particula */}
      {particles.map((particle, index) => (
        <div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-particle"
          style={{
            left: particle.left,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            zIndex: 1,
          }}
        />
      ))}

      {/* estrela */}
      {stars.map((star, index) => (
        <div
          key={`star-${index}`}
          className={`absolute pointer-events-none select-none transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{
            top: star.top,
            left: star.left,
            zIndex: 2,
            transitionDelay: `${star.delay}s`,
          }}
        >
          <div
            className="bg-white rounded-full animate-twinkle hover:animate-glow transition-all duration-300"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        </div>
      ))}

      {/* conteud principal */}
      <div className="relative  z-10 flex flex-col items-center text-center w-full max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <span
          className={`text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/90 mb-2 sm:mb-3 tracking-wider animate-text-reveal ${
            isLoaded ? "animate-bounce-soft" : ""
          }`}
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Promptverse AI
        </span>

        <h1
          className={`font-medium mb-4 sm:mb-6 leading-[1.1] sm:leading-tight animate-text-reveal ${
            isLoaded ? "animate-float" : ""
          }`}
          style={{
            color: "#ffffff",
            fontSize: "clamp(2rem, 8vw, 4.5rem)",
            animationDelay: "0.4s",
            animationFillMode: "both"
          }}
        >
          <span className="inline-block animate-scale-in" style={{ animationDelay: "0.6s" }}>
            Find Inspiration.
          </span>
          <br />
          <span className="inline-block animate-scale-in" style={{ animationDelay: "0.8s" }}>
            Create, Generate,
          </span>
          <br />
          <span className="inline-block animate-scale-in" style={{ animationDelay: "1.0s" }}>
            Produce & Automate.
          </span>
        </h1>

        <p
          className="text-white/60 font-regular mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto animate-text-reveal"
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)",
            animationDelay: "1.2s",
            animationFillMode: "both"
          }}
        >
          Welcome to Promptverse. Effortlessly create content, explore endless prompts, and stay ahead with real-time
          trends. Automate emails, social media, and more while our AI extracts knowledge from any document or URL.
          Experience a stunning, futuristic design that boosts productivity.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-lg mx-auto animate-scale-in"
          style={{ animationDelay: "1.4s", animationFillMode: "both" }}
        >
          <button className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white border-opacity-40 text-white font-medium hover:bg-white hover:text-black hover:border-opacity-100 hover:scale-105 hover:shadow-lg hover:shadow-white/20 hover:animate-glow transition-all duration-500 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap">
          Start Generating
          <Image alt="teste" src="/varinha.svg" width={20} height={20} />
          </button>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 hover:scale-105 hover:shadow-lg hover:shadow-white/30 hover:animate-pulse-soft transition-all duration-500 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap">
            Download
          </button>
        </div>
      </div>
    </section>
  )
}
