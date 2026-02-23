"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export function HomeClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (category: string) => {
    // Toggle selection
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      // Scroll to services section
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Hero
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <Services selectedCategory={selectedCategory} />
    </>
  );
}
