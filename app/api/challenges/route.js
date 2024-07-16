import dbConnect from "../../../lib/dbConnect";
import Challenge from "../../models/challengeModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await dbConnect();
    const challenges = await Challenge.find();
    return new NextResponse(JSON.stringify(challenges), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error fetching challenges", error }), { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await dbConnect();
    const body = await request.json();
    const challenge = await Challenge.create(body);
    return new NextResponse(JSON.stringify(challenge), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error creating challenge", error }), { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    await dbConnect();
    const body = await request.json();
    const challenge = await Challenge.findByIdAndUpdate(body.id, body, {
      new: true,
      runValidators: true,
    });
    return new NextResponse(JSON.stringify(challenge), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error updating challenge", error }), { status: 500 });
  }
};
