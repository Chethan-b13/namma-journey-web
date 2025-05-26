"use client";

import React from "react";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

const SafetyStandardsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar alwaysVisible={true} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Child Safety Standards</h1>
            <p className="text-lg text-gray-600">
              At LogoutLoud, we prioritize the safety of all users, especially
              children and teens.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Standards Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Age Requirements */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Age Requirements</h2>
              <p className="text-gray-700 mb-3">
                LogoutLoud is designed for users 13 years and older. Users
                between 13-17 years old require parental consent.
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>Age verification during registration</li>
                <li>
                  Teen accounts (13-17) have restricted features and enhanced
                  privacy settings by default
                </li>
              </ul>
            </div>

            {/* Content Moderation */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Content Moderation</h2>
              <p className="text-gray-700 mb-3">
                We use automated systems and human review to ensure content
                safety.
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>
                  Prohibited content includes: harmful material involving
                  minors, sexually explicit content, harassment, bullying
                </li>
                <li>
                  All content can be reported through our in-app reporting
                  system
                </li>
                <li>Reports involving child safety are prioritized</li>
              </ul>
            </div>

            {/* Safety Features */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Safety Features</h2>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                <li>
                  Privacy controls for profile visibility and location
                  information
                </li>
                <li>Blocking and muting capabilities</li>
                <li>Restricted messaging for teen accounts</li>
                <li>Content filtering to prevent inappropriate material</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h2 className="text-xl font-bold mb-3">
                Contact Us About Safety Concerns
              </h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about child safety on our platform, please
                contact us immediately:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-1">Support Email</h3>
                  <p className="text-primary">support@logoutloud.com</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                For urgent concerns, please use the in-app reporting feature for
                fastest response.
              </p>
            </div>

            <div className="text-center text-sm text-gray-500">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SafetyStandardsPage;
