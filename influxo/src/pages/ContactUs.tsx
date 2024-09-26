import React, { useState } from "react";
import RectangleShape from "../assets/decorations/RectangleShape.png";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    companyName: "",
    message: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Reset error state for the field
    setErrors({
      ...errors,
      [e.target.name]: false,
    });

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Regex patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;

    // Form validation
    const newErrors = {
      name: !formData.name ? "Name is required." : "",
      email: !formData.email ? "Email is required." : !emailPattern.test(formData.email) ? "Invalid email format." : "",
      subject: !formData.subject ? "Subject is required." : "",
      message: !formData.message ? "Message is required." : "",
      phoneNumber: !formData.phoneNumber ? "Phone number is required." : !phonePattern.test(formData.phoneNumber) ? "Invalid phone number format." : "",
    };

    let errMessage = "";
    switch (true) {
      case !!newErrors.name:
        errMessage = newErrors.name;
        break;
      case !!newErrors.email:
        errMessage = newErrors.email;
        break;
      case !!newErrors.subject:
        errMessage = newErrors.subject;
        break;
      case !!newErrors.message:
        errMessage = newErrors.message;
        break;
      case !!newErrors.phoneNumber:
        errMessage = newErrors.phoneNumber;
        break;
      default:
        errMessage = "";
    }

    if (errMessage) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: formData.subject,
          html: `
            <h1>Contact Form Submission</h1>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
        }),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Your email has been sent successfully!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Email Failed",
          text: "Failed to send email. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while sending the email. Please try again later.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-[8%] lg:px-[16%]">
      <div className="bg-white w-full flex flex-col items-center justify-center max-w-6xl">
        <div className="flex flex-col items-center justify-center lg:max-w-[60%]">
          <h2 className="md:text-[56px] text-[36px] font-bold mb-4 text-center">Have a project in mind? Drop us a line.</h2>
          <p className="text-center text-gray-600 mb-8 lg:max-w-[700px]">Got a project? Drop us a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-0 w-full">
          {/* Left Column */}
          <div className="bg-gradient-to-br from-[#073B89] to-[#1b5dba] text-white p-8 flex flex-col justify-between md:rounded-l-3xl rounded-3xl md:rounded-none w-full lg:w-1/2 relative md:shadow-xl">
            {/* Image */}
            <div className="absolute -top-10 -right-10 hidden sm:block">
              <img src={RectangleShape} alt="Contact Us" className="w-48 h-54" />
            </div>

            {/* Title */}
            <div className="ml-4 mt-3">
              <h3 className="text-[36px] font-bold">Get in touch</h3>
            </div>

            {/* Contact Info */}
            <div className="ml-4 text-lg flex flex-col gap-4">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-4">
                  <span className="material-icons">email</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-[rgba(255,255,255,0.70)] text-sm">EMAIL US</span>
                  <span className="text-[20px]">influxoks@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-4">
                  <span className="material-icons">phone</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-[rgba(255,255,255,0.70)] text-sm">PHONE NUMBER</span>
                  <div className="text-[18px] flex flex-col">
                    <span>+383 48 370 393</span>
                    <span>+383 45 557 838</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-4">
                  <span className="material-icons">location_on</span>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-[rgba(255,255,255,0.70)] text-sm">Kosove Ferizaj</span>
                  <span className="text-[20px]">RR. Ahmet Kaciku</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col mt-4 space-x-4">
              <div className="flex items-center mb-4 ml-4">
                <span className="border-t border-white w-8 mr-2"></span>
                <span className="text-white text-sm">Connect with us:</span>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="rounded-md bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-2 px-3 cursor-pointer hover:scale-105 duration-300 hover:bg-[rgba(255,255,255,0.25)]">
                  <a href="#" className="text-white text-xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="rounded-md bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-2 px-3 cursor-pointer hover:scale-105 duration-300 hover:bg-[rgba(255,255,255,0.25)]">
                  <a href="#" className="text-white text-xl">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </div>
                <div className="rounded-md bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-2 px-3 cursor-pointer hover:scale-105 duration-300 hover:bg-[rgba(255,255,255,0.25)]">
                  <a href="#" className="text-white text-xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="rounded-md bg-[rgba(255,255,255,0.15)] flex items-center justify-center p-2 px-3 cursor-pointer hover:scale-105 duration-300 hover:bg-[rgba(255,255,255,0.25)]">
                  <a href="https://www.instagram.com/influxoks/" target="_blank" className="text-white text-xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-100 p-8 md:rounded-r-3xl md:rounded-l-none rounded-3xl w-full lg:w-1/2 md:shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <div className="w-full md:mr-4">
                  <label className="block text-gray-700">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.name ? "border-red-500" : ""}`} placeholder="Full name" />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="w-full">
                  <label className="block text-gray-700">Email</label>
                  <input type="text" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? "border-red-500" : ""}`} placeholder="Email address" />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.phoneNumber ? "border-red-500" : ""}`} placeholder="Phone Number" />
                {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.subject ? "border-red-500" : ""}`} placeholder="Subject" />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Company Name (Optional)</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Brand/Company/Product Name" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none overflow-auto h-28 ${errors.message ? "border-red-500" : ""}`} placeholder="Tell us about your project..."></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>
              <div className="flex py-6">
                <button type="submit" className="bg-gradient-to-br from-[#1b5dba] to-[#073B89] text-white py-3 px-6 rounded-lg hover:from-[#4a8ef1] hover:to-[#3a7ed9] hover:scale-105 duration-300 flex items-center justify-center">
                  Send Message <i className="material-icons ml-3">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
