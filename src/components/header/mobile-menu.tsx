interface MobileMenuProps {
  toggleMenu: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function MobileMenu({ toggleMenu, isOpen }: MobileMenuProps) {
  if (!isOpen) return;

  const handleClick = () => {
    toggleMenu(false);
  };

  return (
    <div className="fixed top-16 inset-0 bg-black z-50 overflow-y-auto backdrop-blur-2xl">
      <div className="p-4 pt-8">
        <div className="mb-8">
          <p className="text-gray-500 text-sm mb-4">Product</p>
          <nav className="flex flex-col gap-4">
            <a
              href="/features"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Features
            </a>
            <a
              href="/integrations"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Integrations
            </a>
            <a
              href="/pricing"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Pricing
            </a>
            <a
              href="/changelog"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Changelog
            </a>
            <a
              href="/contact"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mb-8">
          <p className="text-gray-500 text-sm mb-4">Resources</p>
          <nav className="flex flex-col gap-4">
            <a
              href="/about"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              About
            </a>
            <a
              href="/customers"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Customers
            </a>
            <a
              href="/careers"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Careers
            </a>
            <a
              href="/contact"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Contact
            </a>
            <a
              href="/blog"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Blog
            </a>
            <a
              href="/method"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Method
            </a>
            <a
              href="/switch"
              className="text-white text-2xl font-semibold"
              onClick={handleClick}
            >
              Switch
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
