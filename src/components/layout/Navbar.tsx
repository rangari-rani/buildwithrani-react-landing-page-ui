import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Mobile Hamburger Button FIRST */}
        <button
          className="md:hidden block text-2xl text-teal-600 mr-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl sm:text-2xl font-semibold text-teal-600 tracking-wide">
            WellnessCart 🌿
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="" className="hover:text-teal-600">About</Link></li>
          <li><Link to="" className="hover:text-teal-600">Services</Link></li>
          <li><Link to="" className="hover:text-teal-600">Contact</Link></li>
        </ul>

        {/* Login Button (Desktop) */}
        <Link
          to=""
          className="hidden md:block text-sm font-medium border border-teal-500 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
        >
          Login
        </Link>
      </nav>

  {/* Mobile Slide Menu (Left Half Drawer) */}
{menuOpen && (
  <div
    className="
      md:hidden 
      absolute top-full left-0 
      w-1/2 min-w-[220px]
        h-[calc(100vh-64px)]  
      bg-white  
      animate-fade-down
      z-50
    "
  >
  <ul className="flex flex-col items-start py-4 px-6 text-gray-700 font-medium space-y-6">

  <li className="w-full">
    <Link to="" onClick={() => setMenuOpen(false)}>
      <div>
        <span className="text-base font-medium">About</span>
        <p className="text-xs text-gray-500">
          Learn who we are and what we do
        </p>
      </div>
    </Link>
  </li>

  <li className="w-full">
    <Link to="" onClick={() => setMenuOpen(false)}>
      <div>
        <span className="text-base font-medium">Services</span>
        <p className="text-xs text-gray-500">
          Explore our wellness programs
        </p>
      </div>
    </Link>
  </li>

  <li className="w-full">
    <Link to="" onClick={() => setMenuOpen(false)}>
      <div>
        <span className="text-base font-medium">Contact</span>
        <p className="text-xs text-gray-500">
          Get in touch with our support team
        </p>
      </div>
    </Link>
  </li>

  <li className="pt-2 w-full">
    <Link
      to="/login"
      className="
        block text-center border border-teal-500 px-4 py-2 rounded-md 
        bg-teal-500 text-white hover:bg-teal-600 transition
      "
      onClick={() => setMenuOpen(false)}
    >
      Login
    </Link>
  </li>

</ul>

  </div>
)}

    </header>
  );
}
