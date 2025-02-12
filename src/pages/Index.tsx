
import { Building2, MapPin, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-white to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-900">
            Luxury Furnished Rentals & Corporate Housing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-800">
            Your Home Away From Home for Extended Stays & Corporate Relocations
          </p>
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
          >
            View Available Properties
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            Why Choose Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Luxury Properties
                </h3>
                <p className="text-amber-700">
                  Handpicked properties in prime locations
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Prime Locations
                </h3>
                <p className="text-amber-700">
                  Convenient access to business districts
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Corporate Solutions
                </h3>
                <p className="text-amber-700">
                  Tailored packages for businesses
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  Flexible Terms
                </h3>
                <p className="text-amber-700">
                  Accommodating short and long-term stays
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-900">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="text-xl mb-8 text-amber-800">
            Browse our selection of premium furnished rentals and corporate housing options
          </p>
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
