import { getAllResults } from '@/lib/content';
import ResultCard from '@/components/ResultCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Results & Selections',
  description: 'Our toppers, ranks, and selections.'
};

export default async function ResultsPage(){
  const results = await getAllResults();
  return (
    <section className="section">
      <div className="container-max">
        <SectionTitle title="Results & Selections" subtitle="Proud moments from our students."/>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map(r => <ResultCard key={r.slug} item={r} />)}
        </div>
      </div>
    </section>
  );
}
