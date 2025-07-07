
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductBenefits from "@/components/ProductBenefits";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-cream-50/30">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <ProductBenefits />
        <ProductShowcase />
        <HowItWorks />
        <Ingredients />
      </div>
      <Reviews />
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
