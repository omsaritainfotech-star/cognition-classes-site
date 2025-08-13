import { getCourse, getAllCourses } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map(c => ({ slug: c.slug }));
}

export default async function CourseDetail({ params }:{params:{slug:string}}){
  const { frontmatter, content } = await getCourse(params.slug);
  const html = await renderMarkdown(content);
  return (
    <section className="section">
      <div className="container-max max-w-3xl">
        <h1 className="h1">{frontmatter.title}</h1>
        <p className="p mt-2">{frontmatter.excerpt}</p>
        <div className="mt-4 text-sm text-slate-600">Category: {frontmatter.category} • Duration: {frontmatter.duration} • Fee: {frontmatter.fee}{frontmatter.nextBatch? ` • Next batch: ${frontmatter.nextBatch}`:''}</div>
        <div className="prose prose-slate max-w-none mt-8" dangerouslySetInnerHTML={{__html: html}} />
        <div className="mt-8 flex gap-3">
          <Link href="https://wa.me/919040760487" className="btn btn-primary">Enroll Now</Link>
          <Link href="/courses" className="btn">Back to Courses</Link>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Course",
            "name": frontmatter.title,
            "provider": {"@type":"Organization","name":"Cognition Classes","sameAs":"https://www.cognitionclasses.in"},
            "hasCourseInstance": {
              "@type":"CourseInstance",
              "courseMode": "InPerson,Online",
              "startDate": frontmatter.nextBatch || ""
            }
          })}}
        />
      </div>
    </section>
  );
}
