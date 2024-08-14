const getChallenges = async () => {
  const res = await fetch("http://localhost:3000/api/challenges");
  if (!res.ok) {
    throw new Error("Failed to fetch challenges");
  }
  return res.json();
};

export const singleChallenge = async ({_id}) => {
  const data = await getChallenges();
  const challenge = data.challenges.find((challenge) => challenge._id === _id);
  return challenge;
};