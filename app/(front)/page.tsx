import DoctorList from "@/components/DoctorList";
import Brand from "@/components/frontend/Brand";
import Hero from "@/components/frontend/hero";
import TabbedSection from "@/components/frontend/TabbedSection";

export default function Home() {
  return (
<section >
<Hero/>
<Brand/>
<TabbedSection/>
<DoctorList/>
<DoctorList title="In Person Doctor Visit" className="bg-white"/>
<DoctorList/>
<DoctorList/>
<DoctorList/>
</section>


  );
}
