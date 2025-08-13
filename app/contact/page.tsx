export const metadata = { title: 'Contact' };

export default function ContactPage(){
  return (
    <section className="section">
      <div className="container-max max-w-3xl">
        <h1 className="h1">Contact Us</h1>
        <p className="p mt-3">We usually reply within the same day.</p>
        <form name="contact" method="POST" data-netlify="true" className="card mt-6 space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" className="mt-1 w-full border rounded-xl p-3" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" className="mt-1 w-full border rounded-xl p-3" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 w-full border rounded-xl p-3" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Interested In</label>
            <select name="interest" className="mt-1 w-full border rounded-xl p-3">
              <option>Maths (8–12)</option>
              <option>Web Development</option>
              <option>Android Development</option>
              <option>Spoken English</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" className="mt-1 w-full border rounded-xl p-3" rows={5}></textarea>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-primary" type="submit">Send Message</button>
            <a className="btn" href="https://wa.me/919040760487" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
  );
}
