"use client"

import { useEffect, useRef, useState } from "react"

export default function FeaturesSection() {
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

  const features = [
    {
      title: "Write mails and replies",
      description: "Generate professional emails and responses with AI assistance. Create compelling content for any communication needs with intelligent suggestions and tone optimization."
    },
    {
      title: "Read PDFs and documents", 
      description: "Extract insights and information from any document format. Analyze, summarize, and get answers from your PDFs with advanced AI comprehension."
    },
    {
      title: "Scan images",
      description: "Analyze and extract information from images with powerful AI vision. Get detailed descriptions, text extraction, and insights from any visual content."
    },
    {
      title: "Write codes & programs",
      description: "Generate code in multiple programming languages. From simple scripts to complex applications, get AI-powered coding assistance for any project."
    },
    {
      title: "Research",
      description: "Conduct comprehensive research on any topic. Get accurate information, citations, and detailed analysis with AI-powered research capabilities."
    },
    {
      title: "Automation",
      description: "Automate repetitive tasks and workflows. Create intelligent automation solutions that save time and increase productivity across all your projects."
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2
            className={`font-medium mb-2 transition-all duration-1000 ${isVisible ? "animate-text-reveal" : ""}`}
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            More features
          </h2>
          <h3
            className={`font-medium transition-all duration-1000 ${isVisible ? "animate-text-reveal" : ""}`}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              animationDelay: "0.4s",
              animationFillMode: "both",
            }}
          >
            Promptverse AI offers to an individual
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${isVisible ? "animate-text-reveal" : ""}`}
              style={{
                animationDelay: `${0.6 + i * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <h4 
                className="font-medium mb-3 text-white"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                }}
              >
                {feature.title}
              </h4>
              <p 
                className="text-white/70 leading-relaxed"
                style={{
                  fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}