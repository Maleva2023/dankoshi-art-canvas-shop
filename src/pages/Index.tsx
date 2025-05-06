
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArtistStatement from "@/components/ArtistStatement";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to Dankoshi Art",
      description: "Experience unique canvas prints that transform your space",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ArtistStatement />
      <GalleryPreview />
      <Footer />
    </div>
  );
};

export default Index;
