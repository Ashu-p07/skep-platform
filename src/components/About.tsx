
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">
          About <span className="skep-gradient-text">Shri Krishna Edu Plaza</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
  <div className="flex justify-center">
    <img 
      src="/lovable-uploads/20250505_1117_Educational Coaching Animation_remix_01jtffpc1ee2cawv3k5czcrs9p.png" 
      alt="Classroom at Shri Krishna Edu Plaza" 
      className="rounded-lg shadow-lg w-[350px] h-160 object-cover"
    />
  </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Shri Krishna Edu Plaza, we believe in the holistic development of students through the perfect 
              blend of Sanskar (Values), Education, and Discipline. With over 22 years of teaching experience, 
              we have helped thousands of students achieve academic excellence.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-6">
              Founded by Mr. Naresh Shrichand Pabreja, our coaching center in Talod, Sabarkantha, Gujarat 
              provides specialized coaching for students of 8th, 9th, and 10th standards in both English and 
              Gujarati mediums.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-bold text-[hsl(var(--skep-turquoise))]">Sanskar</h4>
                <p className="text-sm">Cultural and moral values</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-bold text-[hsl(var(--skep-pink))]">Education</h4>
                <p className="text-sm">Academic excellence</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-bold text-[hsl(var(--skep-blue))]">Discipline</h4>
                <p className="text-sm">Character building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
