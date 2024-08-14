import Link from "next/link";
import Challenges from "../../components/ChallengeComponents/Challenges";

const getChallenges = async () => {
  const res = await fetch("https://lupleg.website/api/challenges");
  // const res = await fetch("http://localhost:3000/api/challenges");

  if (!res.ok) {
    throw new Error("Failed to fetch challenges");
  }
  return res.json();
};

export default async function ChallengesPage() {
  const data = await getChallenges();
  const challenges = Array.isArray(data.challenges) ? data.challenges : [];

  return (
    <div>
      <Challenges challenges={challenges} />
    </div>
  );
}
