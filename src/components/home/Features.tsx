
import { Building2, MapPin, Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          The INFINITE SUITES Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Building2 className="w-12 h-12 mx-auto mb-4 text-amber-600" />}
            title="Luxury Properties"
            description="Handpicked properties in prime locations"
          />
          <FeatureCard
            icon={<MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />}
            title="Prime Locations"
            description="Convenient access to business districts"
          />
          <FeatureCard
            icon={<Briefcase className="w-12 h-12 mx-auto mb-4 text-amber-600" />}
            title="Corporate Solutions"
            description="Tailored packages for businesses"
          />
          <FeatureCard
            icon={<Calendar className="w-12 h-12 mx-auto mb-4 text-amber-600" />}
            title="Flexible Terms"
            description="Accommodating short and long-term stays"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="border-amber-100 hover:shadow-lg transition-shadow">
    <CardContent className="p-6 text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-amber-900">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </CardContent>
  </Card>
);

export default Features;
