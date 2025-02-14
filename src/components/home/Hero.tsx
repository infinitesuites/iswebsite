
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-white to-amber-50 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-900">
          Live Without Limits
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-amber-800">
          Discover Luxury Living in Southern California's Most Sought-After Locations.<br />
          Your Home Away From Home Awaits.
        </p>
        <Button
          className="bg-[#bf9b30] hover:bg-[#a68628] text-white px-8 py-6 text-lg"
        >
          View Available Properties
        </Button>
      </div>
    </section>
  );
};

export default Hero;
