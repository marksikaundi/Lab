import React from "react";
import CardSection from "@/components/FeaturesCards/CardSection";
import CardSections from "@/components/FeaturesCards/CardSections";
import MoreFAQ from "@/components/FeaturesCards/MoreFAQ";

function Organization() {
  return (
    <div>
      <div className="w-full bg-transparent">
        <div className="flex flex-col container mx-auto lg:py-24 py-20 px-8 w-7/10 justify-center">
          <div className="flex flex-col gap-4 text-center ">
            <p className=" md:text-lg">
              We fuel innovation that leaves a lasting mark
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-10">
              <span className="block xl:inline">Empowering individuals</span>{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 xl:inline">
                to reach their
              </span>{" "}
              <span className="block xl:inline">Developers</span>{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 xl:inline">
                full potential
              </span>
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649fc78acaebbe296387ce9f_Screenshot%202023-07-01%20at%2007.25-p-1080.webp"
              className="rounded-md object-cover"
            ></img>
          </div>
        </div>
      </div>

      <CardSections
        title="Make life easier for you"
        subtitle="Unlock the Potential of Lupleg Graduates for Your Organization"
        description="At Lupleg, we are committed to nurturing exceptional talent in the tech industry. Our comprehensive training programs equip individuals with cutting-edge skills and empower them to excel in their careers."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardSection
        title="Train Smarter, Not Harder"
        subtitle="Streamlined Programs for Success in the Tech Industry"
        description="Our training programs are designed to help individuals develop the skills they need to succeed in the tech industry. We have you covered from the basics to advanced topics, ensuring that you are well-prepared for the challenges ahead."
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />
      <CardSections
        title="Regardless of distance"
        subtitle="Bridging the gap for clear and effective collaboration"
        description="Location shouldn't limit learning. Lupleg makes top-notch training accessible to your beneficiaries, anywhere. Our programs bridge the gap, ensuring everyone receives the same high-quality experience, regardless of distance"
        imageUrl="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5184308199cf4867fa2ba_Group%20151-p-800.webp"
        learnMoreLink="a"
      />

      <MoreFAQ />
    </div>
  );
}

export default Organization;
