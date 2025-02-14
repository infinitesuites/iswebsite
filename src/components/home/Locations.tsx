
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Locations = () => {
  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          Prime Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LocationCard
            title="Burbank, CA"
            description="Luxury furnished apartments near major studios and entertainment companies. Perfect for entertainment industry professionals and corporate relocations."
            link="/properties/burbank"
            buttonText="Explore Burbank Properties"
          />
          <LocationCard
            title="Long Beach, CA"
            description="Premium furnished rentals near the port and business district. Ideal for maritime professionals and extended business stays."
            link="/properties/long-beach"
            buttonText="Explore Long Beach Properties"
          />
        </div>
      </div>
    </section>
  );
};

const LocationCard = ({ 
  title, 
  description, 
  link, 
  buttonText 
}: { 
  title: string; 
  description: string; 
  link: string; 
  buttonText: string;
}) => (
  <Card className="border-amber-100">
    <CardContent className="p-6">
      <h3 className="text-2xl font-semibold mb-4 text-amber-900">{title}</h3>
      <p className="text-amber-700 mb-4">{description}</p>
      <Button 
        className="bg-amber-600 hover:bg-amber-700 text-white"
        onClick={() => window.location.href = link}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

export default Locations;
