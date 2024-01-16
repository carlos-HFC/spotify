import { Bell, ChevronLeft, ChevronRight, User, Users } from 'lucide-react';

import { Footer } from "@/components/Footer";
import { Recent } from "@/components/Recent";
import { Sidebar } from "@/components/Sidebar";
import { Suggestion } from "@/components/Suggestion";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center justify-between *:flex *:items-center *:gap-2">
            <div>
              <button disabled className="p-1 rounded-full bg-black/40">
                <ChevronLeft className="stroke-1 size-7" />
              </button>
              <button disabled className="p-1 rounded-full bg-black/40">
                <ChevronRight className="stroke-1 size-7" />
              </button>
            </div>

            <div>
              <span className="p-1 rounded-full bg-black/40">
                <Bell className="stroke-1 size-7" />
              </span>
              <span className="p-1 rounded-full bg-black/40">
                <Users className="stroke-1 size-7" />
              </span>
              <span className="p-1 rounded-full bg-black/40">
                <User className="stroke-1 size-7" />
              </span>
            </div>
          </div>

          <h1 className="font-semibold text-[2rem] mt-10">Bom dia</h1>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <Recent
              image="/metallica.webp"
              name="72 Seasons"
            />
            <Recent
              image="/iron-maiden.jpg"
              name="The Number of The Beast"
            />
            <Recent
              image="/offspring.jpg"
              name="Smash"
            />
            <Recent
              image="/pearl-jam.jpg"
              name="Ten"
            />
            <Recent
              image="/rhcp.jpg"
              name="Californication"
            />
            <Recent
              image="/soad.jpg"
              name="Toxicity"
            />
          </div>

          <div className="flex items-center justify-between mt-10">
            <h2 className="font-semibold text-2xl">Feito para você</h2>
            <span className="font-medium text-zinc-400 text-xs">Mostrar tudo</span>
          </div>

          <div className="grid grid-cols-8 gap-4 mt-5">
            <Suggestion
              image="/rhcp.jpg"
              title="Mix relax"
              description="Red Hot Chili Peppers, Pearl Jam e mais"
            />
            <Suggestion
              image="/metallica.webp"
              title="Mix thrash metal"
              description="Metallica, Megadeth, Slayer, Anthrax, Exodus"
            />
            <Suggestion
              image="/iron-maiden.jpg"
              title="Mix de Iron Maiden"
              description="Deep Purple, Pantera e Slayer"
            />
            <Suggestion
              image="/offspring.jpg"
              title="Mix de The Offspring"
              description="Bad Religion, Green Day e Ramones"
            />
            <Suggestion
              image="/rhcp.jpg"
              title="Mix de Red Hot Chili Peppers"
              description="Nirvana, The Offspring e Rage Against The Machine"
            />
            <Suggestion
              image="/soad.jpg"
              title="Mix anos 2000"
              description="System of a Down, ANGRA, The Offspring"
            />
            <Suggestion
              image="/metallica.webp"
              title="Mix anos 80"
              description="Metallica, Iron Maiden, Megadeth, "
            />
            <Suggestion
              image="/pearl-jam.jpg"
              title="Mix rock"
              description="Pearl Jam, Jimi Hendrix, Nirvana e mais"
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
