import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-hero-gradient -z-10" />
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex gap-2 mb-3">
            <span className="badge badge-math">Maths 8–12</span>
            <span className="badge badge-new">Software Dev</span>
            <span className="badge badge-hot">New Batches</span>
          </div>
          <h1 className="h1">
            Learn <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Maths & Software</span> from pros who build for real.
          </h1>
          <p className="p mt-4">Since 2015 in Jharsuguda. Founded by Nitesh Agrawal (B.Tech CSE, NIT Rourkela; ex-Microsoft). Live classes, projects, and result-driven learning.</p>
          <div className="mt-6 flex gap-3">
            <Link href="https://wa.me/919040760487" className="btn btn-primary">Enroll on WhatsApp</Link>
            <Link href="/courses" className="btn btn-ghost">Browse Courses</Link>
          </div>
        </div>
        <div className="relative h-72 md:h-96">
          <div className="absolute -inset-4 rounded-[2rem] bg-card-gradient blur-2xl opacity-70 -z-10" />
          <Image src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop" alt="Students learning" fill className="object-cover rounded-2xl shadow-glow" />
        </div>
      </div>
    </section>
  );
}
