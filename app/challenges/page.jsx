
import Challenges from "../../components/ChallengeComponents/Challenges";


const getChallenges = async () => {
  const res = await fetch(process.env.GET_CHALLENGES_URL);

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
