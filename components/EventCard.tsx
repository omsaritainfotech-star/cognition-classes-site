import Link from 'next/link';

export default function EventCard({event}:{event:any}){
  return (
    <div className="card-grad">
      <div className="card-inner h-full flex flex-col">
        <div className="text-sm text-primary font-semibold">{event.mode}</div>
        <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
        <p className="p mt-2 flex-1">{event.excerpt || ''}</p>
        <div className="mt-4 text-sm text-slate-600">Date: {event.date}{event.location? ` • ${event.location}`:''}</div>
        <div className="mt-5 flex gap-3">
          <Link href={`/events/${event.slug}`} className="btn btn-ghost text-sm">Details</Link>
          <Link href="https://forms.gle/" className="btn btn-primary text-sm">Register</Link>
        </div>
      </div>
    </div>
  )
}
