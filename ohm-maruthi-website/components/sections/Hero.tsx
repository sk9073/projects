"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building2, Users, Briefcase, UserCheck, Heart, ChevronLeft, ChevronRight } from "lucide-react";

// User provided hex codes for gradient/cards
const colors = [
  "#7CA1D9", // Blueish
  "#BEC3EA", // Purpleish
  "#D7C8E9", // Light Purple
  "#DFC3E3", // Orchid
  "#f4abd6ff", // Pink
];

const categories = [
  {
    title: "Businesses",
    icon: Building2,
    description: "Protection for your enterprise",
    color: colors[0],
    id: "Business",
  },
  {
    title: "Industries",
    icon: Briefcase,
    description: "Tailored industrial coverage",
    color: colors[1],
    id: "Industrial",
  },
  {
    title: "Corporate",
    icon: Users,
    description: "Group insurance plans",
    color: colors[2],
    id: "Corporate",
  },
  {
    title: "Professionals",
    icon: UserCheck,
    description: "Liability and indemnity",
    color: colors[3],
    id: "Professional",
  },
  {
    title: "Families",
    icon: Heart,
    description: "Health and life security",
    color: colors[4],
    id: "Personal",
  },
];

interface HeroProps {
  onSelectCategory?: (category: string) => void;
  selectedCategory?: string | null;
}

export function Hero({ onSelectCategory, selectedCategory }: HeroProps) {
  const activeCategory = selectedCategory;
  const [showCategoryHint, setShowCategoryHint] = useState(false);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (mobileContainerRef.current) {
      mobileContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (mobileContainerRef.current) {
      mobileContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory?.(categoryId);
  };

  const handleGetStarted = () => {
    const categoriesSection = document.getElementById("categories-section");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth", block: "center" });
      setShowCategoryHint(true);
      setTimeout(() => setShowCategoryHint(false), 2000); // Reset after animation
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Insurance Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 via-primary-500/70 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col justify-center min-h-[600px] py-16 text-white pl-8 md:pl-20 lg:pl-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
            INSURANCE COVER <br />
            <span className="text-primary">YOU CAN TRUST</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md">
            Partnered with top insurers to provide comprehensive coverage for
            businesses, families, and individuals. Your security is our priority.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Category Cards */}
      <div id="categories-section" className="relative z-20 pb-16">
        <div className="container mx-auto px-4">

          {/* Desktop Grid View */}
          <div className={`hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 shadow-2xl rounded-lg overflow-hidden transition-all duration-500 -mt-20 ${showCategoryHint ? 'ring-2 ring-secondary ring-offset-2 ring-offset-transparent scale-[1.02]' : ''}`}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.id)}
                className={`group relative p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 w-full text-left
                  ${activeCategory === category.id
                    ? "bg-black/30 shadow-[inset_0_4px_4px_rgba(0,0,0,0.5)] brightness-90"
                    : "hover:brightness-110"}`}
                style={{ backgroundColor: category.color }}
              >
                <div className={`p-3 rounded-full transition-all duration-300 ${activeCategory === category.id ? "bg-black/30 text-white" : "bg-black/20 text-black/80"} backdrop-blur-sm`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeCategory === category.id ? "text-black/50" : "text-black/80"}`}>{category.title}</h3>
                  <p className={`text-xs mt-1 font-medium ${activeCategory === category.id ? "text-black/50" : "text-black/80"}`}>{category.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden -mt-10 relative group">

            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md backdrop-blur-sm -ml-2 border border-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>

            {/* Carousel Container */}
            <div
              ref={mobileContainerRef}
              className="overflow-x-auto pb-6 -mx-4 px-4 flex gap-4 w-full snap-x snap-mandatory scrollbar-hide"
            >
              <div className={`flex gap-4 w-max ${showCategoryHint ? 'animate-pulse' : ''}`}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`relative p-6 flex flex-col items-center text-center gap-3 rounded-xl shadow-lg w-[85vw] snap-center transition-all duration-300
                    ${activeCategory === category.id
                        ? "bg-black/30 shadow-inner brightness-90 scale-95"
                        : "active:scale-95"}`}
                    style={{ backgroundColor: category.color }}
                  >
                    <div className={`p-3 rounded-full transition-all ${activeCategory === category.id ? "bg-black/30 text-white" : "bg-black/20 text-black/80"} backdrop-blur-sm`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${activeCategory === category.id ? "text-black/50" : "text-black/80"}`}>{category.title}</h3>
                      <p className={`text-xs mt-1 font-medium ${activeCategory === category.id ? "text-black/50" : "text-black/80"}`}>{category.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-md backdrop-blur-sm -mr-2 border border-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
