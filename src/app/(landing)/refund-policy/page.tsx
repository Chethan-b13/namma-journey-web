"use client";

import React from "react";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

const RefundAndCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Refund and Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600">
              Learn more about how refunds and cancellations work at Logoutloud.
            </p>
            <p className="text-base mt-2 text-gray-500">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* 1. Refund Eligibility */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">1. Refund Eligibility</h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>
                  Refunds are applicable only for paid offline events booked via
                  the Logoutloud platform.
                </li>
                <li>
                  Refund requests must be submitted <b>at least 24 hours</b>{" "}
                  before the event start time.
                </li>
                <li>
                  Late arrivals, no-shows, or non-attendance do not qualify for
                  refunds.
                </li>
                <li>
                  If an event is cancelled by the organizer or Logoutloud, a
                  full refund will be processed automatically.
                </li>
              </ul>
            </div>

            {/* 2. Refund Request Process */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                2. Refund Request Process
              </h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>
                  To request a refund, email <b>support@logoutloud.com</b> with
                  your booking details and reason for the request.
                </li>
                <li>
                  Our team will review and respond within{" "}
                  <b>3–5 business days</b>.
                </li>
                <li>
                  Approved refunds are typically processed within{" "}
                  <b>7–10 business days</b> via the original payment method.
                </li>
              </ul>
            </div>

            {/* 3. Cancellations by User */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                3. Cancellations by User
              </h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>
                  You may cancel a booking from your profile dashboard under “My
                  Hangouts.”
                </li>
                <li>
                  Cancellation is allowed up to <b>24 hours</b> before the
                  event. After this, cancellations may not be honored.
                </li>
                <li>
                  Cancellations made on time will be subject to the event
                  organizer&apos;s refund policy.
                </li>
              </ul>
            </div>

            {/* 4. Cancellations by Logoutloud or Organizers */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                4. Cancellations by Logoutloud or Organizers
              </h2>
              <p className="text-gray-700">
                If an event is cancelled due to unforeseen circumstances (e.g.
                weather, safety concerns, low turnout), Logoutloud will ensure a
                full refund is issued automatically to all participants.
              </p>
            </div>

            {/* 5. Exceptions & Disputes */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                5. Exceptions & Disputes
              </h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>
                  If you believe a refund was wrongly denied, you may escalate
                  the matter to <b>support@logoutloud.com</b>.
                </li>
                <li>
                  We aim to resolve refund-related disputes fairly and promptly,
                  with user and organizer cooperation.
                </li>
              </ul>
            </div>

            {/* 6. RBI Compliance Note */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary bg-primary/5">
              <h2 className="text-xl font-bold mb-3">6. RBI Compliance</h2>
              <p className="text-gray-700">
                Logoutloud adheres to all Reserve Bank of India (RBI) guidelines
                for online transactions and refund policies. All payment and
                refund processes are conducted through secure and RBI-compliant
                gateways.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                For further clarification, please contact our support team.
              </p>
              <p className="text-primary font-medium mt-1">
                support@logoutloud.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundAndCancellationPolicy;
