import { StatCounter } from "@/components/ui/StatCounter";
import { Award, Users, Briefcase, TrendingUp, Handshake } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ohm Maruthi Insurance",
  description: "Learn about Ohm Maruthi Insurance, our history, values, and commitment to providing the best insurance solutions since 2003.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-36 text-primary-foreground bg-gradient-to-br from-primary via-primary to-slate-900">
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Optional soft radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-lg md:text-xl font-medium opacity-80 mb-6 tracking-widest uppercase">
            With unending thoughts on customers, Ohm Maruthi is
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            Where Service is More <br className="hidden md:block" />
            <span className="text-secondary">
              A Delight Than Duty
            </span>
          </h1>
        </div>
      </div>

      {/* Stats Section - Overlapping Hero */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCounter end={2003} label="A Tradition of Excellence" className="bg-white text-[#0F172A] shadow-xl border border-[#E2E8F0]" />
          <StatCounter end={2} label="Offices" className="bg-white text-[#0F172A] shadow-xl border border-[#E2E8F0]" />
          <StatCounter end={50} suffix="+" label="Dedicated Team" className="bg-white text-[#0F172A] shadow-xl border border-[#E2E8F0]" />
          <StatCounter end={2000} suffix="+" label="Happy Customers" className="bg-white text-[#0F172A] shadow-xl border border-[#E2E8F0]" />
        </div>
      </div>

      {/* How We Started */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-secondary font-bold tracking-widest uppercase mb-2">Our Stories</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Find Out How We Started</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12 space-y-6 text-lg text-gray-700 leading-relaxed relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <TrendingUp className="w-64 h-64 text-primary" />
            </div>
            <p>
              <span className="text-6xl float-left mr-3 mt-[-15px] text-primary font-serif">“</span>
              Every great journey begins with a single step, but ours began with a vision to redefine insurance service.
            </p>
            <p>
              Established in 2003, Ohm Maruthi Insurance started as a humble initiative to bridge the gap between complex insurance policies and the common man's understanding. Our founder, having witnessed the struggles of individuals and businesses in navigating the insurance landscape, decided to create a firm that prioritized clarity, transparency, and genuine care.
            </p>
            <p>
              From a small office in Vellore, we have grown into a trusted name across Tamil Nadu. Our expansion to Chennai, Trichy, Madurai, and Coimbatore wasn't just about opening new branches; it was about extending our hand of trust to more families and businesses.
            </p>
            <p>
              Today, we stand proud not just of our growth, but of the thousands of claims we've settled and the peace of mind we've delivered. We didn't just build a business; we built a legacy of trust.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-20 mb-20 skew-y-1 relative">
        <div className="absolute inset-0 bg-gray-100 -skew-y-1" />
        <div className="container mx-auto px-4 relative z-10 -skew-y-1">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">Reason Why Choose Us</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 ring-4 ring-blue-50 group-hover:ring-blue-200">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">EXPERIENCE</h3>
              <p className="text-gray-600 leading-relaxed">
                With over two decades in the industry, we bring a depth of knowledge that ensures you get the right coverage for your specific needs. We've seen it all and solved it all.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 ring-4 ring-purple-50 group-hover:ring-purple-200">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">EXPERTISE</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of certified professionals who understand the nuances of every policy. We don't just sell insurance; we adhere to best practices in risk management and portfolio optimization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 ring-4 ring-indigo-50 group-hover:ring-indigo-200">
                <Handshake className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">TRUST</h3>
              <p className="text-gray-600 leading-relaxed">
                Trust is the cornerstone of our business. We believe in complete transparency, honest advice, and being there for you when it matters most – during a claim.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Model */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">Business Model</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              { title: "Understand Business & Insurable Risks", desc: "We begin by thoroughly analyzing your business operations to identify potential risks and gaps in your current coverage." },
              { title: "Insurance Policy Placement & Scrutiny", desc: "We negotiate with top insurers to get you the best terms and meticulously scrutinize the policy wordings to ensure no surprises." },
              { title: "Policy Administration & Renewal", desc: "We handle all administrative tasks, endorsements, and ensure timely renewals so your coverage never lapses." },
              { title: "Claim Support", desc: "Our dedicated claims team guides you through the entire process, advocating for you to ensure a fair and speedy settlement." }
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 group transition-all duration-300 hover:translate-x-2"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg border border-primary/20">
                    {index + 1}
                  </div>
                  {index !== 3 && (
                    <div className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-12 bg-primary/20"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 p-12 shadow-xl border border-primary/10">
            <div className="flex flex-col items-center justify-center text-center">
              <Users className="w-24 h-24 text-primary/30 mb-6" />

              <h3 className="text-2xl font-semibold text-primary mb-4">
                Customer-Centric Approach
              </h3>

              <p className="text-muted-foreground max-w-md leading-relaxed">
                Our business model is built around one core principle: putting the customer's interest above all else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
