import dbConnect from "../../../lib/dbConnect";
import Challenge from "../../models/challengeModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await dbConnect();
    const challenges = await Challenge.find();
    return new NextResponse(JSON.stringify(challenges), {status: 200});
  }catch (error) {
    return new NextResponse({
      status: 500,
      body: JSON.stringify({ message: "Error fetching challenges", error }),
    });
  }
}