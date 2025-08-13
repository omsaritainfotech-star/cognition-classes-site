import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import CourseCard from '@/components/CourseCard';
import EventCard from '@/components/EventCard';
import Link from 'next/link';
import { getAllCourses, getAllEvents, getTestimonials, getAllResults } from '@/lib/content';

import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default async function HomePage(){
  const courses = await getAllCourses();
  const events = await getAllEvents();
  const testimonials = await getTestimonials();
  const results = await getAllResults();
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container-max">
          <SectionTitle title="Trending Courses" subtitle="Industry-ready, project-based learning."/>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.slice(0,3).map(c => <CourseCard key={c.slug} course={c} />)}
          </div>
          <div className="text-center mt-8"><Link href="/courses" className="btn">View all courses</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="container-max">
          <SectionTitle title="Results & Selections" subtitle="A snapshot of our achievers."/>
          <div className="grid md:grid-cols-3 gap-6">
            {results.slice(0,3).map((r:any)=>(
              <div key={r.slug} className="card">
                <div className="text-sm text-primary font-semibold">{r.year}</div>
                <div className="mt-1 font-semibold">{r.title}</div>
                <div className="text-sm text-slate-600">{r.studentName} • {r.exam}{r.score? ` • ${r.score}`:''}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8"><a href="/results" className="btn">View all results</a></div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-max">
          <SectionTitle title="What Students Say" subtitle="Real outcomes, real confidence."/>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>
      <section className="section">
        <div className="container-max">
          <SectionTitle title="Results & Selections" subtitle="A snapshot of our achievers."/>
          <div className="grid md:grid-cols-3 gap-6">
            {results.slice(0,3).map((r:any)=>(
              <div key={r.slug} className="card">
                <div className="text-sm text-primary font-semibold">{r.year}</div>
                <div className="mt-1 font-semibold">{r.title}</div>
                <div className="text-sm text-slate-600">{r.studentName} • {r.exam}{r.score? ` • ${r.score}`:''}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8"><a href="/results" className="btn">View all results</a></div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-max">
          <SectionTitle title="Upcoming Events" subtitle="Free workshops & bootcamps."/>
          <div className="grid md:grid-cols-3 gap-6">
            {events.slice(0,3).map(e => <EventCard key={e.slug} event={e} />)}
          </div>
          <div className="text-center mt-8"><Link href="/events" className="btn">View all events</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="container-max grid md:grid-cols-2 gap-8 items-center">
          <div className="card">
            <h3 className="h2">Why Cognition?</h3>
            <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-2">
              <li>Since 2015 in Jharsuguda — trusted by thousands.</li>
              <li>Founder: Nitesh Agrawal (B.Tech CSE, NIT Rourkela), ex‑Microsoft.</li>
              <li>Small batches, personalised doubt solving.</li>
              <li>Real projects for dev tracks; result‑oriented Maths coaching (8–12).</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="h2">Subjects for Classes 8–12</h3>
            <p className="p mt-2">Maths (focus), Physics, Chemistry, Biology, English, SST.</p>
            <h3 className="h2 mt-6">Software Development Tracks</h3>
            <p className="p mt-2">Web App Development, Android App Development, Coding Foundations & more.</p>
          </div>
        </div>
      </section>
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-max text-center">
          <h3 className="h2">Ready to level up?</h3>
          <p className="p mt-2">Join the next batch. Chat with us on WhatsApp.</p>
          <Link href="https://wa.me/919040760487" className="btn btn-primary mt-5">Talk to a Mentor</Link>
        </div>
      </section>
    </>
  );
}
