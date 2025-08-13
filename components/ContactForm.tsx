'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form) as any).toString();

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form name="contact" onSubmit={handleSubmit} className="card mt-6 space-y-4">
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
        <button className="btn btn-primary" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
        <a className="btn" href="https://wa.me/919040760487" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>

      {status === 'success' && <p className="p mt-2 text-emerald-600">Thanks! We’ve received your message.</p>}
      {status === 'error' && <p className="p mt-2 text-rose-600">Sorry, something went wrong. Please try again.</p>}
    </form>
  );
}
