
import React from "react";
import Link from "next/link";
import Challenge from "../../../../components/ChallengeComponents/Challenge";

const getChallenges = async () => {
  const res = await fetch(process.env.GET_CHALLENGES_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch challenges");
  }
  return res.json();
};

async function SingleChallenge({ params }) {
  const challenge_id = params.challenge_id;
  const data = await getChallenges();
  const challenges = Array.isArray(data.challenges) ? data.challenges : [];

  return (
    <div className="mt-10">
      <Link
        href="/challenges"
        className="px-6 py-2 rounded-md border mt-2 mb-8"
      >
        Challenges
      </Link>
      <Challenge
        challengeId={challenge_id}
        challenges={challenges}
      />
    </div>
  );
}

export default SingleChallenge;
