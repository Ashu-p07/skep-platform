
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">
          Contact <span className="skep-gradient-text">Us</span>
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <ContactInfo />
          </div>
          
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
