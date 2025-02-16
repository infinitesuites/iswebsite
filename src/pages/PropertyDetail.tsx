
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

const PropertyDetail = () => {
  const { location, id } = useParams();
  const navigate = useNavigate();

  const properties = {
    burbank: {
      'media-district': {
        name: "Media District Suite",
        description: "Walking distance to major studios. Fully furnished 2-bedroom luxury apartment.",
        fullDescription: `This stunning 2-bedroom apartment in Burbank's Media District offers the perfect blend of luxury and convenience. Located within walking distance to major studios, this fully furnished unit features:

        • Modern, fully equipped kitchen with stainless steel appliances
        • Spacious living room with entertainment center
        • Two well-appointed bedrooms with premium bedding
        • Dedicated home office space
        • In-unit washer and dryer
        • Secure parking
        • 24/7 building access
        • High-speed internet included`,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        price: "Starting at $4,500/month",
        amenities: ["Full Kitchen", "In-unit Laundry", "High-speed Internet", "Dedicated Workspace", "Parking"]
      },
      'downtown-burbank': {
        name: "Downtown Burbank Residence",
        description: "Heart of downtown. Modern 1-bedroom with city views and premium amenities.",
        fullDescription: `Experience luxury living in the heart of Downtown Burbank. This modern 1-bedroom apartment offers:

        • Premium city views
        • Contemporary furnishings throughout
        • Gourmet kitchen with modern appliances
        • Spacious bedroom with walk-in closet
        • Designer bathroom with premium fixtures
        • Building amenities including gym and pool
        • Walking distance to dining and entertainment
        • Dedicated parking space`,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        price: "Starting at $3,800/month",
        amenities: ["City Views", "Pool Access", "Fitness Center", "Walk to Dining", "Secure Building"]
      },
      'magnolia-park': {
        name: "Magnolia Park Suite",
        description: "Quiet residential area. Spacious 3-bedroom perfect for families.",
        fullDescription: `Located in the charming Magnolia Park neighborhood, this spacious 3-bedroom home provides:

        • Large open concept living area
        • Fully equipped chef's kitchen
        • Three comfortable bedrooms
        • Two luxurious bathrooms
        • Private backyard
        • Two-car garage
        • Quiet residential setting
        • Close to shopping and restaurants`,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        price: "Starting at $5,500/month",
        amenities: ["Private Yard", "Garage", "Pet Friendly", "Quiet Location", "Family Friendly"]
      }
    },
    "long-beach": {
      'downtown-harbor': {
        name: "Downtown Harbor View",
        description: "Stunning harbor views. Luxury 2-bedroom with modern amenities.",
        fullDescription: `Experience breathtaking harbor views from this luxury 2-bedroom apartment in downtown Long Beach:

        • Panoramic harbor and ocean views
        • High-end modern furnishings
        • Gourmet kitchen with premium appliances
        • Two spacious bedrooms
        • Designer bathrooms
        • Large balcony
        • Building amenities including pool and gym
        • Steps from dining and entertainment`,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        price: "Starting at $4,800/month",
        amenities: ["Harbor Views", "Balcony", "Pool", "Gym", "Ocean Access"]
      },
      'shoreline': {
        name: "Shoreline Executive Suite",
        description: "Near business district. Premium 1-bedroom with office space.",
        fullDescription: `Perfect for business professionals, this premium 1-bedroom suite offers:

        • Dedicated home office space
        • High-speed fiber internet
        • Modern furnishings throughout
        • Full kitchen with premium appliances
        • Comfortable bedroom with luxury bedding
        • Building amenities including business center
        • Close to downtown business district
        • Easy access to transportation`,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        price: "Starting at $3,900/month",
        amenities: ["Business Center", "Office Space", "High-speed Internet", "Central Location", "Transportation Access"]
      },
      'belmont-shore': {
        name: "Belmont Shore Residence",
        description: "Steps from the beach. Spacious 3-bedroom with ocean views.",
        fullDescription: `Live the beach lifestyle in this spacious 3-bedroom residence:

        • Ocean views from multiple rooms
        • Large open concept living area
        • Gourmet kitchen with island
        • Three comfortable bedrooms
        • Two designer bathrooms
        • Private patio
        • Steps from the beach
        • Walk to shops and restaurants`,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        price: "Starting at $6,200/month",
        amenities: ["Ocean Views", "Beach Access", "Private Patio", "Walk to Dining", "Spacious Layout"]
      }
    }
  };

  const propertyData = location && id ? properties[location as keyof typeof properties]?.[id] : null;

  if (!propertyData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-amber-900">Property Not Found</h1>
            <Button 
              onClick={() => navigate(-1)}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">{propertyData.name}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={propertyData.images[0]} 
                  alt={propertyData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <p className="text-2xl font-semibold text-amber-900 mb-4">{propertyData.price}</p>
              <div className="prose prose-amber max-w-none mb-6">
                <p>{propertyData.fullDescription}</p>
              </div>
              
              <h2 className="text-xl font-semibold mb-4 text-amber-900">Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {propertyData.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center text-amber-700">
                    <span className="mr-2">•</span>
                    {amenity}
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => navigate('/contact')}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
