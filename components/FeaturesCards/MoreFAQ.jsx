"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function MoreFQA() {
  const faqs = [
    {
      question: "What is the pricing for your Lupleg product?",
      answer:
        "Our Lupleg product offers a range of pricing plans to fit your needs. The basic plan starts at $9 per month, with additional features and support available in our higher-tier plans. You can view all of our pricing options on the Pricing page.",
    },
    {
      question: "What features are included in your Lupleg product?",
      answer:
        "Our Lupleg product includes a comprehensive set of features to help you streamline your workflow and improve productivity. Some of the key features include project management tools, collaboration features, data visualization, and integrations with popular third-party apps. You can find a full list of features on our Features page.",
    },
    {
      question: "How do I get started with your Lupleg product?",
      answer:
        "Getting started with our Lupleg product is easy. Simply sign up for an account on our website, and you'll be guided through the onboarding process. Our onboarding team is available to help you set up your account and customize the platform to fit your specific needs. If you have any questions or need assistance, don't hesitate to reach out to our support team.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide excellent customer support. Our support team is available 24/7 to assist you with any questions or issues you may have. You can reach out to us via email, phone, or our online chat feature. We also have a comprehensive knowledge base and FAQ section on our website, where you can find answers to common questions.",
    },
    {
      question:
        "Do you offer any training or resources for using your Lupleg product?",
      answer:
        "Absolutely! We understand that getting started with a new Lupleg product can be daunting, which is why we offer a variety of training resources to help you get the most out of our platform. This includes on-demand video tutorials, webinars, and a comprehensive user guide. Our team is also available to provide personalized training and support to ensure you're comfortable using all of the features and functionalities. For more you can get started from mms.lupleg.website",
    },
    {
      question: "How secure is your Lupleg product?",
      answer:
        "Security is of the utmost importance to us, and we take extensive measures to protect your data. Our Lupleg product is built on a secure, encrypted platform and undergoes regular security audits to ensure compliance with industry standards. We also offer advanced security features, such as two-factor authentication and role-based access controls, to give you peace of mind.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <section className="bg-white dark:bg-gray-950 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight mb-8 md:mb-10">
            Frequently Asked Questions
          </h2>
          <div className="mb-8 md:mb-10">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
