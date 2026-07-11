import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 transition-all duration-100 py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <img
          src="/backstep-logo-transparan.png"
          alt="Logo Backstep"
          href="#"
          className="h-7 object-contain"
        />

        {/* Dekstop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="border rounded-full px-2 py-1 flex items-center gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.hred}
                key={index}
                className=" px-4 py-2 text-sm text-foreground hover:text-primary-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-sm hidden md:block rounded-full bg-black text-primary-foreground px-4 py-2 font-medium transition">
          <button>Contact Us</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-primary-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <button
              className="text-sm rounded-full bg-primary-foreground text-surface px-4 py-2 font-medium transition"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
