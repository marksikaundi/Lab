import Link from "next/link";
import Plan from "@/components/FeaturesCards/Plan";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function Premium() {
  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-r from-[#133415] to-[#0c2d0d] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium Member
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Become the best version of yourself by improving your coding skills!
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-[#000000] font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            prefetch={false}
          >
            Get Premium
          </Link>
        </div>
      </section>

      <Plan />
      <MoreFQA />
    </div>
  );
}
