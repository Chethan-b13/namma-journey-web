"use client";

import React, { useState } from "react";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";
import { FaHeadset, FaComments, FaQuestionCircle } from "react-icons/fa";
import api from "@/config/axios";

interface SupportRequest {
  subject: string;
  message: string;
  category:
    | "bug"
    | "app_crash"
    | "login_issues"
    | "feature_request"
    | "account"
    | "booking_issues"
    | "payment"
    | "other";
  priority: "low" | "normal" | "high";
  attachments?: string[];
  name: string;
  email: string;
}

const supportService = {
  submitSupportRequest: async (requestData: SupportRequest) => {
    const response = await api.post("/support", requestData);
    return response.data;
  },
};

const SupportPage = () => {
  const [formData, setFormData] = useState<SupportRequest>({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "booking_issues",
    priority: "normal",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await supportService.submitSupportRequest(formData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "booking_issues",
        priority: "normal",
      });
    } catch (error: any) {
      console.error("Error submitting support request:", error);
      setSubmitError(
        error?.response?.data?.message ||
          "Failed to submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium">
                We&apos;re Here To Help
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Need <span className="text-primary">Support</span>?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re committed to making your offline experience seamless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaHeadset className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about your booking or experience? Our team is
                  ready to help.
                </p>
                <p className="text-sm text-gray-500">
                  Response time: Within 24 hours
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center mb-4">
                  <FaComments className="text-chart-3 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Host Support</h3>
                <p className="text-gray-600 mb-4">
                  Need assistance with managing your experiences or events?
                  We&apos;ve got you covered.
                </p>
                <p className="text-sm text-gray-500">
                  Response time: Within 12 hours
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-chart-4/10 rounded-full flex items-center justify-center mb-4">
                  <FaQuestionCircle className="text-chart-4 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">General Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  Have feedback or suggestions? We&apos;d love to hear from you.
                </p>
                <p className="text-sm text-gray-500">
                  Response time: Within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your support request has been submitted successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                      {submitError}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="booking_issues">Booking Issue</option>
                      <option value="account">Account Help</option>
                      <option value="payment">Payment Problem</option>
                      <option value="bug">Bug Report</option>
                      <option value="app_crash">App Crash</option>
                      <option value="login_issues">Login Issues</option>
                      <option value="feature_request">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Brief description of your issue"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Priority
                    </label>
                    <select
                      id="priority"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      value={formData.priority}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Please describe your issue in detail"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary hover:text-white text-black font-medium py-3 px-6 rounded-lg transition-all shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll respond to your inquiry as quickly as possible.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* other ways to get help email to support@logoutloud.com */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-chart-3/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Other Ways to Get Help
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re here to help you 24/7. You can also email us at
                support@logoutloud.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I cancel or reschedule an event?",
                  answer:
                    "You can cancel or reschedule from your account dashboard up to 48 hours before the event starts. Go to 'My Bookings' and select the event you wish to modify.",
                },
                {
                  question: "What is your refund policy?",
                  answer:
                    "Full refunds are available for cancellations made 48 hours or more before the event. For cancellations made within 48 hours, a 50% refund is provided.",
                },
                {
                  question: "How do I become a host?",
                  answer:
                    "Visit our 'Become a Host' page to apply. We review all applications within 48 hours and will guide you through the onboarding process.",
                },
                {
                  question: "Is my payment information secure?",
                  answer:
                    "Yes, we use industry-standard encryption and never store your full payment details on our servers.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default SupportPage;
