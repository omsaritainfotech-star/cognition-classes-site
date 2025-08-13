import { getAllCourses } from '@/lib/content';
import SectionTitle from '@/components/SectionTitle';
import CoursesGrid from '@/components/CoursesGrid';

export const metadata = {
  title: 'Courses',
  description: 'Explore courses at Cognition Classes: Maths (8–12), Software Development, and Vocational tracks.'
};

export default async function CoursesPage(){
  const courses = await getAllCourses();
  return (
    <section className="section">
      <div className="container-max">
        <SectionTitle title="All Courses" subtitle="Filter by School (8–12), Software Dev, Vocational."/>
        <CoursesGrid courses={courses} />
      </div>
    </section>
  );
}
