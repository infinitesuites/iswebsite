
import { Building2, MapPin, Briefcase, Calendar, House, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/57d03305-f946-4e90-900b-d775428407f4.png" 
              alt="INFINITE SUITES Logo" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#properties" className="text-amber-900 hover:text-amber-600">Properties</a>
            <a href="#services" className="text-amber-900 hover:text-amber-600">Services</a>
            <a href="#locations" className="text-amber-900 hover:text-amber-600">Locations</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-600">Contact</a>
          </nav>
          <Button 
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => window.location.href = '/contact'}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-white to-amber-50 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-900">
            INFINITE SUITES
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-800">
            Premier Furnished Rentals & Corporate Housing Solutions in Burbank and Long Beach, CA
          </p>
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
          >
            View Available Properties
          </Button>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            Prime Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-amber-900">Burbank, CA</h3>
                <p className="text-amber-700 mb-4">
                  Luxury furnished apartments near major studios and entertainment companies. 
                  Perfect for entertainment industry professionals and corporate relocations.
                </p>
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.location.href = '/properties/burbank'}
                >
                  Explore Burbank Properties
                </Button>
              </CardContent>
            </Card>
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-amber-900">Long Beach, CA</h3>
                <p className="text-amber-700 mb-4">
                  Premium furnished rentals near the port and business district. 
                  Ideal for maritime professionals and extended business stays.
                </p>
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.location.href = '/properties/long-beach'}
                >
                  Explore Long Beach Properties
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            The INFINITE SUITES Difference
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
            Experience Infinite Possibilities
          </h2>
          <p className="text-xl mb-8 text-amber-800">
            Discover INFINITE SUITES&apos; premium furnished rentals and corporate housing solutions in Burbank and Long Beach
          </p>
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">INFINITE SUITES</h3>
              <p className="text-amber-100">
                Premium furnished rentals and corporate housing solutions in Southern California
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Locations</h4>
              <ul className="space-y-2">
                <li>Burbank, CA</li>
                <li>Long Beach, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Corporate Housing</li>
                <li>Furnished Rentals</li>
                <li>Insurance Relocations</li>
                <li>Extended Stays</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@infinitesuites.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} INFINITE SUITES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
