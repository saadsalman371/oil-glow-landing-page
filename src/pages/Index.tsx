
import Hero from "@/components/Hero";
import ProductBenefits from "@/components/ProductBenefits";
import ProductShowcase from "@/components/ProductShowcase";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-cream-50/30">
      <Hero />
      <ProductBenefits />
      <ProductShowcase />
      <Reviews />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
