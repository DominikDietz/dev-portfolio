import { navItems } from "@/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-light-bg/80 dark:bg-dark-bg/80 fixed z-50 w-full shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="bg-clip-text text-2xl font-bold">
              Dominik Dietz
            </span>
          </a>

          <div className="hidden items-center space-x-10 md:flex">
            {navItems.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="hover:text-primary/80 font-medium transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button
              type="button"
              variant="ghost"
              aria-label="Toggle mobile menu"
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ?
                <X />
              : <Menu />}
            </Button>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="bg-light-bg dark:bg-dark-bg absolute w-full p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            {navItems.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="hover:text-primary/80 font-medium transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
