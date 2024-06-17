import React from "react";

const CardSection = ({
  title,
  subtitle,
  description,
  imageUrl,
  learnMoreLink,
}) => {
  return (
    <div className="w-full bg-transparent">
      <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-28 py-24 px-8">
        <div className="md:w-1/2">
          <img src={imageUrl} className="object-cover" alt="Talent Image" />
        </div>
        <div className="container flex flex-col md:w-1/2 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 gap-3">
          <div>
            <p className="lg:mb-2 xl:mb-3 2xl:mb-4 md:text-lg">{title}</p>
            <h2 className="font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
              {subtitle}
            </h2>
          </div>
          <div>
            <p className="lg:text-sm xl:text-lg 2xl:text-xl md:text-xs">
              {description}
            </p>
          </div>
          <div>
            <a href={learnMoreLink} className="text-green-900 hover:text-orange-500">Learn more →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
