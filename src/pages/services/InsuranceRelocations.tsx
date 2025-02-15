
import { Building2, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const InsuranceRelocations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">
            Insurance Relocation Housing in Burbank & Long Beach, CA
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-amber-800">
                Insurance Housing Solutions in Burbank
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                We provide comfortable temporary housing for Burbank residents affected by insurance 
                claims. Our furnished accommodations ensure you maintain your quality of life while 
                your property undergoes repairs or restoration.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Burbank Location Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Convenient Burbank locations",
                      "Direct insurance billing available",
                      "Flexible lease terms",
                      "Move-in ready accommodations",
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
                Insurance Housing Options in Long Beach
              </h2>
              <p className="text-lg mb-6 text-amber-700">
                INFINITE SUITES offers comprehensive temporary housing solutions for Long Beach 
                residents displaced by insurance events. Our properties provide a comfortable home 
                away from home during property repairs.
              </p>
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">Long Beach Features</h3>
                  <ul className="space-y-3">
                    {[
                      "Prime Long Beach locations",
                      "Insurance-friendly billing",
                      "Fully furnished units",
                      "All utilities included",
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
              Insurance Housing Solutions in Southern California
            </h2>
            <div className="text-amber-800 space-y-4">
              <p>
                INFINITE SUITES specializes in providing temporary housing solutions for insurance 
                claims in Burbank and Long Beach. Our properties offer comfortable, fully-furnished 
                accommodations for residents displaced by various insurance events.
              </p>
              <p>
                For Burbank residents, we offer convenient locations near major neighborhoods and 
                amenities. Our properties provide easy access to local services while maintaining 
                proximity to your home during repairs. Each unit comes fully equipped with 
                everything needed for a comfortable temporary stay.
              </p>
              <p>
                In Long Beach, our insurance housing options cater to coastal residents needing 
                temporary accommodations. We work directly with insurance providers to ensure a 
                smooth transition and hassle-free billing process, allowing you to focus on 
                getting back to normal life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InsuranceRelocations;
