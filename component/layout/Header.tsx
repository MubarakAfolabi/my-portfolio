import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-xl">
        mubarak <span className="text-primary">.</span>
      </h1>
      <button className="transition-colors hover:text-primary cursor-pointer">
        <Menu size={20} strokeWidth={3} />
      </button>
    </header>
  );
}
