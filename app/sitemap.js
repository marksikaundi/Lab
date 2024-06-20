export default function Sitemap() {
  return [
    {
      url: "https://www.lupleg.website/data-structures",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.lupleg.website/algorithms",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.5,
    },
    {
      url: "https://www.lupleg.website/coding-interviews",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
    {
      url: "https://www.lupleg.website/frontend-practice",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 2.5,
    },
    {
      url: "https://www.lupleg.website/backend-practice",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3,
    },
    {
      url: "https://www.lupleg.website/mentorships",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3.5,
    },
    {
      url: "https://www.lupleg.website/academy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 4,
    },
  ];
}
