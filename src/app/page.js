import AdditionalServices from "@/components/AdditionalServices";
import Authorities from "@/components/Authorities";
import BusinessSetup from "@/components/BusinessSetup";
import Clients from "@/components/Clients";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jurisdiction from "@/components/Jurisdiction";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#141414] flex flex-col md:gap-5 font-sans">
        <Hero />
        <Services />
        <Pricing />
        <Jurisdiction />
        <BusinessSetup />
        <AdditionalServices />
        <Clients />
        <Authorities />
        <FAQs />
        <Partners />
        <Footer />
        <Socials />
      </main>
    </>
  );
}
