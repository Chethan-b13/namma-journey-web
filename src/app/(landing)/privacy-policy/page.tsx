import React from "react";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar alwaysVisible={true} />

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute -top-40 left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-primary font-medium">
                Official Document
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <p className="text-lg text-gray-600">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  0. DEFINITIONS
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following definitions apply throughout this Privacy
                  Policy:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">&quot;App&quot;</span> refers
                    to the LogoutLoud mobile application.
                  </li>
                  <li>
                    <span className="font-medium">
                      &quot;Personal Information&quot;
                    </span>{" "}
                    means any information that identifies or can be used to
                    identify a person, directly or indirectly.
                  </li>
                  <li>
                    <span className="font-medium">&quot;Processing&quot;</span>{" "}
                    means any operation or set of operations performed on
                    Personal Information, such as collection, storage, use,
                    sharing, or deletion.
                  </li>
                  <li>
                    <span className="font-medium">&quot;User&quot;</span> refers
                    to any individual accessing or using the App.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. INTRODUCTION
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  LogoutLoud (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is committed to protecting your privacy. This
                  Privacy Policy explains how your personal information is
                  collected, used, and disclosed by LogoutLoud when you use our
                  mobile application (the &quot;App&quot;).
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This Privacy Policy applies to information we collect when you
                  use our App, or when you otherwise interact with us. Please
                  read this Privacy Policy carefully to understand our policies
                  and practices regarding your information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By downloading, accessing, or using the App, you agree to this
                  Privacy Policy. If you do not agree with our policies and
                  practices, do not download, access, or use the App.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. INFORMATION WE COLLECT
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We collect several types of information from and about users
                  of our App:
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2.1 Information You Provide to Us
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li className="leading-relaxed">
                      <span className="font-medium">Account Information:</span>{" "}
                      When you register for an account, we collect your name
                      (first and last), email address, phone number, and any
                      profile picture you choose to upload.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">User Content:</span>{" "}
                      Information you provide when using the App, including
                      messages, posts, comments, and other content you create.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Communications:</span>{" "}
                      Records of your communications with us, including support
                      requests and feedback.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">
                        Transaction Information:
                      </span>{" "}
                      Details of any transactions you conduct through the App,
                      including payment information.
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2.2 Information We Collect Automatically
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li className="leading-relaxed">
                      <span className="font-medium">Device Information:</span>{" "}
                      Device Information: Information about your mobile device,
                      including device model, operating system, mobile network
                      information, device settings, and unique device
                      identifiers (such as Android ID, Advertising ID, IMEI, and
                      MAC address).
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Usage Data:</span>{" "}
                      Information about how you use the App, including app
                      features you use, time spent on the App, and other usage
                      statistics.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Location Information:</span>{" "}
                      With your permission, we collect precise location
                      information from your device.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Log Information:</span>{" "}
                      Information that is automatically recorded by our servers
                      when you access or use the App, including your IP address,
                      access times, app activity, and device event information.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2.3 Permissions
                  </h3>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    Our App requests the following permissions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li className="leading-relaxed">
                      <span className="font-medium">Location:</span> To provide
                      location-based services and features.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Camera/Photos:</span> To
                      allow you to upload profile pictures and share photos.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Notifications:</span> To
                      send you updates, alerts, and messages.
                    </li>
                    <li className="leading-relaxed">
                      <span className="font-medium">Storage:</span> To store
                      data locally on your device for better performance.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. HOW WE USE YOUR INFORMATION
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We use the information we collect for various purposes,
                  including to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="leading-relaxed">
                    Provide, maintain, and improve the App and its features
                  </li>
                  <li className="leading-relaxed">
                    Create and manage your account
                  </li>
                  <li className="leading-relaxed">
                    Process transactions and send related information
                  </li>
                  <li className="leading-relaxed">
                    Send you technical notices, updates, security alerts, and
                    support messages
                  </li>
                  <li className="leading-relaxed">
                    Respond to your comments, questions, and requests
                  </li>
                  <li className="leading-relaxed">
                    Personalize your experience and deliver content relevant to
                    your interests
                  </li>
                  <li className="leading-relaxed">
                    Monitor and analyze trends, usage, and activities in
                    connection with the App
                  </li>
                  <li>
                    Use device identifiers for analytics, fraud prevention, and
                    service functionality.
                  </li>
                  <li className="leading-relaxed">
                    Detect, investigate, and prevent fraudulent transactions and
                    other illegal activities
                  </li>
                  <li className="leading-relaxed">
                    Comply with legal obligations
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. HOW WE SHARE YOUR INFORMATION
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We may share your personal information in the following
                  situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="leading-relaxed">
                    <span className="font-medium">With Service Providers:</span>{" "}
                    We may share your information with third-party vendors,
                    service providers, contractors, or agents who perform
                    services for us or on our behalf.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">With Business Partners:</span>{" "}
                    We may share your information with our business partners to
                    offer you certain products, services, or promotions.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">With Other Users:</span> When
                    you share personal information or interact with public areas
                    of the App, such information may be viewed by all users and
                    may be publicly distributed.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">For Legal Purposes:</span> We
                    may disclose your information where required to do so by law
                    or in response to valid requests by public authorities.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">Business Transfers:</span> We
                    may share or transfer your information in connection with,
                    or during negotiations of, any merger, sale of company
                    assets, financing, or acquisition of all or a portion of our
                    business.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">With Your Consent:</span> We
                    may disclose your personal information for any other purpose
                    with your consent.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium leading-relaxed">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. DATA SECURITY
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We have implemented appropriate technical and organizational
                  measures designed to secure your personal information from
                  accidental loss and from unauthorized access, use, alteration,
                  and disclosure. However, the transmission of information via
                  the internet and mobile platforms is not completely secure.
                  While we strive to protect your personal information, we
                  cannot guarantee the security of your personal information
                  transmitted through our App. Any transmission of personal
                  information is at your own risk.
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  In the event of a data breach that affects your personal
                  information, we will notify you as required by applicable law
                  and may notify relevant authorities as appropriate.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. YOUR RIGHTS AND CHOICES
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="leading-relaxed">
                    <span className="font-medium">Access:</span> You may request
                    access to your personal information.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">Correction:</span> You may
                    request that we correct inaccurate or incomplete
                    information.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">Deletion:</span> You may
                    request that we delete your personal information.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">Restriction:</span> You may
                    request that we restrict the processing of your personal
                    information.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">Data Portability:</span> You
                    may request a copy of the information you have provided to
                    us in a structured, commonly used, and machine-readable
                    format.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-medium">Objection:</span> You may
                    object to our processing of your personal information.
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  To exercise any of these rights, please contact us at{" "}
                  <span className="text-primary font-medium">
                    support@logoutloud.com
                  </span>
                  . We may need to verify your identity before responding to
                  your request.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. DATA RETENTION
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We will retain your personal information only for as long as
                  reasonably necessary to fulfill the purposes for which it was
                  collected, including for the purposes of satisfying any legal,
                  regulatory, tax, accounting, or reporting requirements. We may
                  retain your personal information for a longer period in the
                  event of a complaint or if we reasonably believe there is a
                  prospect of litigation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. CHILDREN&apos;S PRIVACY
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our App is not intended for children under 13 years of age. We
                  do not knowingly collect personal information from children
                  under 13. If we learn we have collected or received personal
                  information from a child under 13 without verification of
                  parental consent, we will delete that information. If you
                  believe we might have any information from or about a child
                  under 13, please contact us at{" "}
                  <span className="text-primary font-medium">
                    support@logoutloud.com
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. INTERNATIONAL DATA TRANSFERS
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to, and maintained on,
                  computers located outside of your state, province, country, or
                  other governmental jurisdiction where the data protection laws
                  may differ from those in your jurisdiction. If you are located
                  outside the United States and choose to provide information to
                  us, please note that we transfer the data to the United States
                  and process it there.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. CHANGES TO OUR PRIVACY POLICY
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We may update our Privacy Policy from time to time. If we make
                  material changes to how we treat our users&apos; personal
                  information, we will post the new Privacy Policy on this page
                  and notify you through a notice on the App.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The date the Privacy Policy was last revised is identified at
                  the top of the page. You are responsible for periodically
                  visiting this Privacy Policy to check for any changes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. THIRD-PARTY SERVICES
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The App may contain links to third-party websites and
                  services. This Privacy Policy does not apply to such
                  third-party content. We are not responsible for the privacy
                  practices or the content of these third-party sites. We
                  encourage you to read the privacy policies of every website
                  you visit or third-party service you use.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. PAYMENT PROCESSING
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Payments made through the App are processed by third-party
                  payment gateways such as Razorpay. When you make a payment,
                  you may be required to provide your payment details directly
                  to Razorpay or any other processor, which will collect, use,
                  and process your information in accordance with their privacy
                  policies.
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  We do not collect or store your full payment card information.
                  We only receive confirmation of your payment status.
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  For more information, please review Razorpay&apos;s privacy
                  policy at:{" "}
                  <a
                    href="https://razorpay.com/privacy/"
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://razorpay.com/privacy/
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. APP STORE PROVIDERS
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When you download our App through the Apple App Store or
                  Google Play Store, please note that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="leading-relaxed">
                    The app stores may collect certain information in connection
                    with your use of the App.
                  </li>
                  <li className="leading-relaxed">
                    Your use of the app stores is subject to the applicable
                    terms of use and privacy policies of those platforms.
                  </li>
                  <li className="leading-relaxed">
                    Apple and Google are not responsible for our App and its
                    content.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. CONTACT US
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us at:
                </p>
                <p className="text-gray-800 font-medium leading-relaxed">
                  <strong>LogoutLoud</strong>
                  <br />
                  Email: support@logoutloud.com
                </p>
              </div>

              <div className="text-center text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200">
                <p>
                  © {new Date().getFullYear()} LogoutLoud. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
