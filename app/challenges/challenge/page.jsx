import { singleChallenge } from "@/helpers/index";
import React from "react";
import Link from "next/link";

async function Challenge({ searchParams }) {
  const _id = searchParams._id;
  const challenge = await singleChallenge({ _id });

  return (
    <div className="mt-10">
      <Link href="/challenges" className="px-6 py-2 rounded-md border mt-2 mb-8">Challenges</Link>

        <div className="grid grid-cols-12 w-full gap-8 mt-8">
          <div className="col-span-12 md:col-span-6">
          <img
            src="https://utfs.io/f/b9b4d679-34e2-4664-93b8-2c8283fa88dd-1h.png"
            alt="Course Image"
            width={600}
            height={400}
            className="h-[400px] w-full object-cover rounded-lg"
          />
          </div>
          <div href="#" className="block h-full col-span-12 md:col-span-6" prefetch={false}>
            <div className="px-4 h-[340px]">
              <h3 className="text-3xl font-semibold">{challenge.title}</h3>
              <p className="mt-2 text-lg ">
                {challenge.description}
              </p>
            </div>
            <button className="px-6 py-2 rounded-md border mt-6">Next</button>
          </div>
        </div>
      </div>
  );
}

export default Challenge;
