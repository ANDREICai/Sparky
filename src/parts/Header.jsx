import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const menuRef = useRef(null); // mobile menu ref
  const menuButtonRef = useRef(null); // hamburger button ref

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Services", path: "/Services" },
    { label: "Contact", path: "/Contact" },
  ];

  // Handle scroll to show/hide header & close mobile menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const isScrollingUp =
            currentScrollY < lastScrollY.current || currentScrollY < 100;

          setShowHeader(isScrollingUp);

          // Close mobile menu if scrolling down
          if (!isScrollingUp && menuOpen) setMenuOpen(false);

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-black shadow-md"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-white text-2xl font-bold">
              MA Electricians
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {navigationItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                ref={menuButtonRef}
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                <div
                  className="w-6 h-0.5 bg-white mb-1 transition-transform duration-300"
                  style={{
                    transform: menuOpen
                      ? "rotate(45deg) translateY(6px)"
                      : "rotate(0)",
                  }}
                />
                <div
                  className="w-6 h-0.5 bg-white mb-1 transition-opacity duration-300"
                  style={{ opacity: menuOpen ? 0 : 1 }}
                />
                <div
                  className="w-6 h-0.5 bg-white transition-transform duration-300"
                  style={{
                    transform: menuOpen
                      ? "rotate(-45deg) translateY(-6px)"
                      : "rotate(0)",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                ref={menuRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-black overflow-hidden"
              >
                <div className="flex flex-col px-6 py-4 gap-4">
                  {navigationItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
