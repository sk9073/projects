"use client";

import { useState, useMemo } from "react";
import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";
import { Input } from "@/components/ui/input"; // Component exists
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export function ServicesClient() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const services = SERVICES;

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return services;

    return services.filter((service) =>
      service.title.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.category.toLowerCase().includes(lowerQuery)
    );
  }, [services, query]);

  // Reset pagination when search query changes
  if (query && currentPage !== 1) {
    setCurrentPage(1);
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="pl-10 h-12 text-lg"
          />
        </div>
        <div className="text-sm text-muted-foreground whitespace-nowrap">
          Showing {filteredServices.length} result{filteredServices.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Services Grid */}
      {paginatedServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {paginatedServices.map((service) => (
            <div key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/10 rounded-lg border border-dashed">
          <h3 className="text-lg font-semibold mb-2">No services found</h3>
          <p className="text-muted-foreground mb-6">
            We couldn't find any services matching "{query}".
          </p>
          <Button onClick={() => setQuery("")} variant="outline">
            Clear Search
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous Page</span>
          </Button>

          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className="w-9 h-9"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>
        </div>
      )}
    </div>
  );
}
