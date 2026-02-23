"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, FileText } from "lucide-react";
import { SERVICES } from "@/lib/data";
import Link from "next/link";

export function SearchSheet() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Filter services based on query
  const filteredServices = query.trim() === ""
    ? []
    : SERVICES.filter(service =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );

  const handleSelect = (slug: string) => {
    setOpen(false);
    router.push(`/services/${slug}`);
  };

  // Clear query when closed
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="relative h-10 w-32 px-3 justify-start bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 border-input md:w-64 md:px-4"
        >
          <Search className="h-4 w-4 mr-2" />
          <span className="inline-block font-normal text-sm md:hidden">
            Search...
          </span>
          <span className="hidden md:inline-block font-normal text-sm">
            Search services...
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full pt-16 md:pt-4 h-[100dvh] md:h-auto overflow-y-auto">
        <SheetHeader className="max-w-3xl mx-auto w-full">
          <SheetTitle className="text-left mb-4">Search Services</SheetTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              className="flex h-14 md:h-12 w-full rounded-md border border-input bg-background px-10 py-2 text-base md:text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search for insurance (e.g., 'Cyber', 'Health')..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </SheetHeader>

        <div className="max-w-3xl mx-auto w-full mt-6 pb-6">
          {query.trim() === "" ? (
            <div className="text-center py-10 text-muted-foreground">
              <p>Type to search for insurance products and services.</p>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid gap-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">Results</p>
              {filteredServices.map((service) => (
                <button
                  key={service.slug}
                  onClick={() => handleSelect(service.slug)}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No results found for "{query}".</p>
              <p className="text-sm text-muted-foreground mt-1">Try checking for typos or using different keywords.</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
