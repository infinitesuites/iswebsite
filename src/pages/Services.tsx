
import { Building2, Briefcase, Calendar, House } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Our Services</h1>
        <p className="text-xl mb-12 text-amber-800">
          Comprehensive furnished rental and corporate housing solutions tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Briefcase className="w-12 h-12 mb-4 text-amber-600" />
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">Corporate Housing</h2>
              <p className="text-amber-700 mb-4">
                Tailored housing solutions for businesses and corporations, offering flexible terms and premium amenities for relocating employees, extended business stays, and project-based assignments.
              </p>
              <ul className="list-disc pl-6 text-amber-700 space-y-2">
                <li>Customized corporate packages</li>
                <li>Dedicated account management</li>
                <li>Simplified billing process</li>
                <li>24/7 support for corporate clients</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <House className="w-12 h-12 mb-4 text-amber-600" />
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">Furnished Rentals</h2>
              <p className="text-amber-700 mb-4">
                Fully furnished luxury apartments and homes in prime locations, perfect for those seeking temporary housing without compromising on comfort and style.
              </p>
              <ul className="list-disc pl-6 text-amber-700 space-y-2">
                <li>Premium furniture packages</li>
                <li>Utilities included</li>
                <li>High-speed internet</li>
                <li>Regular maintenance service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Building2 className="w-12 h-12 mb-4 text-amber-600" />
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">Insurance Relocations</h2>
              <p className="text-amber-700 mb-4">
                Specialized temporary housing solutions for insurance claims, providing comfortable accommodations during home repairs or renovations.
              </p>
              <ul className="list-disc pl-6 text-amber-700 space-y-2">
                <li>Insurance-friendly billing</li>
                <li>Flexible duration stays</li>
                <li>Convenient locations</li>
                <li>Move-in ready units</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 mb-4 text-amber-600" />
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">Extended Stays</h2>
              <p className="text-amber-700 mb-4">
                Long-term furnished accommodations ideal for extended business trips, temporary relocations, or anyone seeking a home away from home.
              </p>
              <ul className="list-disc pl-6 text-amber-700 space-y-2">
                <li>Flexible lease terms</li>
                <li>Full amenities package</li>
                <li>Regular cleaning service</li>
                <li>Local area guidance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* SEO Content Section */}
        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-amber-900">
            Premium Furnished Rental Services in Southern California
          </h2>
          <div className="text-amber-800 space-y-4">
            <p>
              INFINITE SUITES offers comprehensive furnished rental services in Southern California's most desirable locations. Our premium housing solutions cater to corporate professionals, insurance relocations, and extended-stay guests seeking quality accommodations in Burbank and Long Beach.
            </p>
            <p>
              With our extensive experience in corporate housing and furnished rentals, we understand the unique needs of business travelers, entertainment industry professionals, and individuals requiring temporary housing solutions. Our services combine luxury, convenience, and flexibility to ensure a seamless living experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
