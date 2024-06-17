import React from "react";
import CardSection from "@/components/FeaturesCards/CardSection";
import CardSections from "@/components/FeaturesCards/CardSections";

function ProgramSummary() {
  return (
    <div>
      <CardSection
        subtitle="Frontend Development Mentorship"
        description="The Frontend Development Mentorship is a 3-month program that is designed to help you become a frontend developer. You will learn how to build beautiful and responsive user interfaces using HTML, CSS, and JavaScript. You will also learn how to work with design tools like Figma, and how to collaborate with backend developers to build fullstack applications. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://i.imgur.com/AOuw4qC.jpg"
        learnMoreLink="mentorships"
      />
      <CardSections
        subtitle="FullStack Development Mentorship"
        description="The Fullstack Development Mentorship is a 6-month program that is designed to help you become a full-fledged developer. You will learn how to build web applications from scratch, using the latest technologies and best practices. You will also learn how to work with a team, manage projects, and communicate effectively with clients. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://i.imgur.com/vhxao6r.jpeg"
        learnMoreLink="mentorships"
      />

      <CardSection
        subtitle="Backend Development Mentorship"
        description="The Backend Development Mentorship is a 3-month program that is designed to help you become a backend developer. You will learn how to build scalable and secure server-side applications using Node.js, Express, and MongoDB. You will also learn how to work with APIs, databases, and cloud services. By the end of the program, you will have a portfolio of projects that you can show to potential employers, and the skills and confidence to succeed in the tech industry."
        imageUrl="https://i.imgur.com/8J0SZJU.jpeg"
        learnMoreLink="mentorships"
      />

      <CardSections
        subtitle="Digital Skills Training Programs"
        description="The Digital Skills Training Programs are short courses that are designed to help you learn new skills and advance your career. You can choose from a variety of topics, including web development, digital marketing, graphic design, and more. Each course is taught by an expert instructor, and includes hands-on projects and real-world examples. By the end of the course, you will have the skills and confidence to succeed in your chosen field."
        imageUrl="https://i.imgur.com/i4Sdm62.jpg"
        learnMoreLink="mentorships"
      />
    </div>
  );
}

export default ProgramSummary;
