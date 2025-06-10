
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
            <img 
              src="/lovable-uploads/f000cc74-21aa-4706-b577-a875d9c46b84.png" 
              alt="Shree Krishna Edu Plaza Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className={`ml-2 font-bold text-lg ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            Shri Krishna Edu Plaza
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors">Home</a>
          <a href="#about" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors">About</a>
          <a href="#courses" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors">Courses</a>
          <a href="#features" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors">Features</a>
          <a href="#contact" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#home" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#courses" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors" onClick={() => setIsOpen(false)}>Courses</a>
            <a href="#features" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#contact" className="hover:text-[hsl(var(--skep-turquoise))] transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
