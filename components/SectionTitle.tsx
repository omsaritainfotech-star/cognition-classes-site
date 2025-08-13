export default function SectionTitle({title, subtitle}:{title:string, subtitle?:string}){
  return (
    <div className="text-center mb-10">
      <h2 className="h2">{title}</h2>
      <div className="mt-2 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
      </div>
      {subtitle && <p className="mt-3 text-slate-700">{subtitle}</p>}
    </div>
  );
}
