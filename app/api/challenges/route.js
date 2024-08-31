import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Challenge from "../../models/ChallengeModel";

export async function GET(req) {
  await connectToDatabase();

  try {
    const challenges = await Challenge.find({});
    return NextResponse.json({ challenges }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const { title, description, tags, difficulty } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const newChallenge = new Challenge({
      title,
      description,
      tags: tags || [],
      difficulty: difficulty || "medium",
    });

    await newChallenge.save();
    return NextResponse.json(newChallenge, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
