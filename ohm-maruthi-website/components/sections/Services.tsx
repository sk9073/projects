import {
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SERVICES } from "@/lib/data";

interface ServicesProps {
  selectedCategory?: string | null;
}

export function Services({ selectedCategory }: ServicesProps) {
  const filteredServices = selectedCategory
    ? SERVICES.filter(service => service.category === selectedCategory)
    : SERVICES;
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            {selectedCategory ? `${selectedCategory} Insurance Products` : "Our Insurance Products"}
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of insurance solutions tailored to meet your unique needs.
            Explore our products and find the right coverage for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto font-semibold text-secondary gap-2" asChild>
                  <Link href={`/services/${service.slug}`} prefetch={false}>
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
