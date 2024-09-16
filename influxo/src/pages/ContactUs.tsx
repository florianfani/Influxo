import React, { useState } from 'react';
import RectangleShape from '../assets/decorations/RectangleShape.png';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    companyName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: formData.subject,
          html: `
            <h1>Contact Form Submission</h1>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `
        })
      });
      console.log(response);
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Have a project in mind? Drop me a line.</h2>
        <p className="text-center text-gray-600 mb-8">Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.</p>
        
        <div className="flex flex-col justify-between md:flex-row">
          {/* Left Column */}
          <div className="bg-blue-900 text-white p-8 flex flex-col justify-between rounded-l-lg w-full md:w-1/2 relative">
          {/* img */}
          <div className="absolute -top-5 -right-5">
            <img src={RectangleShape} alt="Contact Us" className="w-32 h-36" />
          </div>
          {/* Title */}
            <div className="ml-4 mt-3"> 
            <h3 className="text-3xl font-bold">Get in touch</h3>
            </div>
            {/* Our contact info */}
            <div className="ml-4 text-xl">

            <p className="flex items-center mb-4">
                <div className="rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-3">
                    <span className="material-icons">email</span>
                </div>
                <div className="flex flex-col ml-3">
              <span className="text-[rgba(255,255,255,0.70)] text-sm">EMAIL US</span>
              <span>influxoks@gmail.com</span>
                </div>
            </p>
            <p className="flex items-center mb-4">
                <div className="rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-3">
                    <span className="material-icons">phone</span>
                </div>
                <div className="flex flex-col ml-3">
              <span className="text-[rgba(255,255,255,0.70)] text-sm">PHONE NUMBER</span>
              <span className="text-sm">+383 48 370 393 / +383 45 557 838</span>
                </div>
            </p>
            <p className="flex items-center mb-4">
                <div className="rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-3">
                    <span className="material-icons">location_on</span>
                </div>
                <div className="flex flex-col ml-3">
              <span className="text-[rgba(255,255,255,0.70)] text-sm">Kosove Ferizaj</span>
              <span className="text-sm">RR. Ahmet Kaciku</span>
                </div>
            </p>
            </div>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bg-gray-100 p-8 rounded-r-lg w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex justify-between">
                <div className="mr-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Full name"
                  />
                  </div>
                  <div>
                    
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Email address"
                  />
                  </div>
              </div>
              <div className="mb-4">
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subjects</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Brand/Company/Product Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
