import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Course from "../../models/CourseModel";

// GET method to retrieve all courses or a course by ID
export async function GET(req) {
  await connectToDatabase();

  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("id");

    if (courseId) {
      // Fetch course by ID
      const course = await Course.findById(courseId);
      if (!course) {
        return NextResponse.json(
          { error: "Course not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(course, { status: 200 });
    } else {
      // Fetch all courses
      const courses = await Course.find({});
      return NextResponse.json({ courses }, { status: 200 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST method to create a new course
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
        ? sections.map((section) => ({
            section_title: section.section_title,
            section_description: section.section_description,
            section_list: Array.isArray(section.section_list)
              ? section.section_list.map((item) => ({
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

// PUT method to update an existing course by ID
export async function PUT(req) {
  await connectToDatabase();

  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("id");

    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      );
    }

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

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        title,
        description,
        chapters,
        courseImage,
        technologies,
        sections: Array.isArray(sections)
          ? sections.map((section) => ({
              section_title: section.section_title,
              section_description: section.section_description,
              section_list: Array.isArray(section.section_list)
                ? section.section_list.map((item) => ({
                    list_item_title: item.list_item_title,
                    list_item_disc: item.list_item_disc,
                  }))
                : [],
            }))
          : [],
      },
      { new: true }
    );

    if (!updatedCourse) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(updatedCourse, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE method to delete a course by ID
export async function DELETE(req) {
  await connectToDatabase();

  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("id");

    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      );
    }

    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
