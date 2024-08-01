import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ChallengeCard() {
  return (
    <Card className="group rounded-xl lg:w-[300px] md:w-[250px] sm:w-[200px] my-4">
      <Link href="/courses/#" className=" h-[50px] w-full rounded-xl">
        <img
          src="/profile-sample.jpeg"
          alt={`Episode`}
          className="h-32 w-full object-cover rounded-t-xl"
        />
      </Link>
      <Link href="/courses/#">
        <CardContent className="flex flex-col gap-2">
          <h3 className="text-md font-bold line-clamp-2 pt-3">
            Build a Canva Clone
          </h3>
          <div className="text-white  bg-green-950 rounded-sm w-28 px-1">
            52 Chapters
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
