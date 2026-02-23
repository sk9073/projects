import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ohm Maruthi Insurance",
  description: "Get in touch with Ohm Maruthi Insurance for all your insurance needs. Visit our head office or reach out to our branch offices across Tamil Nadu.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We're here to help! Reach out to us for quotes, support, or any inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Form Column */}
          <div className="lg:col-span-1 lg:order-last">
            <div className="sticky top-24">
              <GeneralContactForm />
            </div>
          </div>

          {/* Office Info Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Head Office */}
            <div className="bg-white rounded-xl shadow-sm p-8 border">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Head Office</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600 mt-1 leading-relaxed">
                        No. 123, Gandhi Road,<br />
                        Vellore - 632004,<br />
                        Tamil Nadu, India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+914162222222" className="hover:text-primary transition-colors">+91 416 222 2222</a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:info@ohmmaruthi.com" className="hover:text-primary transition-colors">info@ohmmaruthi.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Offices */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Branch Offices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                {/* Branch 1 - Trichy */}
                <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Trichy</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <p className="text-gray-600">
                        No. 45, Salai Road,<br />
                        Woraiyur, Trichy - 620003
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                      <a href="tel:+914311234567" className="text-gray-600 hover:text-primary">+91 431 1234 5678</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                      <a href="mailto:trichy@ohmmaruthi.com" className="text-gray-600 hover:text-primary">trichy@ohmmaruthi.com</a>
                    </div>
                  </div>
                </div>

                {/* Branch 2 - Coimbatore */}
                <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Coimbatore</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <p className="text-gray-600">
                        78, Avinashi Road,<br />
                        Peelamedu, Coimbatore - 641004
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                      <a href="tel:+914221234567" className="text-gray-600 hover:text-primary">+91 422 1234 5678</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                      <a href="mailto:coimbatore@ohmmaruthi.com" className="text-gray-600 hover:text-primary">coimbatore@ohmmaruthi.com</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
