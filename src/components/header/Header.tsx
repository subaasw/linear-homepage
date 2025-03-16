import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaNavigationMenu } from "@/components/header/megamenu";
import MobileMenu from "@/components/header/mobile-menu";
import Logo from "@/components/Icons/SiteLogo";

export default function Header() {
  const [isOpen, toggleMenu] = useState(false);

  const handleMobileMenuClick = () => {
    toggleMenu((prev) => {
      document.body.style = prev ? "overflow: initial" : "overflow: hidden;";
      return !prev;
    });
  };

  return (
    <>
      <header className="border-b border-b-white/10 backdrop-blur-sm fixed z-50 w-full bg-[#0a0a0a]/80">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="/">
            <Logo />
          </a>
          <MegaNavigationMenu />

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-block rounded-8 hover:bg-neutral-900 text-gray-400 py-2 px-3 font-medium text-sm hover:text-alabaster transition-all duration-150"
            >
              Login
            </a>
            <Button
              variant="default"
              size="default"
              className="text-sm bg-white/85 text-[#08090a] hover:bg-white/90 rounded-8 px-3 font-medium"
            >
              Sign Up
            </Button>

            <Button
              className="md:hidden outline-0"
              onClick={handleMobileMenuClick}
              variant="ghost"
              size="icon"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <MenuIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
