import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cognitionclasses.in'),
  title: {
    default: 'Cognition Classes | Best Coaching in Jharsuguda for Maths & Software Dev',
    template: '%s | Cognition Classes Jharsuguda'
  },
  description: 'Since 2015: Maths (8–12), Physics, Chemistry, Biology, English, SST, plus Software Development tracks (Web Dev, Android, Coding). Founded by Nitesh Agrawal (NIT Rourkela, ex-Microsoft).',
  openGraph: {
    title: 'Cognition Classes Jharsuguda',
    description: 'Best coaching in Jharsuguda for Maths (8–12) & Software Development. Live classes, projects, results.',
    url: 'https://www.cognitionclasses.in',
    siteName: 'Cognition Classes',
    images: [{ url: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website'
  },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"LocalBusiness",
            "name":"Cognition Classes",
            "address":{
              "@type":"PostalAddress",
              "streetAddress":"Sarbahal",
              "addressLocality":"Jharsuguda",
              "addressRegion":"Odisha",
              "postalCode":"768201",
              "addressCountry":"IN"
            },
            "url":"https://www.cognitionclasses.in",
            "telephone":"+91 9040760487",
            "foundingDate":"2015",
            "founder":{"@type":"Person","name":"Nitesh Agrawal","alumniOf":"NIT Rourkela"}
          })}}
        />
      
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}}
            />
          </>
        ) : null}

      
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js"></script>
        ) : null}

      </body>
    </html>
  );
}
