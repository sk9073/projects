import { ShieldCheck, Clock, Award, Headphones } from "lucide-react";

const features = [
  {
    title: "Trusted Protection",
    description: "Decades of experience in providing reliable insurance solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Claims Process",
    description: "Hassle-free and quick claim settlements when you need them most.",
    icon: Clock,
  },
  {
    title: "Best Plans",
    description: "Curated plans from top insurers to suit your specific needs.",
    icon: Award,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team available round the clock for assistance.",
    icon: Headphones,
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            Why Choose OHM MARUTHI?
          </h2>
          <p className="text-muted-foreground text-lg">
            We are committed to delivering excellence and trust in every policy we offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
