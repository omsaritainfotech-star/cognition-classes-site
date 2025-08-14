import Image from 'next/image';
import Link from 'next/link';

type Props = {
  settings: {
    title_prefix: string;
    title_highlight: string;
    title_suffix: string;
    subtitle?: string;
    image?: string;
    badges?: string[];
    primary_cta_label?: string;
    primary_cta_href?: string;
    secondary_cta_label?: string;
    secondary_cta_href?: string;
  }
};

export default function Hero({ settings }: Props) {
  const badges = settings.badges ?? [];
  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-hero-gradient -z-10" />
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex gap-2 mb-3 flex-wrap">
            {badges.map((b, i) => <span key={i} className="badge">{b}</span>)}
          </div>
          <h1 className="h1">
            {settings.title_prefix}{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {settings.title_highlight}
            </span>{' '}
            {settings.title_suffix}
          </h1>
          {settings.subtitle && <p className="p mt-4">{settings.subtitle}</p>}
          <div className="mt-6 flex gap-3">
            {settings.primary_cta_href && (
              <Link href={settings.primary_cta_href} className="btn btn-primary">
                {settings.primary_cta_label || 'Enroll'}
              </Link>
            )}
            {settings.secondary_cta_href && (
              <Link href={settings.secondary_cta_href} className="btn btn-ghost">
                {settings.secondary_cta_label || 'Learn more'}
              </Link>
            )}
          </div>
        </div>
        <div className="relative h-72 md:h-96">
          <div className="absolute -inset-4 rounded-[2rem] bg-card-gradient blur-2xl opacity-70 -z-10" />
          <Image
            src={settings.image || 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop'}
            alt="Hero"
            fill
            className="object-cover rounded-2xl shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}
