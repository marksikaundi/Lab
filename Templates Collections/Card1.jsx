export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              It's not or. It's and.
            </h1>
            <p className="text-lg text-gray-600">
              Choosing a customer communication solution is hard — but with
              Front, it's not. Front is the only inbox built for collaboration,
              visibility, and efficiency at scale.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-lg transform -skew-y-6 -rotate-6 -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8" />
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Automation and attention
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Front automatically aggregates & routes customer conversations
                from your channels, ensuring every message gets to the right
                person.
              </p>
              <a
                className="text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                href="#"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
