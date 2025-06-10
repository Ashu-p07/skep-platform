
import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-[hsl(var(--skep-turquoise))] bg-opacity-10 p-3 rounded-full mr-4">
            <Phone className="h-5 w-5 text-[hsl(var(--skep-turquoise))]" />
          </div>
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p className="text-gray-600">+91 9426370956</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-[hsl(var(--skep-pink))] bg-opacity-10 p-3 rounded-full mr-4">
            <Mail className="h-5 w-5 text-[hsl(var(--skep-pink))]" />
          </div>
          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-600">shrikrishnaeduplaza@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-[hsl(var(--skep-blue))] bg-opacity-10 p-3 rounded-full mr-4">
            <Home className="h-5 w-5 text-[hsl(var(--skep-blue))]" />
          </div>
          <div>
            <h4 className="font-semibold">Address</h4>
            <p className="text-gray-600">
              Shri Krishna Edu Plaza,<br/>
              7 Sarvoday Society, College Road<br />
              Talod, Sabarkantha,<br />
              Gujarat, India
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold mb-2">Operating Hours</h4>
        <p className="text-gray-600">
          Monday - Sunday: 11:00 AM - 8:00 PM<br />
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
