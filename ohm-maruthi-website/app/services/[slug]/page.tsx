import { SERVICES } from "@/lib/data";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Ohm Maruthi Insurance`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors"
            prefetch={false}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">
              {service.category} Insurance
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Overiew</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.longDescription}
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900">Need specific coverage?</h3>
                <p className="text-blue-700 mt-1">
                  We customize policies to match your exact requirements.
                </p>
              </div>
              <Button size="lg" className="whitespace-nowrap">
                Talk to an Expert
              </Button>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <ServiceContactForm serviceTitle={service.title} />

            {/* Quick Links */}
            <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-bold text-gray-900 mb-4">Other {service.category} Services</h3>
              <nav className="space-y-2">
                {SERVICES.filter(s => s.category === service.category && s.slug !== service.slug).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary transition-colors text-sm font-medium border border-transparent hover:border-gray-200"
                  >
                    {s.title}
                  </Link>
                ))}
                {SERVICES.filter(s => s.category === service.category && s.slug !== service.slug).length === 0 && (
                  <p className="text-sm text-gray-500 italic">No other services in this category.</p>
                )}
              </nav>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
