import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  const handlePropertiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/#locations';
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/57d03305-f946-4e90-900b-d775428407f4.png" 
            alt="INFINITE SUITES Logo" 
            className="h-12"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/#locations" 
            onClick={handlePropertiesClick}
            className="text-amber-900 hover:text-amber-600"
          >
            Properties
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-amber-900 hover:text-amber-600">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-white">
                    <Link to="/services/corporate-housing" className="block p-3 hover:bg-amber-50 rounded-lg">
                      <div className="text-lg font-semibold text-amber-900">Corporate Housing</div>
                      <p className="text-sm text-amber-700">Premium furnished housing for business professionals</p>
                    </Link>
                    <Link to="/services/furnished-rentals" className="block p-3 hover:bg-amber-50 rounded-lg">
                      <div className="text-lg font-semibold text-amber-900">Furnished Rentals</div>
                      <p className="text-sm text-amber-700">Fully equipped luxury apartments and homes</p>
                    </Link>
                    <Link to="/services/insurance-relocations" className="block p-3 hover:bg-amber-50 rounded-lg">
                      <div className="text-lg font-semibold text-amber-900">Insurance Relocations</div>
                      <p className="text-sm text-amber-700">Temporary housing for insurance claims</p>
                    </Link>
                    <Link to="/services/extended-stays" className="block p-3 hover:bg-amber-50 rounded-lg">
                      <div className="text-lg font-semibold text-amber-900">Extended Stays</div>
                      <p className="text-sm text-amber-700">Long-term furnished accommodations</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/blog" className="text-amber-900 hover:text-amber-600">Blog</Link>
          <a href="/faq" className="text-amber-900 hover:text-amber-600">FAQs</a>
          <Link to="/contact" className="text-amber-900 hover:text-amber-600">Contact</Link>
        </nav>
        <Button 
          className="bg-amber-600 hover:bg-amber-700 text-white"
          onClick={() => window.location.href = '/contact'}
        >
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
