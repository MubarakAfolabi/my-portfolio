import CodeWrap from "@/component/home/CodeWrap";
import Hero from "@/component/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 px-6 mt-10">
      <Hero />
      <CodeWrap />
    </main>
  );
}
