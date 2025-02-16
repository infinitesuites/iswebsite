import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const LongBeachProperties = () => {
  const navigate = useNavigate();
  
  const propertyImages = {
    'downtown-harbor': [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
    ],
    'shoreline': [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
    ],
    'belmont-shore': [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Long Beach Properties</h1>
        <p className="text-xl mb-8 text-amber-800">
          Premium furnished rentals in Long Beach, CA - Ideal for maritime professionals and business travelers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {propertyImages['downtown-harbor'].map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Downtown Harbor View - Image ${index + 1}`} 
                        className="w-full h-48 object-cover rounded"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Downtown Harbor View</h3>
              <p className="text-amber-700 mb-4">
                Stunning harbor views. Luxury 2-bedroom with modern amenities.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/properties/long-beach/downtown-harbor')}
              >
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {propertyImages['shoreline'].map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Shoreline Executive Suite - Image ${index + 1}`} 
                        className="w-full h-48 object-cover rounded"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Shoreline Executive Suite</h3>
              <p className="text-amber-700 mb-4">
                Near business district. Premium 1-bedroom with office space.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/properties/long-beach/shoreline')}
              >
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {propertyImages['belmont-shore'].map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Belmont Shore Residence - Image ${index + 1}`} 
                        className="w-full h-48 object-cover rounded"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Belmont Shore Residence</h3>
              <p className="text-amber-700 mb-4">
                Steps from the beach. Spacious 3-bedroom with ocean views.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/properties/long-beach/belmont-shore')}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-amber-900">
            Furnished Rentals in Long Beach, CA: Coastal Living Made Easy
          </h2>
          <div className="text-amber-800 space-y-4">
            <p>
              Searching for furnished rentals near you in Long Beach? INFINITE SUITES provides exceptional furnished apartments in prime Long Beach locations. Our properties cater to maritime professionals, business travelers, and those seeking quality temporary housing along the California coast.
            </p>
            <p>
              Strategically positioned near the Port of Long Beach, downtown business district, and beautiful beaches, our furnished rentals offer the perfect combination of work and coastal lifestyle. Each property is thoughtfully appointed with premium furnishings and modern amenities to ensure a comfortable stay.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-900">
              Benefits of Our Long Beach Furnished Rentals
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Convenient access to the Port of Long Beach and business districts</li>
              <li>Stunning ocean and city views</li>
              <li>Complete furnishings with high-end finishes</li>
              <li>Flexible rental terms for maritime contracts</li>
              <li>Professional property management and maintenance</li>
              <li>Secure parking and building access</li>
            </ul>
            <p>
              Whether you're a maritime professional on assignment, relocating for business, or seeking a temporary coastal residence in Long Beach, our furnished rentals provide the ideal solution. INFINITE SUITES offers the perfect furnished apartment near you, combining seaside living with professional amenities in the heart of Long Beach.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LongBeachProperties;
