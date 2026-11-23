import Hero from "@/component/home/Hero";
import SelectedWork from "@/component/home/SelectedWork";
import SkillsStrip from "@/component/home/SkillsStrip";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 mt-8 mb-8">
      <Hero />
      <SkillsStrip />
      <SelectedWork />
    </main>
  );
}
