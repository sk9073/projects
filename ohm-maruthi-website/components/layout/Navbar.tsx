"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SearchSheet } from "@/components/search/SearchSheet";
import { cn } from "@/lib/utils";

const items = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/images/short-icon.png"
                alt="OHM MARUTHI Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary hidden md:inline-block">
              OHM MARUTHI INSURANCE
            </span>
            {/* Mobile: Logo only, no text to save space as requested */}
            <span className="sr-only">OHM MARUTHI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent")} prefetch={false}>
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <SearchSheet />
            <Button variant="outline" className="gap-2">
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </Button>
            <Button>Get a Quote</Button>
          </div>

          {/* Mobile Search Icon - Visible on all screens, but we hide the desktop one above to avoid duplicates if needed, 
              or simpler: Just make SearchSheet visible always and hide the buttons on mobile. 
              Actually, the previous code had SearchSheet inside 'hidden md:flex'. 
              Let's move SearchSheet OUT of 'hidden md:flex' so it appears on mobile too.
          */}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <SearchSheet />
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-20">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium transition-all hover:text-primary hover:pl-2 p-2 rounded-md hover:shadow-md hover:bg-muted/50"
                    onClick={() => setIsOpen(false)}
                    prefetch={false}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Button>
                  <Button className="w-full">Get a Quote</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
