import Hero from "@/component/home/Hero";
import SkillsStrip from "@/component/home/SkillsStrip";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 mt-8">
      <Hero />
      <SkillsStrip />
    </main>
  );
}
