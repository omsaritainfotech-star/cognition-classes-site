import { MetadataRoute } from 'next';
import { getAllCourses, getAllEvents } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ✅ Set this to your real domain
  const base = 'https://yourdomain.com';

  // Narrow the string literals so TS accepts them
  type CF = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

  const staticRoutes = (['', '/courses', '/events', '/results', '/gallery', '/about', '/contact'] as const).map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as CF,
    priority: 0.8,
  }));

  const courses = await getAllCourses();
  const courseRoutes = courses.map((c) => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as CF,
    priority: 0.7,
  }));

  const events = await getAllEvents();
  const eventRoutes = events.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as CF,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...eventRoutes];
}
