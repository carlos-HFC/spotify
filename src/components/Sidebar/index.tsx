import { Home, Library as LibraryIcon, Search } from "lucide-react";

import { Library } from "../Library";
import { NavItem } from "../NavItem";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 py-8 px-6 h-[calc(100vh-85px)] overflow-hidden">
      <nav className="space-y-5 pb-6 border-b border-zinc-800">
        <NavItem
          active
          icon={<Home />}
          label="Início"
        />
        <NavItem
          icon={<Search className="text-zinc-400" />}
          label="Buscar"
        />
        <NavItem
          icon={<LibraryIcon className="text-zinc-400" />}
          label="Sua Biblioteca"
        />
      </nav>

      <nav className="mt-6 -mr-6 pr-3 flex flex-col overflow-y-scroll h-[84%] playlist">
        <Library
          active
          image="/metallica.webp"
          title="BEST METALLICA"
          description="Playlist &bull; Carlos Faustino"
        />
        <Library
          image="/iron-maiden.jpg"
          title="Heavy Metal"
          description="Playlist &bull; Carlos Faustino"
        />
        <Library
          image="/rhcp.jpg"
          title="BEST RHCP"
          description="Playlist &bull; Carlos Faustino"
        />
        <Library
          image="/metallica.webp"
          title="Thrash Metal"
          description="Playlist &bull; Carlos Faustino"
        />
        <Library
          image="/offspring.jpg"
          title="Punk Rock"
          description="Playlist &bull; Carlos Faustino"
        />
        <Library
          image="/iron-maiden.jpg"
          title="BEST IRON MAIDEN"
          description="Playlist &bull; Carlos Faustino"
        />
        <Library
          image="/iron-maiden.jpg"
          title="The Number of The Beast"
          description="Álbum &bull; Iron Maiden"
        />
        <Library
          image="/metallica.webp"
          title="72 Seasons"
          description="Ábum &bull; Metallica"
        />
        <Library
          image="/pearl-jam.jpg"
          title="Grunge"
          description="Playlist &bull; Carlos Faustino"
        />
      </nav>
    </aside>
  );
}