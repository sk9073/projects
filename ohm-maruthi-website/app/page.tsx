import { HomeClient } from "@/components/home/HomeClient";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ohm Maruthi Insurance | Comprehensive Coverage You Can Trust",
  description: "Secure your future with Ohm Maruthi Insurance. We offer health, motor, life, travel, and business insurance solutions tailored to your needs.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeClient />
      <WhyChooseUs />
    </main>
  );
}
