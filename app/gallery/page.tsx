import Image from 'next/image';

export const metadata = { title: 'Gallery' };

const images = [
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
];

export default function GalleryPage(){
  return (
    <section className="section">
      <div className="container-max">
        <h1 className="h1 text-center mb-10">Gallery</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((src,i)=>(
            <div key={i} className="relative h-64">
              <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
