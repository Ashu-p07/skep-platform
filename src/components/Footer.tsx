
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-1">
                <img 
                  src="/lovable-uploads/f000cc74-21aa-4706-b577-a875d9c46b84.png" 
                  alt="Shree Krishna Edu Plaza Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-lg ml-2">Shri Krishna Edu Plaza</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming education through Sanskar, Education, and Discipline.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Gujarati Medium</span></li>
              <li><span className="text-gray-400">English Medium</span></li>
              <li><span className="text-gray-400">8th Standard</span></li>
              <li><span className="text-gray-400">9th Standard</span></li>
              <li><span className="text-gray-400">10th Standard</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <address className="text-gray-400 not-italic">
              Shri Krishna Edu Plaza,<br />
              Talod, Sabarkantha,<br />
              Gujarat, India
            </address>
            <p className="text-gray-400 mt-2">
              Email: shrikrishnaeduplaza@gmail.com<br />
              Phone: +91 9426370956
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Shri Krishna Edu Plaza. All Rights Reserved.</p>
          <p className="mt-2">Founded by Mr. Naresh Shrichand Pabreja</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
