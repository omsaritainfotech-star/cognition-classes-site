import Image from 'next/image';

export default function ResultCard({item}:{item:any}){
  return (
    <div className="card-grad">
      <div className="card-inner">
        <div className="relative h-40 w-full mb-3 overflow-hidden rounded-xl bg-slate-100">
          {item.image ? (
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          ) : null}
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <div className="text-sm text-slate-600 mt-1">{item.studentName} • {item.exam} • {item.year}{item.score ? ` • ${item.score}` : ''}</div>
      </div>
    </div>
  );
}
