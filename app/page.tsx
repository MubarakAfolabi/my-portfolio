import AboutMe from "@/component/home/AboutMe";
import Hero from "@/component/home/Hero";
import SelectedWork from "@/component/home/SelectedWork";
import Footer from "@/component/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 mt-30">
      <Hero />
      <SelectedWork />
      <AboutMe />
      <Footer />
    </main>
  );
}
