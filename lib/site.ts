import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type HomeSettings = {
  title_prefix: string;
  title_highlight: string;
  title_suffix: string;
  subtitle?: string;
  image?: string;
  badges?: string[];
  primary_cta_label?: string;
  primary_cta_href?: string;
  secondary_cta_label?: string;
  secondary_cta_href?: string;
};

export async function getHomeSettings(): Promise<HomeSettings> {
  const p = path.join(process.cwd(), 'content', 'site', 'home.md');
  const raw = await fs.readFile(p, 'utf-8');
  const { data } = matter(raw);
  return {
    title_prefix: data.title_prefix ?? 'Learn',
    title_highlight: data.title_highlight ?? 'Maths & Software',
    title_suffix: data.title_suffix ?? 'from pros who build for real.',
    subtitle: data.subtitle ?? '',
    image: data.image ?? 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop',
    badges: Array.isArray(data.badges) ? data.badges : ['Maths 8–12','Software Dev','New Batches'],
    primary_cta_label: data.primary_cta_label ?? 'Enroll on WhatsApp',
    primary_cta_href: data.primary_cta_href ?? 'https://wa.me/919040760487',
    secondary_cta_label: data.secondary_cta_label ?? 'Browse Courses',
    secondary_cta_href: data.secondary_cta_href ?? '/courses',
  };
}
