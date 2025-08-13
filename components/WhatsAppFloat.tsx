import Link from 'next/link';

export default function WhatsAppFloat(){
  return (
    <Link
      href="https://wa.me/919040760487"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-glow bg-green-500 text-white px-5 py-3 md:hidden"
    >
      Chat on WhatsApp
    </Link>
  );
}
