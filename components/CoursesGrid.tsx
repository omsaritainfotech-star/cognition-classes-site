'use client';
import { useMemo, useState } from 'react';
import CourseCard from './CourseCard';

type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  fee: string;
  nextBatch?: string;
  level?: string;
  excerpt?: string;
};

export default function CoursesGrid({courses}:{courses:Course[]}){
  const categories = useMemo(()=> {
    const set = new Set<string>();
    courses.forEach(c => set.add(c.category));
    return ['All', ...Array.from(set)];
  }, [courses]);

  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All' ? courses : courses.filter(c => c.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={()=>setActive(cat)}
            className={`px-4 py-2 rounded-full border ${active===cat ? 'bg-primary text-white border-primary' : 'bg-white border-slate-300 hover:border-primary'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(c => <CourseCard key={c.slug} course={c} />)}
      </div>
    </div>
  );
}
