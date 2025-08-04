import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { companyDetails } from "../data/constant";
import {
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaArrowLeft,
  FaWhatsapp,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = companyDetails.phone.replace("+", "");
    const message = "Hello! I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <div className="wrapper py-16">
        {/* Success Message */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div
            data-aos="fade-up"
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <FaCheckCircle className="text-green-600 text-6xl" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Thank You for Contacting Us!
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              We've successfully received your message and truly appreciate you
              taking the time to reach out to Monk10x.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 text-left">
              <p className="text-blue-800 font-medium">
                📧 You should receive an acknowledgment email shortly with the
                details of your submission.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              What Happens Next?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Review Your Inquiry
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team will carefully review your inquiry and understand
                  your specific requirements.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Get Back to You
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll respond within 24 hours with a detailed solution
                  tailored to your needs.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Start Your Project
                </h3>
                <p className="text-gray-600 text-sm">
                  Once we align on the solution, we'll begin working on your
                  project immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="primary-btn mx-auto"
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
