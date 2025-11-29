import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative max-w-[1400px] mx-auto px-6  rounded-xl py-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Wellness Cart</h3>
          <p className="text-gray-700">A minimal ecommerce starter template</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-700">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="" className="hover:underline">About</Link></li>
            <li><Link to="" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Self-Care */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Self-Care</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link to="" className="hover:underline">
                Skincare
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Haircare
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Bodycare
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Active Life */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Active Life</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link to="" className="hover:underline">
                Gym Equipment
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Recovery
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Home Essentials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Home Essentials</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link to="" className="hover:underline">
                Plants
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Blankets
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Night Lamps
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline">
                Mindfulness Books
              </Link>
            </li>
          </ul>
        </div>
      </div>

{/* Bottom row */}
<div
  className="
    container mx-auto 
    flex flex-row 
    flex-nowrap 
    justify-center 
    items-center 
    gap-2 
    px-2 py-3 
    text-center 
    overflow-x-auto
  "
>
  <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
    © {new Date().getFullYear()}{" "}
    <span className="font-semibold text-[#10B981]">Rani Rangari</span>
  </p>

  {/* Social Icons */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <a
      href="https://github.com/rangari-rani"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-[#10B981] transition-colors"
      aria-label="GitHub"
    >
      <FaGithub size={16} />
    </a>

    <a
      href="https://www.linkedin.com/in/rani-rangari"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-[#10B981] transition-colors"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={16} />
    </a>
  </div>

  <a
    href="https://buildwithrani.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs sm:text-sm font-medium text-teal-500 hover:text-[#10B981] transition-colors whitespace-nowrap"
  >
    buildwithrani.com
  </a>
</div>

    </footer>
  );
};

export default Footer;
