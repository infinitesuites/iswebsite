
import { Home, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const FurnishedRentals = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">
            Luxury Furnished Rentals in Burbank & Long Beach, CA
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-amber-800">
                Furnished Apartments in Burbank
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                Experience luxury living in the heart of the entertainment capital. Our Burbank 
                furnished rentals offer stylish, fully-equipped accommodations perfect for both short 
                and long-term stays.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Burbank Property Features</h3>
                  <ul className="space-y-3">
                    {[
                      "Designer furnished interiors",
                      "Full kitchen with premium appliances",
                      "In-unit washer and dryer",
                      "Private balcony or patio",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center text-amber-700">
                        <Check className="w-5 h-5 mr-2 text-amber-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-amber-800">
                Furnished Homes in Long Beach
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                Discover our curated collection of furnished rentals in Long Beach, offering 
                coastal living with all the comforts of home. Perfect for extended stays and 
                relocations.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Long Beach Property Features</h3>
                  <ul className="space-y-3">
                    {[
                      "Ocean view options available",
                      "Modern, fully equipped kitchens",
                      "Dedicated workspace",
                      "Resort-style amenities",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center text-amber-700">
                        <Check className="w-5 h-5 mr-2 text-amber-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-8 text-amber-900">
              Included with Every Rental
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Premium Furnishings",
                  description: "High-end furniture and decor throughout",
                },
                {
                  title: "Fully Equipped Kitchen",
                  description: "Everything needed for cooking and dining",
                },
                {
                  title: "Smart Home Features",
                  description: "Modern technology for convenience",
                },
                {
                  title: "Quality Linens",
                  description: "Hotel-quality bedding and towels",
                },
                {
                  title: "Entertainment",
                  description: "Smart TVs with streaming services",
                },
                {
                  title: "Utilities Included",
                  description: "All utilities and WiFi included",
                },
              ].map((amenity) => (
                <Card key={amenity.title} className="border-amber-100">
                  <CardContent className="p-6">
                    <Home className="w-8 h-8 mb-4 text-amber-600" />
                    <h3 className="text-xl font-semibold mb-2 text-amber-900">{amenity.title}</h3>
                    <p className="text-amber-700">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* SEO Content Section */}
          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-amber-900">
              Luxury Furnished Rentals in Southern California
            </h2>
            <div className="text-amber-800 space-y-4">
              <p>
                INFINITE SUITES provides premium furnished rentals in two of Southern California's 
                most desirable locations: Burbank and Long Beach. Our properties combine luxury, 
                comfort, and convenience for an unparalleled living experience.
              </p>
              <p>
                In Burbank, our furnished apartments are ideally situated near major entertainment 
                studios and the Media District. Each rental is thoughtfully designed with high-end 
                furnishings and all the amenities needed for a comfortable stay, whether you're in 
                town for a production or relocating to the area.
              </p>
              <p>
                Our Long Beach furnished rentals offer a perfect blend of coastal living and urban 
                convenience. Located near the beach and business district, these properties feature 
                modern designs, complete furnishings, and stunning views, making them ideal for 
                both short-term and extended stays.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FurnishedRentals;
