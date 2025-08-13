// app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Cognition Classes in Jharsuguda.',
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-max max-w-3xl">
        <h1 className="h1">Contact Us</h1>
        <p className="p mt-3">We usually reply within the same day.</p>
        <ContactForm />
      </div>
    </section>
  );
}
