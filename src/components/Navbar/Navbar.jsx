import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "/service" },
  { id: 3, title: "Roadmap", link: "/roadmap" },
  { id: 4, title: "About Us", link: "/about" },  
];

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-30 min-h-[80px] bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">Career Guide</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link} className="inline-block py-2 px-3 hover:text-secondary">
                  {menu.title}
                </a>
              </li>
            ))}
            {isAuthenticated ? (
              <li>
                <button
                  className="primary-btn"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="primary-btn" onClick={loginWithRedirect}>
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <IoMdMenu className="text-4xl" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white w-full absolute top-20 left-0 z-20 overflow-hidden"
      >
        {isMenuOpen && (
          <ul className="flex flex-col items-center py-5 space-y-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link} className="block hover:text-secondary">
                  {menu.title}
                </a>
              </li>
            ))}
            {isAuthenticated ? (
              <li>
                <button
                  className="primary-btn"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="primary-btn" onClick={loginWithRedirect}>
                  Log In
                </button>
              </li>
            )}
          </ul>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;