import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20">
      <div className="container-max py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-xl">Cognition <span className="text-primary">Classes</span></div>
          <p className="p mt-3">Best coaching in Jharsuguda since 2015 for Maths (8–12) and modern Software Development tracks.</p>
        </div>
        <div>
          <div className="h2 text-xl mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link className="hover:text-primary" href="/courses">Courses</Link></li>
            <li><Link className="hover:text-primary" href="/events">Events</Link></li>
            <li><Link className="hover:text-primary" href="/results">Results</Link></li>
            <li><Link className="hover:text-primary" href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <div className="h2 text-xl mb-3">Contact</div>
          <p className="p">Sarbahal, Jharsuguda, Odisha<br/>Phone: <a href="tel:+919040760487" className="hover:text-primary">+91 9040760487</a><br/>Email: info@cognitionclasses.in</p>
        </div>
        <div>
          <div className="h2 text-xl mb-3">Hours</div>
          <p className="p">Mon–Sun: 7:00 AM – 8:00 PM</p>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 py-6 border-t">© {new Date().getFullYear()} Cognition Classes. All rights reserved.</div>
    </footer>
  );
}
