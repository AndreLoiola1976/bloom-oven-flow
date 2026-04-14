import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      style={{ top: scrolled ? 0 : '40px' }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <img src={logo} alt="The Bloom Oven" className="h-12 md:h-14" />

        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollTo("menu")}
            className="hidden md:block text-sm font-medium text-dark-foreground/60 hover:text-caramel transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hidden md:block text-sm font-medium text-dark-foreground/60 hover:text-caramel transition-colors"
          >
            About
          </button>
          <a
            href="https://instagram.com/thebloomoven"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-foreground/40 hover:text-caramel transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
