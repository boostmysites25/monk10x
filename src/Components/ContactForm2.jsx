import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { companyDetails } from "../data/constant";

const ContactForm2 = () => {
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
    <form
      data-aos="fade-up"
      className="grid grid-cols-1 gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid lg:grid-cols-2 gap-5">
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
            placeholder="Full Name"
            className={`p-2 outline-none bg-primary/10 rounded w-full ${
              errors.fullName ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
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
            placeholder="Email Address"
            className={`p-2 outline-none bg-primary/10 rounded w-full ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
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
          placeholder="Subject"
          className={`p-2 outline-none bg-primary/10 rounded w-full ${
            errors.subject ? "border-2 border-red-500" : ""
          }`}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
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
          placeholder="Message"
          className={`p-2 outline-none bg-primary/10 rounded w-full ${
            errors.message ? "border-2 border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
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
        className={`primary-btn ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm2;
