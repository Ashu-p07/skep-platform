
import React from 'react';
import { Users, Award, Video, Clock, Check } from 'lucide-react';
import Icon1 from '../pic/1.png'
import Icon2 from '../pic/2.png'
import Icon3 from '../pic/3.png'

const Features = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-[hsl(var(--skep-turquoise))]" />,
      title: "Offline Classes",
      description: "Traditional classroom-based learning with direct teacher interaction at our center in Talod."
    },
    {
      icon: <Award className="h-10 w-10 text-[hsl(var(--skep-pink))]" />,
      title: "22+ Years Experience",
      description: "Over two decades of teaching excellence and proven results with thousands of successful students."
    },
    {
      icon: <Video className="h-10 w-10 text-[hsl(var(--skep-blue))]" />,
      title: "Online Classes Soon",
      description: "Digital learning solutions coming soon for students who prefer studying remotely."
    },
    {
      icon: <Check className="h-10 w-10 text-[hsl(var(--skep-yellow))]" />,
      title: "Cleanliness",
      description: "We maintain a clean, hygienic, and conducive learning environment for optimal student focus."
    },
    {
      icon: <Clock className="h-10 w-10 text-[hsl(var(--skep-purple))]" />,
      title: "Flexible Timings",
      description: "Multiple batches available to accommodate different schedules and needs."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">
          Why Choose <span className="skep-gradient-text">Us</span>
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At Shri Krishna Edu Plaza, we combine traditional values with modern teaching approaches 
          to ensure the holistic development of every student.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--skep-turquoise))] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          {/* <h3 className="text-2xl font-bold text-center mb-6">Our Approach: SKEP</h3>
          <div className="bg-white shadow-lg rounded-lg p-10"> */}
  <h2 className="text-2xl font-bold text-center">Our Approach: SKEP</h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-12">
    
    {/* Sanskar */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <img src={Icon2} alt="Sanskar" className="w-37 h-37 object-contain" />
      <h3 className="text-lg font-semibold text-purple-700">Sanskar</h3>
      <p className="text-gray-600">Values that build character and integrity.</p>
    </div>

    {/* Discipline */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <img src={Icon3} alt="Discipline" className="w-37 h-37 object-contain" />
      <h3 className="text-lg font-semibold text-blue-700">Discipline</h3>
      <p className="text-gray-600">Guided behavior for academic excellence.</p>
    </div>

    {/* Education */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <img src={Icon1} alt="Education" className="w-37 h-37 object-contain" />
      <h3 className="text-lg font-semibold text-green-700">Education</h3>
      <p className="text-gray-600">Empowering minds with knowledge.</p>
    </div>

  </div>
</div>

        </div>
     
    </section>
  );
};

export default Features;
