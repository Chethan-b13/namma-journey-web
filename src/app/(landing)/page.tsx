import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Manma Journey - Step Away from Screens</title>
        <meta
          name="description"
          content="Join fun-filled offline events and unforgettable trip adventures"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Tours />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
