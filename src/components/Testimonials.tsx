import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Ravi Patel",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Shree Krishna Edu Plaza has completely transformed my child's academic performance. The teachers are dedicated and the approach is very effective."
  },
  {
    name: "Priya Shah",
    role: "Student, 10th Grade",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I was struggling with Mathematics, but after joining SKEP, I've gained confidence and my scores have improved significantly."
  },
  {
    name: "Mohan Desai",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "What sets Shree Krishna Edu Plaza apart is their focus on values and discipline alongside academics. My child has become more responsible."
  },
  {
    name: "Anita Trivedi",
    role: "Parent of 8th Grade Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "My daughter’s interest in studies has grown tremendously since joining SKEP. She now looks forward to learning every day."
  },
  {
    name: "Bhavesh Rana",
    role: "Parent of 9th Grade Student",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "SKEP provides a structured learning environment that has helped my son stay focused and perform well in his exams."
  },
  {
    name: "Kavita Desai",
    role: "Parent of 10th Grade Student",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    content: "The attention to detail and personal care by the teachers at Shree Krishna Edu Plaza has made a big difference in my child’s board preparation."
  }
  
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-10">
          What People <span className="skep-gradient-text">Say</span>
        </h2>

        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-floating">
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{testimonial.content}"</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
