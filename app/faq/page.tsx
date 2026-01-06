
import FAQPage from "@/components/FAQPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Infinite Suites Help Center",
  description: "Get answers to common questions about corporate housing, insurance ALE, and move-in logistics.",
};

export default function FAQ() {
  return <FAQPage />;
}
