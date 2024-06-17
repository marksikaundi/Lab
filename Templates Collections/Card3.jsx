export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              It's not or. It's and.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choosing a customer communication solution is hard — but with
              Front, it’s not. Front is the only inbox built for collaboration,
              visibility, and efficiency at scale.
            </p>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-red-300 to-yellow-200 rounded-lg blur-xl transform -rotate-6" />
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Automation and attention
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Front automatically aggregates & routes customer conversations
                  from your channels, ensuring every message gets to the right
                  person.
                </p>
                <a
                  className="mt-6 inline-block text-indigo-600 hover:text-indigo-500"
                  href="#"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
