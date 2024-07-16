import MoreFAQ from "@/components/FeaturesCards/MoreFAQ";
import React from "react";

function FAQ() {
  return (
    <div className="w-full bg-transparent">
      <div className="flex flex-col  md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-16 py-10 px-8">
        <div className="container  flex flex-col md:w-3/5 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 gap-3">
          <div className="pb-5">
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              Frequently Asked{" "}
              <span className=" text-green-600">Questions</span>
            </h2>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl lg:text-2xl text-black text-lg font-bold">
                How can you ensure we find the best candidates aligned with our
                specific needs?{" "}
              </h3>
              <div className="bg-green-200 text-black  text-xs md:text-sm px-4 py-2 rounded-2xl">
                For Business
              </div>
            </div>

            <p className="lg:text-sm text-black xl:text-lg 2xl:text-xl md:text-xs">
              At Lupleg, we don't just fill positions, we build your dream team.
              Our meticulous vetting, training, and recruiting processes ensure
              we find the perfect match for your specific needs. With a proven
              track record of delivering top talent, we're confident we can
              connect you with the ideal candidate to propel your organization
              forward.
            </p>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl text-black lg:text-2xl text-lg font-bold">
                How do I start as a complete beginner?
              </h3>
              <div className="bg-black text-white text-xs md:text-sm px-4 py-2 rounded-2xl">
                Program
              </div>
            </div>

            <p className="lg:text-sm text-black xl:text-lg 2xl:text-xl md:text-xs">
              If you're a complete beginner, don't worry! Our programs are
              designed to meet you where you are and take you where you want to
              go. Sign up and get started today!
            </p>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl text-black lg:text-2xl text-lg font-bold">
                Any limitations on people we can assist due to resource
                constraints?
              </h3>
              <div className="bg-green-200 text-black text-xs md:text-sm px-4 py-2 rounded-2xl">
                For NGOs
              </div>
            </div>

            <p className="lg:text-sm text-black xl:text-lg 2xl:text-xl md:text-xs">
              We offer scalable solutions to accommodate any number of
              beneficiaries, depending on your chosen plan and how many you want
              to support.
            </p>
          </div>
          <div className="text-green-900 gap-4 flex flex-col">
            <div className="flex gap-2">
              <h3 className="md:text-xl text-black lg:text-2xl text-lg font-bold">
                How much does it cost to use Mentor Management System?
              </h3>
              <div className="bg-black text-white text-xs md:text-sm px-4 py-2 rounded-2xl">
                Products
              </div>
            </div>

            <p className="lg:text-sm text-black xl:text-lg 2xl:text-xl md:text-xs">
              Lupleg MMS offers a range of flexible pricing plans to match the
              unique needs of your organization. Whether you're a startup or a
              large enterprise, we have a solution that scales with you.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 bg-green-300 rounded-md">
          <img
            src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e56544e17a293a19177f89_faq%20img-p-500.webp"
            className="object-cover"
            alt="Talent Image"
          />
        </div>
      </div>

      <MoreFAQ />

      <div className="flex flex-col py-16">
        <div className="flex flex-col gap-4 md:mb-10 mb-6">
          <h3 className="text-center text-green-900">Helpdesk</h3>
          <p className="text-center text-black md:text-5xl text-3xl font-bold">
            Need some more help? <br />
            Visit our help desk
          </p>
        </div>
        <div className="bg-green-800 rounded-lg transition hover:-translate-y-1 w-max mx-auto group cursor-pointer">
          <div className="animated-border after:opacity-100 before:opacity-100 p-0.5 rounded-lg text-green-300 flex justify-center items-center">
            <a
              className="bg-green-800 text-white text-lg font-bold py-4 px-8 cursor-pointer relative w-full rounded-lg group-hover:bg-green-700 z-10"
              href="/#helpdesk"
            >
              Go to Help Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
