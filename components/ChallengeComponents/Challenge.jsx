"use client";

function Challenge({ challengeId, challenges }) {
  const challenge = challenges.find(
    (challenge) => challenge._id === challengeId
  );
  console.log(challenge.tags);
  return (
    <div className="w-full mt-8">
      <h1 className="w-full bg-gray-50 border-l-4 border-green-900 text-xl md:text-4xl mb-8 pl-4">
        {challenge.title}
      </h1>
      {challenge.description ? (
        <p className="text-md md:text-lg p-4 bg-gray-50 rounded-xl my-4">
          {challenge.description}
        </p>
      ) : (
        ""
      )}
      {challenge.difficulty ? (
        <div className="text-md md:text-lg p-4 bg-gray-50 rounded-xl">
          Difficulty:{" "}
          <button className="px-6 py-2 rounded-md border mt-2 mb-8">
            {challenge.difficulty}
          </button>
        </div>
      ) : (
        ""
      )}
      {
        <div className="text-md md:text-lg p-4 bg-gray-50 rounded-xl">
          Tags:{" "}
          {challenge.tags.map((tag) => (
            <button key={tag} className="px-6 py-2 rounded-md border mt-2 mb-8">
              {tag}
            </button>
          ))}
        </div>
      }
      <div className="my-6 p-4"></div>
    </div>
  );
}

export default Challenge;
