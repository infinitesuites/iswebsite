
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
          <a href="/services" className="text-amber-900 hover:text-amber-600">Services</a>
          <a href="/faq" className="text-amber-900 hover:text-amber-600">FAQs</a>
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
  );
};

export default Header;
