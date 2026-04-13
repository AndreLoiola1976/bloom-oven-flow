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
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <img src={logo} alt="The Bloom Oven" className="h-12 md:h-14" />

        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollTo("menu")}
            className="hidden md:block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hidden md:block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </button>
          <a
            href="https://instagram.com/thebloomoven"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors"
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
