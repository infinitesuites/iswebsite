import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">Frequently Asked Questions</h1>
          <p className="text-xl mb-12 text-amber-800">
            Find answers to common questions about our furnished rental services
          </p>

          <Accordion type="single" collapsible className="mb-16">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-amber-900">What are the minimum and maximum stay durations?</AccordionTrigger>
              <AccordionContent className="text-amber-700">
                Our furnished rentals typically have a minimum stay of 30 days, with no maximum duration limit. We offer flexible lease terms to accommodate your specific needs, whether it's a month-long business trip or a year-long relocation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-amber-900">What's included in a furnished rental?</AccordionTrigger>
              <AccordionContent className="text-amber-700">
                Our furnished rentals come complete with premium furniture, fully equipped kitchens, linens, utilities, high-speed internet, and entertainment systems. Each unit is move-in ready with all the essentials you need for comfortable living.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-amber-900">How does the booking process work?</AccordionTrigger>
              <AccordionContent className="text-amber-700">
                Simply contact us through our booking form with your requirements. Our team will reach out within 24 hours to discuss available options, arrange viewings if desired, and guide you through the rental agreement process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-amber-900">Do you offer corporate housing programs?</AccordionTrigger>
              <AccordionContent className="text-amber-700">
                Yes, we specialize in corporate housing solutions with customized packages for businesses. We offer simplified billing, dedicated account management, and flexible terms to meet your corporate relocation needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-amber-900">Are utilities included in the rental price?</AccordionTrigger>
              <AccordionContent className="text-amber-700">
                Yes, all utilities including electricity, water, gas, and high-speed internet are included in your rental price. This makes budgeting easier with no surprise additional costs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* SEO Content Section */}
          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-amber-900">
              Everything You Need to Know About Our Furnished Rentals
            </h2>
            <div className="text-amber-800 space-y-4">
              <p>
                At INFINITE SUITES, we understand that you may have questions about our furnished rental services in Southern California. Our comprehensive FAQ section addresses common inquiries about our corporate housing solutions, furnished apartments, and extended stay options in Burbank and Long Beach.
              </p>
              <p>
                Whether you're seeking information about our booking process, included amenities, or corporate housing programs, we're committed to providing clear, detailed answers to help you make informed decisions about your temporary housing needs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
