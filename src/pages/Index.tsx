
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArtworkDetails from "@/components/ArtworkDetails";
import ArtistStatement from "@/components/ArtistStatement";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to Dankoshi Art",
      description: "New geometric portrait artwork now available!",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ArtworkDetails />
      <GalleryPreview />
      <ArtistStatement />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
