
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Briefcase } from "lucide-react";

const BurbankProperties = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Burbank Properties</h1>
        <p className="text-xl mb-8 text-amber-800">
          Luxury furnished apartments in Burbank, CA - Perfect for entertainment industry professionals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-amber-100">
            <CardContent className="p-6">
              <img 
                src="/placeholder.svg" 
                alt="Media District Suite" 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Media District Suite</h3>
              <p className="text-amber-700 mb-4">
                Walking distance to major studios. Fully furnished 2-bedroom luxury apartment.
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
                alt="Downtown Burbank Residence" 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Downtown Burbank Residence</h3>
              <p className="text-amber-700 mb-4">
                Heart of downtown. Modern 1-bedroom with city views and premium amenities.
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
                alt="Magnolia Park Suite" 
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Magnolia Park Suite</h3>
              <p className="text-amber-700 mb-4">
                Quiet residential area. Spacious 3-bedroom perfect for families.
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

export default BurbankProperties;
