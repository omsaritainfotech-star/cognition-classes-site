import Link from 'next/link';

export default function CourseCard({course}:{course:any}){
  return (
    <div className="card-grad">
      <div className="card-inner h-full flex flex-col">
        <div className="text-sm text-primary font-semibold">{course.category}</div>
        <h3 className="text-xl font-semibold mt-1">{course.title}</h3>
        <p className="p mt-2 flex-1">{course.excerpt || 'Learn by building real projects with mentor guidance.'}</p>
        <div className="mt-4 text-sm text-slate-600">Duration: {course.duration} • Fee: {course.fee}{course.nextBatch? ` • Next batch: ${course.nextBatch}`:''}</div>
        <div className="mt-5 flex gap-3">
          <Link href={`/courses/${course.slug}`} className="btn btn-ghost text-sm">Details</Link>
          <Link href="https://wa.me/919040760487" className="btn btn-primary text-sm">Enroll</Link>
        </div>
      </div>
    </div>
  )
}
