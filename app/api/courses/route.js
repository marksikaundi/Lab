import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Course from "../../models/CourseModel";

export async function GET(req) {
  await connectToDatabase();

  try {
    const courses = await Course.find({});
    return NextResponse.json({ courses }, { status: 200 });
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
    const {
      title,
      description,
      chapters,
      courseImage,
      technologies,
      sections,
    } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const newCourse = new Course({
      title,
      description,
      chapters,
      courseImage,
      technologies,
      sections: Array.isArray(sections)
        ? sections.map(section => ({
            section_title: section.section_title,
            section_description: section.section_description,
            section_list: Array.isArray(section.section_list)
              ? section.section_list.map(item => ({
                  list_item_title: item.list_item_title,
                  list_item_disc: item.list_item_disc,
                }))
              : [],
          }))
        : [],
    });

    await newCourse.save();
    return NextResponse.json(newCourse, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}