import Image from 'next/image';

export const metadata = { title: 'About' };

export default function AboutPage(){
  return (
    <section className="section">
      <div className="container-max">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">About <span className="text-primary">Cognition Classes</span></h1>
            <p className="p mt-4">
              Since 2015, we’ve helped students in Jharsuguda master <strong>Maths (8–12)</strong> and modern
              <strong> Software Development</strong> skills. Our approach blends fundamentals, practice, and projects.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="card text-center">
                <div className="text-3xl font-extrabold text-primary">11+</div>
                <div className="text-sm text-slate-600">Years Teaching</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-extrabold text-primary">1500+</div>
                <div className="text-sm text-slate-600">Students Taught</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-extrabold text-primary">100s</div>
                <div className="text-sm text-slate-600">Selections</div>
              </div>
            </div>
          </div>
          <div className="relative h-80 md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1400&auto=format&fit=crop"
              alt="Founder — Nitesh Agrawal"
              fill
              className="object-cover rounded-2xl shadow-glow"
            />
          </div>
        </div>

        {/* Founder */}
        <div className="section">
          <div className="card-grad">
            <div className="card-inner grid md:grid-cols-3 gap-8 items-center">
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
                  alt="Nitesh Agrawal — Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="h2">Founder: Nitesh Agrawal</h2>
                <p className="p mt-2">
                  B.Tech (CSE), <strong>NIT Rourkela</strong> • ex‑Microsoft • 11+ years of teaching.
                  Nitesh believes in clarity-first teaching: strong basics, lots of practice, and projects that build confidence.
                </p>
                <ul className="mt-4 text-slate-700 space-y-2 list-disc pl-5">
                  <li>Personalised mentoring with small batch sizes.</li>
                  <li>Structured notes, weekly practice, and timed tests.</li>
                  <li>Project-driven learning for software tracks.</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href="https://wa.me/919040760487" className="btn btn-primary">Talk to Nitesh</a>
                  <a href="/courses" className="btn">Explore Courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="section">
          <h3 className="h2 text-center">Our Journey</h3>
          <div className="mt-8 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200" />
            <div className="space-y-8">
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-10">
                  <div className="badge">2015</div>
                  <h4 className="font-semibold mt-2">Started in Jharsuguda</h4>
                  <p className="p mt-1">Focused Maths coaching with small groups.</p>
                </div>
                <div className="hidden md:block" />
              </div>
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="hidden md:block" />
                <div className="md:pl-10">
                  <div className="badge">2019</div>
                  <h4 className="font-semibold mt-2">Expanded Subjects</h4>
                  <p className="p mt-1">Physics, Chemistry, Biology, English, SST.</p>
                </div>
              </div>
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-10">
                  <div className="badge">2023</div>
                  <h4 className="font-semibold mt-2">Launched Dev Tracks</h4>
                  <p className="p mt-1">Web & Android development with live projects.</p>
                </div>
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="section bg-slate-50 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="font-semibold">Clarity & Fundamentals</h4>
              <p className="p mt-2">We break concepts into simple, memorable steps.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Practice & Feedback</h4>
              <p className="p mt-2">Weekly practice, timed tests, and doubt sessions.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Projects & Outcomes</h4>
              <p className="p mt-2">Build confidence with real-world projects and results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
