
const Footer = () => {
  return (
    <footer className="bg-[#bf9b30] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">INFINITE SUITES</h3>
            <p className="text-white">
              Premium furnished rentals and corporate housing solutions in Southern California
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/properties/burbank" 
                  className="hover:text-amber-100 transition-colors"
                >
                  Burbank, CA
                </a>
              </li>
              <li>
                <a 
                  href="/properties/long-beach" 
                  className="hover:text-amber-100 transition-colors"
                >
                  Long Beach, CA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/corporate-housing" className="hover:text-amber-100 transition-colors">
                  Corporate Housing
                </a>
              </li>
              <li>
                <a href="/services/furnished-rentals" className="hover:text-amber-100 transition-colors">
                  Furnished Rentals
                </a>
              </li>
              <li>
                <a href="/services/insurance-relocations" className="hover:text-amber-100 transition-colors">
                  Insurance Relocations
                </a>
              </li>
              <li>
                <a href="/services/extended-stays" className="hover:text-amber-100 transition-colors">
                  Extended Stays
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-amber-100 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: stay@infinitesuites.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-100 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} INFINITE SUITES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
