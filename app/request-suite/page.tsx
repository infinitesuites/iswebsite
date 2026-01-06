
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Suite | Executive Housing Inquiry | Infinite Suites",
  description: "Request a premium furnished suite in Southern California. 60-minute response time guaranteed.",
};

export default function RequestSuite() {
  return <ContactForm />;
}
