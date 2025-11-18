import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-lg bg-background/80 border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold glow-text-cyan"
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative ${
                    location.pathname === item.path
                      ? "text-primary glow-text-cyan"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`text-2xl ${
                    location.pathname === item.path
                      ? "text-primary glow-text-cyan"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
