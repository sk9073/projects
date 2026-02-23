import { ServicesClient } from "@/components/services/ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ohm Maruthi Insurance",
  description: "Explore our comprehensive range of Personal, Business, and Industrial insurance services designed to protect what matters most to you.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Our Insurance Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive protection solutions tailored to your unique needs.
            Browse our wide range of insurance products below.
          </p>
        </div>
      </section>

      {/* Services Grid with Search & Pagination */}
      <ServicesClient />
    </div>
  );
}
