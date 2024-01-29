import { LikedSongs } from "@/components/LikedSongs";
import { Suggestion } from "@/components/Suggestion";

import { YOUR_PLAYLISTS } from "@/constants";

export default function Biblioteca() {
  return (
    <div className="flex flex-col min-h-screen pt-28 px-10 pb-8 text-white *:flex *:flex-col *:gap-6">
      <section>
        <div className="font-bold text-3xl">
          Playlists
        </div>

        <div className="grid grid-cols-5 gap-8 *:flex-1 *:w-auto">
          <div className="col-span-2">
            <LikedSongs />
          </div>

          {YOUR_PLAYLISTS.map(item => (
            <Suggestion
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
}