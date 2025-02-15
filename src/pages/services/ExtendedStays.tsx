
import { Calendar, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const ExtendedStays = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">
            Extended Stay Accommodations in Burbank & Long Beach, CA
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-amber-800">
                Long-Term Stays in Burbank
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                Perfect for entertainment industry professionals and extended business trips, our 
                Burbank extended stay properties offer all the comforts of home with the flexibility 
                of a month-to-month lease.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Extended Stay Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Flexible lease terms",
                      "Entertainment district location",
                      "Monthly cleaning service",
                      "Dedicated parking space",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center text-amber-700">
                        <Check className="w-5 h-5 mr-2 text-amber-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-amber-800">
                Long-Term Rentals in Long Beach
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                Experience coastal living with our Long Beach extended stay properties. Ideal for 
                maritime professionals, traveling nurses, and anyone seeking a home away from home 
                for an extended period.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Property Features</h3>
                  <ul className="space-y-3">
                    {[
                      "Month-to-month availability",
                      "Coastal location options",
                      "Full-size kitchens",
                      "Business center access",
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

          {/* SEO Content Section */}
          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-amber-900">
              Extended Stay Housing in Southern California
            </h2>
            <div className="text-amber-800 space-y-4">
              <p>
                INFINITE SUITES offers premium extended stay accommodations in Burbank and Long Beach, 
                California. Our properties are designed for guests seeking longer-term housing solutions 
                without compromising on comfort or convenience.
              </p>
              <p>
                Our Burbank extended stay properties cater to entertainment industry professionals, 
                providing convenient access to major studios and production facilities. Each unit 
                features a full kitchen, dedicated workspace, and comfortable living areas perfect 
                for extended projects or relocations.
              </p>
              <p>
                In Long Beach, our extended stay accommodations offer the perfect blend of coastal 
                living and urban convenience. Whether you're a traveling professional or exploring 
                a long-term move to Southern California, our furnished properties provide all the 
                amenities needed for a comfortable extended stay.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExtendedStays;
