export default function Component() {
  return (
    <div className="bg-[#fcd34d]/30">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              It's not or. It's and.
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choosing a customer communication solution is hard — but with
              Front, it's not. Front is the only inbox built for collaboration,
              visibility, and efficiency at scale.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#fde68a] to-[#fca5a5] p-8 rounded-xl">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Automation and attention
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Front automatically aggregates & routes customer conversations
              from your channels, ensuring every message gets to the right
              person.
            </p>
            <a
              className="mt-6 text-base font-semibold text-indigo-600 hover:text-indigo-500"
              href="#"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
