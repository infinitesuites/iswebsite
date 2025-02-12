
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin } from "lucide-react";

const LongBeachProperties = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Long Beach Properties</h1>
        <p className="text-xl mb-8 text-amber-800">
          Premium furnished rentals in Long Beach, CA - Ideal for maritime professionals and business travelers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-amber-100">
            <CardContent className="p-6">
              <img 
                src="/placeholder.svg" 
                alt="Downtown Harbor View" 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Downtown Harbor View</h3>
              <p className="text-amber-700 mb-4">
                Stunning harbor views. Luxury 2-bedroom with modern amenities.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <img 
                src="/placeholder.svg" 
                alt="Shoreline Executive Suite" 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Shoreline Executive Suite</h3>
              <p className="text-amber-700 mb-4">
                Near business district. Premium 1-bedroom with office space.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <img 
                src="/placeholder.svg" 
                alt="Belmont Shore Residence" 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Belmont Shore Residence</h3>
              <p className="text-amber-700 mb-4">
                Steps from the beach. Spacious 3-bedroom with ocean views.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LongBeachProperties;
