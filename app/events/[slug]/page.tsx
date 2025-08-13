import { getEvent, getAllEvents } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map(e => ({ slug: e.slug }));
}

export default async function EventDetail({ params }:{params:{slug:string}}){
  const { frontmatter, content } = await getEvent(params.slug);
  const html = await renderMarkdown(content);
  return (
    <section className="section">
      <div className="container-max max-w-3xl">
        <h1 className="h1">{frontmatter.title}</h1>
        <div className="mt-2 text-sm text-slate-600">Date: {frontmatter.date} • {frontmatter.mode}{frontmatter.location? ` • ${frontmatter.location}`:''}</div>
        <div className="prose prose-slate max-w-none mt-6" dangerouslySetInnerHTML={{__html: html}} />
        <div className="mt-8 flex gap-3">
          <Link href="https://forms.gle/" className="btn btn-primary">Register</Link>
          <Link href="/events" className="btn">Back to Events</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Event",
            "name": frontmatter.title,
            "startDate": frontmatter.date,
            "eventAttendanceMode": frontmatter.mode === 'Online' ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
            "location": frontmatter.location || "Jharsuguda",
            "organizer": {"@type":"Organization","name":"Cognition Classes","url":"https://www.cognitionclasses.in"}
          })}}
        />
      </div>
    </section>
  );
}
