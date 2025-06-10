
import React from 'react';
import { Book, BookOpen } from 'lucide-react';

const Courses = () => {
  const gujaratiMediumCourses = [
    { name: "Social Studies", icon: <Book className="h-5 w-5" /> },
    { name: "Science", icon: <Book className="h-5 w-5" /> },
    { name: "Mathematics", icon: <Book className="h-5 w-5" /> },
    { name: "English", icon: <Book className="h-5 w-5" /> }
  ];

  const englishMediumCourses = [
    { name: "Mathematics", icon: <Book className="h-5 w-5" /> },
    { name: "Science", icon: <Book className="h-5 w-5" /> }
  ];

  const standards = ["8th Standard", "9th Standard", "10th Standard"];

  return (
    <section id="courses" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">
          Our <span className="skep-gradient-text">Courses</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gujarati Medium */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-[hsl(var(--skep-turquoise))] to-[hsl(var(--skep-blue))] p-4">
              <h3 className="text-white text-xl font-bold flex items-center">
                <BookOpen className="mr-2" /> Gujarati Medium
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Standards:</h4>
                <div className="flex flex-wrap gap-2">
                  {standards.map((std, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-3">Subjects:</h4>
              <ul className="space-y-3">
                {gujaratiMediumCourses.map((course, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-blue-50 p-2 rounded-full mr-3 text-[hsl(var(--skep-blue))]">
                      {course.icon}
                    </span>
                    {course.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* English Medium */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-[hsl(var(--skep-pink))] to-[hsl(var(--skep-purple))] p-4">
              <h3 className="text-white text-xl font-bold flex items-center">
                <BookOpen className="mr-2" /> English Medium
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Standards:</h4>
                <div className="flex flex-wrap gap-2">
                  {standards.map((std, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-3">Subjects:</h4>
              <ul className="space-y-3">
                {englishMediumCourses.map((course, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-pink-50 p-2 rounded-full mr-3 text-[hsl(var(--skep-pink))]">
                      {course.icon}
                    </span>
                    {course.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-block bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-lg font-semibold text-[hsl(var(--skep-yellow))]">
              <span className="block mb-2">Coming Soon!</span>
              Online courses for remote learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
