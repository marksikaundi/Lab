export default function sitemap() {
  return [
    {
      url: "https://www.lupleg.website/mentorships",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.lupleg.website/challenge",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.5,
    },
    {
      url: "https://www.lupleg.website/podcasts",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
    {
      url: "https://www.lupleg.website/academy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 2.5,
    },
    {
      url: "https://www.lupleg.website/affiliates",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3,
    },
    {
      url: "https://www.lupleg.website/sponsor",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 3.5,
    },
  ];
}
