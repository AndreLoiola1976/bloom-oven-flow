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

  const navLinkClass = scrolled
    ? "text-foreground/70 hover:text-sage"
    : "text-white/90 hover:text-white drop-shadow-md";

  const iconClass = scrolled
    ? "text-foreground/50 hover:text-sage"
    : "text-white/80 hover:text-white drop-shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md shadow-foreground/5"
          : "bg-transparent"
      }`}
      style={{ top: scrolled ? 0 : '40px' }}
    >
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-8">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? ""
              : "bg-cream/40 backdrop-blur-sm rounded-full px-3 py-1"
          }`}
        >
          <img src={logo} alt="The Bloom Oven" className="h-12 md:h-14" />
        </div>

        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollTo("menu")}
            className={`hidden md:block text-sm font-medium transition-colors ${navLinkClass}`}
          >
            Menu
          </button>
          <button
            onClick={() => scrollTo("about")}
            className={`hidden md:block text-sm font-medium transition-colors ${navLinkClass}`}
          >
            About
          </button>
          <a
            href="https://instagram.com/thebloomoven"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${iconClass}`}
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
