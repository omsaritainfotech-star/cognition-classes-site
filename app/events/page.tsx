import { getAllEvents } from '@/lib/content';
import EventCard from '@/components/EventCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Events',
  description: 'Workshops, bootcamps, and info sessions at Cognition Classes.'
};

export default async function EventsPage(){
  const events = await getAllEvents();
  return (
    <section className="section">
      <div className="container-max">
        <SectionTitle title="Events & Workshops" subtitle="Join our upcoming sessions."/>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map(e => <EventCard key={e.slug} event={e} />)}
        </div>
      </div>
    </section>
  );
}
