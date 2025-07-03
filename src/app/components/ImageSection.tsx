"use client"

import { useEffect, useRef, useState } from "react"

const images = [
  { src: "/image1.png", alt: "Imagem grande" }, // grande
  { src: "/image2.png", alt: "Imagem 2" },
  { src: "/image3.png", alt: "Imagem 3" },
  { src: "/image4.png", alt: "Imagem 4" },
  { src: "/image5.png", alt: "Imagem 5" },
]

export default function ImagesSection() {
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
          Images like never seen before
        </h2>
        <p
          className={`text-white/70 leading-relaxed max-w-2xl mx-auto ${isVisible ? "animate-text-reveal" : ""}`}
          style={{
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            animationDelay: "0.4s",
            animationFillMode: "both",
          }}
        >
          Generate endless creativity with Promptverse. Generate diverse content effortlessly using prompts. Stay
          updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a
          sleek, futuristic design. Create more, effortlessly.
        </p>
      </div>

      <div
        className={`w-full max-w-4xl mx-auto ${isVisible ? "animate-scale-in" : ""}`}
        style={{
          animationDelay: "0.6s",
          animationFillMode: "both",
        }}
      >
        <div className="relative">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 items-stretch">
            <div className="col-span-1 row-span-2 flex flex-col h-full">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover rounded-lg min-h-[300px] max-h-[600px]"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-4 sm:gap-6">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full object-cover rounded-lg"
                style={{ aspectRatio: "1/1" }}
              />
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full object-cover rounded-lg"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-4 sm:gap-6">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full object-cover rounded-lg"
                style={{ aspectRatio: "1/1" }}
              />
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full object-cover rounded-lg"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}