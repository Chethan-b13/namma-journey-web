"use client";

import React from "react";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Please read these Terms and Conditions carefully before using
              Logoutloud.
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

      {/* Terms Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* 1. Using Our Services */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">1. Using Our Services</h2>
              <p className="text-gray-700">
                You must follow all policies provided within the Services. You
                may only use Logoutloud as permitted by applicable law. We may
                suspend or stop providing Services if you fail to comply with
                our terms.
              </p>
            </div>

            {/* 2. Your Account */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">2. Your Account</h2>
              <p className="text-gray-700">
                You are responsible for maintaining the confidentiality of your
                account credentials. Notify us immediately of any unauthorized
                use. We recommend using a strong, unique password.
              </p>
            </div>

            {/* 3. User Content */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">3. User Content</h2>
              <p className="text-gray-700">
                You retain ownership of content you post but grant Logoutloud a
                license to use, display, and distribute it through the platform.
                You are solely responsible for any content shared.
              </p>
            </div>

            {/* 4. Hangouts and Events */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">4. Hangouts and Events</h2>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>
                  <b>Safety:</b> While Logoutloud facilitates and monitors
                  listed events, participants are responsible for their own
                  personal safety and belongings.
                </li>
                <li>
                  <b>Conduct:</b> Respectful, inclusive behavior is required.
                  Harassment, discrimination, or inappropriate behavior will
                  result in removal from the platform.
                </li>
                <li>
                  <b>Alcohol and Substances:</b> If alcohol is present, you
                  agree to consume responsibly. Illegal substances are
                  prohibited.
                </li>
                <li>
                  <b>Cancellations:</b> Refund and cancellation policies are set
                  by individual event organizers. Review them before booking.
                </li>
                <li>
                  <b>Moderation:</b> All events are reviewed by Logoutloud staff
                  or hosted by verified organizers. We may remove any listing
                  that violates our standards.
                </li>
              </ul>
            </div>

            {/* 5. Payments and Refunds */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                5. Payments and Refunds
              </h2>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>
                  <b>Payment Processing:</b> Secure third-party processors
                  handle all transactions. Logoutloud does not store payment
                  details.
                </li>
                <li>
                  <b>Nature of Purchases:</b> All purchases are for in-person,
                  offline experiences. No digital or virtual goods are sold.
                </li>
                <li>
                  <b>Refunds:</b> Refunds are handled by organizers. Logoutloud
                  may help facilitate resolution if disputes arise.
                </li>
              </ul>
            </div>

            {/* 6. Assumption of Risk and Release */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                6. Assumption of Risk and Release
              </h2>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>
                  <b>Assumption of Risk:</b> Attending hangouts involves
                  inherent risks. You voluntarily accept all risks, including
                  personal injury or property damage.
                </li>
                <li>
                  <b>Release of Liability:</b> To the extent permitted by law,
                  you release Logoutloud, its employees, and affiliates from
                  liability for any damages related to your participation.
                </li>
              </ul>
            </div>

            {/* 7. Termination */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">7. Termination</h2>
              <p className="text-gray-700">
                We may suspend or terminate your account at our discretion, with
                or without notice, if you violate these Terms. Upon termination,
                your access to the platform ceases.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                Logoutloud is not liable for indirect, incidental, or
                consequential damages, including lost data or revenue, resulting
                from your use of the platform.
              </p>
            </div>

            {/* 9. Changes to Terms */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">9. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these Terms periodically. Continued use after
                updates means you agree to the revised Terms. We recommend
                reviewing them regularly.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h2 className="text-xl font-bold mb-3">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms, contact us through the
                Help Center in the app or by email.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-1">Support Email</h3>
                  <p className="text-primary">support@logoutloud.com</p>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                These Terms and Conditions are subject to change without prior
                notice.
              </div>
            </div>

            {/* Optional Link to Privacy Policy */}
            <div className="text-center mt-6">
              <a
                className="text-sm text-primary underline hover:text-primary/80"
                href="/privacy-policy"
              >
                View Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
