
import React from 'react';
import { Book, Award, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center pt-20">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[hsl(var(--skep-turquoise))] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[hsl(var(--skep-pink))] opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Welcome to <span className="skep-gradient-text">Shri Krishna Edu Plaza</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Transforming education with the perfect blend of 
              <span className="font-bold"> SANSKAR + EDUCATION + DISCIPLINE</span>
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-[hsl(var(--skep-turquoise))] mr-2" />
                <span>Expert coaching for 8th, 9th & 10th standards</span>
              </div>
              <div className="flex items-center">
                <Check className="text-[hsl(var(--skep-turquoise))] mr-2" />
                <span>22+ years of teaching excellence</span>
              </div>
              <div className="flex items-center">
                <Check className="text-[hsl(var(--skep-turquoise))] mr-2" />
                <span>Classes in both English & Gujarati medium</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="skep-btn text-center">
                Contact Us
              </a>
              <a href="#courses" className="border border-[hsl(var(--skep-turquoise))] text-[hsl(var(--skep-turquoise))] hover:bg-[hsl(var(--skep-turquoise))] hover:text-white transition-colors duration-300 font-semibold py-2 px-6 rounded-lg text-center">
                Explore Courses
              </a>
            </div>
          </div>
          
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[hsl(var(--skep-turquoise))] via-[hsl(var(--skep-pink))] to-[hsl(var(--skep-blue))] flex items-center justify-center p-1">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/f000cc74-21aa-4706-b577-a875d9c46b84.png" 
                    alt="Shri Krishna Edu Plaza Logo" 
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="text-[hsl(var(--skep-yellow))]" />
                  <span className="font-bold">22+ Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
