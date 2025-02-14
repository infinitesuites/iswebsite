
import { Building2, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const CorporateHousing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">
            Corporate Housing Solutions in Burbank & Long Beach, CA
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-amber-800">
                Premium Corporate Housing in Burbank
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                Located in the heart of the entertainment industry, our Burbank corporate housing 
                offers convenient access to major studios including Warner Bros., Disney, and Universal. 
                Perfect for entertainment professionals seeking luxury temporary housing in Burbank.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Burbank Location Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Walking distance to major studios",
                      "Near Burbank Media District",
                      "Close to Bob Hope Airport",
                      "Easy access to 134 and 5 freeways",
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
                Executive Housing in Long Beach
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                Strategically located near the Port of Long Beach and business district, our Long Beach 
                corporate housing provides ideal accommodations for maritime professionals and business 
                executives requiring extended stays.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Long Beach Location Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Minutes from Port of Long Beach",
                      "Near Downtown Business District",
                      "Close to Long Beach Airport",
                      "Easy access to 405 and 710 freeways",
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
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-8 text-amber-900">
              Corporate Housing Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Fully Furnished",
                  description: "Premium furniture and housewares included",
                },
                {
                  title: "Business Ready",
                  description: "High-speed internet and dedicated workspace",
                },
                {
                  title: "All-Inclusive",
                  description: "Utilities, WiFi, and premium TV included",
                },
                {
                  title: "Flexible Terms",
                  description: "Monthly stays with extension options",
                },
                {
                  title: "24/7 Support",
                  description: "Dedicated corporate housing specialists",
                },
                {
                  title: "Concierge Services",
                  description: "Local area guidance and support",
                },
              ].map((amenity) => (
                <Card key={amenity.title} className="border-amber-100">
                  <CardContent className="p-6">
                    <Building2 className="w-8 h-8 mb-4 text-amber-600" />
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
              Premium Corporate Housing in Southern California
            </h2>
            <div className="text-amber-800 space-y-4">
              <p>
                INFINITE SUITES offers premium corporate housing solutions in Burbank and Long Beach, 
                California. Our furnished apartments provide the perfect blend of comfort and 
                convenience for business professionals seeking temporary housing in Southern California.
              </p>
              <p>
                In Burbank, our corporate apartments are strategically located near major entertainment 
                studios, making them ideal for industry professionals working on productions or 
                relocating to the area. Each unit is thoughtfully furnished and equipped with 
                everything needed for a comfortable extended stay.
              </p>
              <p>
                Our Long Beach corporate housing options cater to maritime industry professionals and 
                business executives working at or near the Port of Long Beach. With easy access to 
                the business district and port facilities, our accommodations provide the perfect 
                base for extended business stays.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CorporateHousing;
