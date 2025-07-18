import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import HrLine from "./HrLine";
import { TiArrowBack } from "react-icons/ti";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const payload = {
        name: "Monk10x",
        to: companyDetails.email,
        subject: data.subject,
        body: `Full Name : ${data.fullName}\n\n
        Email Address : ${data.email}\n\n
        Subject : ${data.subject}\n\n
        Message :\n${data.message}`,
      };

      // Replace with your actual API endpoint
      const response = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        payload
      );

      if (response.data.success) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        reset();
      }
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="wrapper pt-[5rem]">
      <div className="grid md:grid-cols-[55%_auto] gap-7">
        <div data-aos="fade-up">
          <div className="space-y-4 text-start">
            <p className="uppercase text-primary">request a quote</p>
            <h3 className="section-heading">
              Need A Free Quote? Please Feel Free to Contact Us
            </h3>
            <HrLine />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="">
              <TiArrowBack size={25} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">Reply within 24 hours</span>
            </div>
            <div className="">
              <ImPhone size={20} className="inline -mt-2 text-primary" />
              <span className="font-bold ml-2">24 hrs telephone support</span>
            </div>
          </div>
          <p className="mt-5">
            I'd be happy to provide you with a free quote! However, I would need
            more information about what you need a quote for. Please provide
            details about the product or service you're interested in, any
            specific requirements, and any other relevant information, so I can
            assist you in generating an accurate quote.
          </p>
          <div className="mt-7 flex gap-3 sm:justify-center sm:w-fit w-full">
            <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
              <ImPhone size={25} className="text-white" />
            </div>
            <div className="flex flex-col capitalize">
              <p className="">Call to ask any question</p>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="font-semibold"
              >
                {companyDetails.phone}
              </Link>
            </div>
          </div>
        </div>
        <form
          data-aos="fade-up"
          className="bg-primary p-7 space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              {...register("fullName", {
                required: "Full Name is required",
                minLength: {
                  value: 2,
                  message: "Full Name must be at least 2 characters",
                },
              })}
              className={`w-full p-2 bg-primary-5 outline-none ${
                errors.fullName ? "border-2 border-red-500" : ""
              }`}
              placeholder="Full Name*"
            />
            {errors.fullName && (
              <p className="text-red-200 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className={`w-full p-2 bg-primary-5 outline-none ${
                errors.email ? "border-2 border-red-500" : ""
              }`}
              placeholder="Email*"
            />
            {errors.email && (
              <p className="text-red-200 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters",
                },
              })}
              className={`w-full p-2 bg-primary-5 outline-none ${
                errors.subject ? "border-2 border-red-500" : ""
              }`}
              placeholder="Subject*"
            />
            {errors.subject && (
              <p className="text-red-200 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <textarea
              rows="5"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className={`w-full p-2 bg-primary-5 outline-none ${
                errors.message ? "border-2 border-red-500" : ""
              }`}
              placeholder="Message*"
            />
            {errors.message && (
              <p className="text-red-200 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          {submitMessage && (
            <div
              className={`text-sm p-2 rounded ${
                submitMessage.includes("Thank you")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`secondary-btn w-full ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Request A Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
