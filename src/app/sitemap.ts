import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://campanella-demo.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Jika ada page lain, tambahkan di sini:
    // { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
  ];
}