import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  fee: string;
  nextBatch?: string;
  level?: string;
  excerpt?: string;
};

export type Event = {
  slug: string;
  title: string;
  date: string;
  mode: string; // Online/Offline
  location?: string;
  excerpt?: string;
};

const contentDir = (p: string) => path.join(process.cwd(), 'content', p);

export async function getAllCourses(): Promise<Course[]> {
  const dir = contentDir('courses');
  const files = await fs.readdir(dir);
  const mdFiles = files.filter(f => f.endsWith('.md'));
  const items: Course[] = [];
  for (const file of mdFiles) {
    const raw = await fs.readFile(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    items.push({
      slug: file.replace(/\.md$/, ''),
      title: data.title ?? 'Untitled',
      category: data.category ?? 'Software Dev',
      duration: data.duration ?? '3 months',
      fee: data.fee ?? '₹—',
      nextBatch: data.nextBatch,
      level: data.level,
      excerpt: data.excerpt,
    });
  }
  return items.sort((a,b)=> (a.category+b.title).localeCompare(b.category+a.title));
}

export async function getCourse(slug: string) {
  const p = path.join(contentDir('courses'), `${slug}.md`);
  const raw = await fs.readFile(p, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export async function getAllEvents(): Promise<Event[]> {
  const dir = contentDir('events');
  const files = await fs.readdir(dir);
  const mdFiles = files.filter(f => f.endsWith('.md'));
  const items: Event[] = [];
  for (const file of mdFiles) {
    const raw = await fs.readFile(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    items.push({
      slug: file.replace(/\.md$/, ''),
      title: data.title ?? 'Untitled Event',
      date: data.date ?? '',
      mode: data.mode ?? 'Online',
      location: data.location,
      excerpt: data.excerpt,
    });
  }
  return items.sort((a,b)=> (b.date||'').localeCompare(a.date||''));
}

export async function getEvent(slug: string) {
  const p = path.join(contentDir('events'), `${slug}.md`);
  const raw = await fs.readFile(p, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}


export type Testimonial = {
  name: string;
  course?: string;
  quote: string;
};

export async function getTestimonials(): Promise<Testimonial[]> {
  const dir = path.join(process.cwd(), 'content', 'testimonials');
  const files = await fs.readdir(dir);
  const mdFiles = files.filter(f=>f.endsWith('.md'));
  const items: Testimonial[] = [];
  for (const file of mdFiles){
    const raw = await fs.readFile(path.join(dir, file), 'utf-8');
    const { data } = require('gray-matter')(raw);
    items.push({ name: data.name, course: data.course, quote: data.quote });
  }
  return items;
}


export type ResultItem = {
  slug: string;
  title: string;
  studentName: string;
  exam: string;
  year: number;
  score?: string;
  image?: string;
};

export async function getAllResults(): Promise<ResultItem[]> {
  const dir = path.join(process.cwd(), 'content', 'results');
  const files = await fs.readdir(dir);
  const mdFiles = files.filter(f=>f.endsWith('.md'));
  const items: ResultItem[] = [];
  for (const file of mdFiles){
    const raw = await fs.readFile(path.join(dir, file), 'utf-8');
    const matter = (await import('gray-matter')).default;
    const { data } = matter(raw);
    items.push({
      slug: file.replace(/\.md$/, ''),
      title: data.title || 'Result',
      studentName: data.studentName || '',
      exam: data.exam || '',
      year: Number(data.year || 0),
      score: data.score,
      image: data.image
    });
  }
  // Newest (by year) first
  return items.sort((a,b)=> b.year - a.year);
}

export async function getResult(slug: string){
  const p = path.join(process.cwd(), 'content', 'results', `${slug}.md`);
  const raw = await fs.readFile(p, 'utf-8');
  const matter = (await import('gray-matter')).default;
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}
