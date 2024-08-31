import mongoose from 'mongoose';

const listItemSchema = new mongoose.Schema({
  list_item_title: {
    type: String,
  },
  list_item_disc: {
    type: String,
  },
});

const sectionSchema = new mongoose.Schema({
  section_title: {
    type: String,
    required: true
  },
  section_description: {
    type: String,
  },
  section_list: [listItemSchema],
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  chapters: {
    type: Number,
    default: 0
  },
  courseImage: {
    type: String,
    required: true,
    default: '/profile-sample.jpeg'
  },
  overview: {
    type: String,
    required: true
  },
  technologies: [String],
  sections: [sectionSchema],
  timestamps: true
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);


// COURSE DOCUMENT EXAMPLE


// {
//   "title": "Digital Skills Training",
//   "description": "The Digital Skills Training program is designed to equip you with the knowledge and skills needed to succeed in the tech industry. Whether you're looking to start a career in data analysis, graphic design, or web development, this program will provide you with the foundational skills and hands-on experience to kickstart your journey as a digital professional. The program is led by an experienced mentor who will guide you through the curriculum, provide personalized coaching, and support you in developing a strong portfolio of projects to showcase your skills to potential employers.",
//   "chapters": 2,
//   "technologies": ["Design", "Full Stack", "Tailwind", "Frontend"],
//   "sections":[ {
//       "section_title": "Program Structure:",
//       "section_description": "The program is divided into three months, each focusing on a different aspect of digital skills training. The curriculum is designed to become progressively more challenging, allowing you to build on your knowledge and skills as you progress through the program.",
//       "section_list": [
//           {
//               "list_item_title": "Month 1:",
//               "list_item_disc": "Foundational Skills (Weeks 1-4)"
//           },
//           {
//               "list_item_title": "Month 2:",
//               "list_item_disc": "Specialization Tracks (Weeks 5-8)"
//           },
//           {
//               "list_item_title": "Month 3:",
//               "list_item_disc": " Project & Portfolio Development (Weeks 9-12)"
//           }
//       ]
//   },
//   {
//       "section_title": "Weekly Breakdown:",
//       "section_list": [
//           {
//               "list_item_title": "Workshops:",
//               "list_item_disc": "Interactive sessions led by the mentor covering key topics relevant to the program theme for that month. Workshops will be a mix of theory and hands-on exercises."
//           },
//           {
//               "list_item_title": "Group Discussions:",
//               "list_item_disc": "Opportunities to connect with fellow program participants, share experiences, and ask questions in a supportive environment."
//           },
//           {
//               "list_item_title": "Guest Speaker Sessions:",
//               "list_item_disc": " Learn from established freelancers and industry experts who will share their insights and practical advice."
//           },
//            {
//               "list_item_title": "Action Steps:",
//               "list_item_disc": "Weekly takeaways to ensure you're implementing the learnings and making progress towards your goals."
//           },
//            {
//               "list_item_title": "One on One Coaching:",
//               "list_item_disc": "Regular individual coaching sessions with the mentor to address your specific needs and challenges, and develop a personalized action plan."
//           },
//            {
//               "list_item_title": "Mentorship Program Overview:",
//               "list_item_disc": "This document provides an overview of the mentorship program structure, curriculum, and additional resources to help you succeed as a digital Skills."
//           },
//           {
//               "list_item_title": "Weekly Breakdown:",
//               "list_item_disc": "A detailed breakdown of the weekly activities and learning objectives for each month of the program."
//           },
//           {
//               "list_item_title": "Additional Resources:",
//               "list_item_disc": "Links to external resources, tools, and articles to supplement your learning and deepen your understanding of digital skills."
//           }
//       ]
//   },
//   {
//       "section_title": "Month 1: Foundational Digital Skills",
//       "section_description": "The first month of the program focuses on building a strong foundation in digital skills, including microsoft office, google suite, social media marketing, and <Link href='/frontend-development>'basic programming concepts</Link> . The goal is to equip you with the essential knowledge and skills needed to succeed in the tech industry."
//       },
//       {
//       "section_title": "Week 1-2: Microsoft Office and Google Suite",
//       "section_list": [
//           {
//               "list_item_title": "Microsoft Word:",
//               "list_item_disc": "Formatting, editing, and creating professional documents and reports in Word."
//           },
//           {
//               "list_item_title": "Microsoft Excel: ",
//               "list_item_disc": "Basic formulas, functions, and data analysis in Excel."
//           },
//           {
//               "list_item_title": "Microsoft PowerPoint:",
//               "list_item_disc": " Designing engaging presentations and slideshows in PowerPoint."
//           }
//       ]
//       },
//       {
//       "section_title": "Week 3-4: Google Suite and Social Media Marketing",
//       "section_list": [
//           {
//               "list_item_title": "Google Docs, Sheets, and Slides:",
//               "list_item_disc": "Collaborating and sharing documents, spreadsheets, and presentations using Google Suite."
//           },
//           {
//               "list_item_title": "Google Drive:",
//               "list_item_disc": "Organizing and managing files and folders in Google Drive."
//           },
//           {
//               "list_item_title": "Google Calendar:",
//               "list_item_disc": "Scheduling and managing events and appointments in Google Calendar."
//           },
//           {
//               "list_item_title": "Gmail:",
//               "list_item_disc": "Managing emails, contacts, and tasks in Gmail."
//           },
//           {
//               "list_item_title": "Social Media Marketing:",
//               "list_item_disc": "Understanding social media platforms, content creation, and engagement strategies."
//           }
//       ]
//       },
//        {
//       "section_title": "Month 2: Specialization Tracks (Weeks 5-8)",
//       "section_description": "Choose one specialization track to delve deeper into a specific skillset:"
//       },
//         {
//       "section_title": "Track A: Data Analysis",
//       "section_list": [
//           {
//               "list_item_title": "Data Analysis Fundamentals:",
//               "list_item_disc": "Introduction to data analysis concepts"
//           },
//           {
//               "list_item_title": "Data Visualization:",
//               "list_item_disc": "Creating visualizations and dashboards to convey insights from data sets."
//           },
//           {
//               "list_item_title": "Statistical Analysis:",
//               "list_item_disc": "Applying statistical methods to analyze and interpret data."
//           },
//           {
//               "list_item_title": "Machine Learning:",
//               "list_item_disc": "Introduction to machine learning algorithms and models."
//           },
//           {
//               "list_item_title": "Python for Data Analysis:",
//               "list_item_disc": "Using Python libraries like Pandas and NumPy for data manipulation and analysis."
//           },
//           {
//               "list_item_title": "SQL for Data Analysis:",
//               "list_item_disc": " Querying and analyzing data using SQL."
//           },
//           {
//               "list_item_title": "Data Analysis Tools:",
//               "list_item_disc": " Working with tools like Excel, Tableau, and Power BI for data analysis."
//           },
//           {
//               "list_item_title": "Data Analysis Projects:",
//               "list_item_disc": "Hands-on projects to apply data analysis skills to real-world data sets."
//           }
//       ]
//       },
//       {
//       "section_title": "Track B: Graphic Design",
//       "section_list": [
//           {
//               "list_item_title": "Graphic Design Fundamentals:",
//               "list_item_disc": "Introduction to design principles and concepts."
//           },
//           {
//               "list_item_title": "Adobe Photoshop:",
//               "list_item_disc": "Image editing, retouching, and manipulation in Photoshop."
//           },
//           {
//               "list_item_title": "Adobe Illustrator:",
//               "list_item_disc": "Creating vector graphics and illustrations in Illustrator."
//           },
//           {
//               "list_item_title": "Adobe InDesign:",
//               "list_item_disc": "Designing layouts and publications in InDesign."
//           },
//           {
//               "list_item_title": "UI/UX Design:",
//               "list_item_disc": "User interface and user experience design principles."
//           },
//           {
//               "list_item_title": "Branding and Identity:",
//               "list_item_disc": "Creating brand assets and visual identities."
//           },
//           {
//               "list_item_title": "Graphic Design Tools:",
//               "list_item_disc": "Working with tools like Canva, Sketch, and Figma."
//           },
//           {
//               "list_item_title": "Graphic Design Projects: ",
//               "list_item_disc": "Hands-on projects to apply graphic design skills."
//           }
//       ]
//       },
//        {
//       "section_title": "Track C: Coding Fundamentals",
//       "section_list": [
//           {
//               "list_item_title": "Programming Fundamentals: ",
//               "list_item_disc": "Introduction to programming concepts"
//           },
//           {
//               "list_item_title": "HTML and CSS:",
//               "list_item_disc": "Building and styling web pages with HTML and CSS"
//           },
//           {
//               "list_item_title": "JavaScript:",
//               "list_item_disc": "Adding interactivity and functionality with JavaScript"
//           },
//           {
//               "list_item_title": "Version Control:",
//               "list_item_disc": "Using Git and GitHub for version control"
//           },
//           {
//               "list_item_title": "Web Development Tools:",
//               "list_item_disc": "Working with tools like VS Code and Chrome DevTools"
//           },
//           {
//               "list_item_title": "Responsive Design:",
//               "list_item_disc": "Creating responsive and mobile-friendly websites"
//           },
//           {
//               "list_item_title": "Web Development Projects: ",
//               "list_item_disc": "Hands-on projects to apply web development skills"
//           }
//       ]
//       },
//       {
//           "section_description": "Month 3: Project & Portfolio Development (Weeks 9-12)"
//       },
//       {
//           "section_description" : "Week 9: Project Selection & Planning:",
//           "section_list" :[
//               {
//                   "list_item_disc": "Identify a project idea based on your specialization track"
//               },
//              {
//                   "list_item_disc": "Define project scope, requirements, and timeline"

//               },
//                {
//                   "list_item_disc": "Create a project plan and outline key milestones"

//               },
//               {
//                   "list_item_disc": "Set up project management tools and version control systems"

//               },
//               {
//                   "list_item_disc": "Develop a project proposal and present it to the mentor for feedbacks"

//               }
//           ]
//       },

//       {
//           "section_description" : "Week 10-11: Project Development",
//           "section_list" :[
//               {
//                   "list_item_disc": "Implement the project plan and work on developing the project"
//               },
//              {
//                   "list_item_disc": "Collaborate with the mentor and fellow participants for feedback and support"

//               },
//                {
//                   "list_item_disc": "Iterate on the project based on feedback and make necessary adjustments"

//               },
//               {
//                   "list_item_disc": "Document the project development process and challenges faced"

//               },
//               {
//                   "list_item_disc": "Prepare a project presentation and demo to showcase the project"

//               },
//                {
//                   "list_item_disc": "Review and refine the project based on feedback from the mentor and peers"
//               },
//              {
//                   "list_item_disc": "Finalize the project and prepare it for inclusion in your portfolio"

//               },
//                {
//                   "list_item_disc": "Update your resume, LinkedIn profile, and portfolio with the project details"

//               },
//               {
//                   "list_item_disc": "Prepare for job interviews and showcase your project during networking events"

//               },
//               {
//                   "list_item_disc": "Reflect on the project development process and identify areas for improvement"

//               },
//               {
//                   "list_item_disc": "Share your project and portfolio with the mentor and fellow participants for feedback and support"

//               }
//           ]
//       },
//        {
//           "section_description" : "Week 12: Portfolio Building & Career Preparation:",
//           "section_list" :[
//               {
//                   "list_item_disc": "Develop a professional portfolio showcasing your projects and skills"
//               },
//              {
//                   "list_item_disc": "Create a personal brand and online presence to attract potential employers"

//               },
//                {
//                   "list_item_disc": "Prepare for job interviews, networking events, and career fairs to land your dream job."

//               },
//               {
//                   "list_item_disc": "Review and refine your resume, cover letter, and LinkedIn profile to stand out to employers"

//               },
//               {
//                   "list_item_disc": "Practice interview questions and scenarios to build confidence and improve your communication skills"

//               },
//                {
//                   "list_item_disc": "Develop a job search strategy and apply to relevant job openings in your field"
//               },
//              {
//                   "list_item_disc": "Connect with industry professionals and build your network to increase your job prospects"

//               },
//                {
//                   "list_item_disc": "Reflect on your learning journey and celebrate your achievements and growth throughout the program"

//               },
//               {
//                   "list_item_disc": "Share your portfolio and career goals with the mentor and fellow participants for feedback and support"

//               }
//           ]
//       },

//       {
//           "section_description" : "Benefits:",
//           "section_list" :[
//               {
//                   "list_item_disc": "Gain practical skills and hands-on experience in digital skills."
//               },
//              {
//                   "list_item_disc": "Build a strong portfolio of projects to showcase your skills to potential employers"

//               },
//                {
//                   "list_item_disc": "Receive personalized coaching and support from an experienced mentor."

//               },
//               {
//                   "list_item_disc": "Connect with industry professionals and expand your professional network"

//               },
//               {
//                   "list_item_disc": "Develop a job search strategy and prepare for interviews and networking events"

//               },
//                {
//                   "list_item_disc": "Join a community of like-minded individuals and share your learning journey"
//               },
//              {
//                   "list_item_disc": "Gain confidence in your abilities and take the next step in your career as a backend developer"

//               }
//           ]
//       },
//        {
//           "section_title" : "Additional Resources:",
//           "section_descrption" : "The following resources are recommended to supplement your learning and deepen your understanding of digital skills:",
//           "section_list" :[
//               {
//                   "list_item_title": "Books:",
//                   "list_item_disc": "Cracking the Coding Interview by Gayle Laakmann McDowell, Design for Hackers by David Kadavy, Data Science for Business by Foster Provost and Tom Fawcett."
//               },
//              {
//                   "list_item_title": "Online Courses:",
//                   "list_item_disc": "Coursera, Udemy, and Codecademy offer a wide range of courses on digital skills, data analysis, graphic design, and coding."
//               },
//                {
//                   "list_item_title": "Blogs and Articles:",
//                   "list_item_disc": "Medium, Towards Data Science, and Smashing Magazine are great resources for reading up on the latest trends and best practices in digital skills."

//               },
//               {
//                   "list_item_title": "Communities: ",
//                   "list_item_disc": "Join online communities like Stack Overflow, GitHub, and Reddit to connect with other developers and designers, ask questions, and share your knowledge."

//               },
//               {
//                   "list_item_disc": "Develop a job search strategy and prepare for interviews and networking events"

//               },
//                {
//                   "list_item_disc": "Join a community of like-minded individuals and share your learning journey"
//               },
//              {
//                   "list_item_disc": "Gain confidence in your abilities and take the next step in your career as a backend developer"

//               }
//           ]
//       }
      
//   ]
// }