import { MetadataRoute } from 'next';
import { getAllCourses, getAllEvents } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.cognitionclasses.in';
  const staticRoutes = ['', '/courses', '/events', '/gallery', '/about', '/contact'].map((p)=> ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const courseRoutes = (await getAllCourses()).map(c => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const eventRoutes = (await getAllEvents()).map(e => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6
  }));

  return [...staticRoutes, ...courseRoutes, ...eventRoutes];
}
