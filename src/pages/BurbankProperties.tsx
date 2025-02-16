import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";
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

const BurbankProperties = () => {
  const navigate = useNavigate();
  
  const propertyImages = {
    'media-district': [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
    ],
    'downtown-burbank': [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
    ],
    'magnolia-park': [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Burbank Properties</h1>
        <p className="text-xl mb-8 text-amber-800">
          Luxury furnished apartments in Burbank, CA - Perfect for entertainment industry professionals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {propertyImages['media-district'].map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Media District Suite - Image ${index + 1}`} 
                        className="w-full h-48 object-cover rounded"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Media District Suite</h3>
              <p className="text-amber-700 mb-4">
                Walking distance to major studios. Fully furnished 2-bedroom luxury apartment.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/properties/burbank/media-district')}
              >
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {propertyImages['downtown-burbank'].map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Downtown Burbank Residence - Image ${index + 1}`} 
                        className="w-full h-48 object-cover rounded"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Downtown Burbank Residence</h3>
              <p className="text-amber-700 mb-4">
                Heart of downtown. Modern 1-bedroom with city views and premium amenities.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/properties/burbank/downtown-burbank')}
              >
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {propertyImages['magnolia-park'].map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Magnolia Park Suite - Image ${index + 1}`} 
                        className="w-full h-48 object-cover rounded"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">Magnolia Park Suite</h3>
              <p className="text-amber-700 mb-4">
                Quiet residential area. Spacious 3-bedroom perfect for families.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/properties/burbank/magnolia-park')}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-amber-900">
            Furnished Rentals in Burbank, CA: Your Home Away From Home
          </h2>
          <div className="text-amber-800 space-y-4">
            <p>
              Looking for furnished rentals near you in Burbank? INFINITE SUITES offers premium furnished apartments in the heart of the entertainment capital. Our Burbank properties provide the perfect blend of luxury, convenience, and comfort for entertainment industry professionals and corporate travelers.
            </p>
            <p>
              Located just minutes from major studios including Warner Bros., Disney, and Universal, our furnished rentals in Burbank offer an ideal living solution for those working in the entertainment industry. Each property comes fully equipped with high-end furnishings, modern appliances, and all the amenities you need to feel at home.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-900">
              Why Choose Our Burbank Furnished Rentals?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prime location near major studios and entertainment companies</li>
              <li>Fully furnished with premium furniture and appliances</li>
              <li>Flexible lease terms for short and long-term stays</li>
              <li>Professional cleaning and maintenance services</li>
              <li>24/7 customer support for all residents</li>
              <li>High-speed internet and smart home features included</li>
            </ul>
            <p>
              Whether you're relocating for a production project, need temporary housing during a home renovation, or seeking an extended stay solution in Burbank, our furnished rentals provide the perfect home base. With INFINITE SUITES, you'll find the ideal furnished apartment near you, combining the comfort of home with the convenience of a prime Burbank location.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BurbankProperties;
