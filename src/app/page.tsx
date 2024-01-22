import { Recent } from "@/components/Recent";
import { SectionHome } from "@/components/SectionHome";
import { Suggestion } from "@/components/Suggestion";

import { EPISODES, MADE_FOR_YOU, RECENTLY_PLAYED, YOUR_PLAYLISTS } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 *:flex *:flex-col *:gap-6 bg-home px-10 py-24">
      <section>
        <h1 className="font-bold text-4xl">
          Bom dia
        </h1>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-x-8 gap-y-4">
          {RECENTLY_PLAYED.slice(0, 6).map(item => (
            <Recent
              key={item.title}
              image={item.image}
              name={item.title}
            />
          ))}
        </div>
      </section>

      <SectionHome title="Episódios para você">
        {EPISODES.map(item => (
          <Suggestion
            {...item}
            key={item.title}
          />
        ))}
      </SectionHome>

      <SectionHome title="Tocados recentemente">
        {RECENTLY_PLAYED.map(item => (
          <Suggestion
            {...item}
            key={item.title}
          />
        ))}
      </SectionHome>

      <SectionHome title="Feito para você">
        {MADE_FOR_YOU.map(item => (
          <Suggestion
            {...item}
            key={item.title}
          />
        ))}
      </SectionHome>

      <SectionHome title="Suas playlists">
        {YOUR_PLAYLISTS.map(item => (
          <Suggestion
            {...item}
            key={item.title}
          />
        ))}
      </SectionHome>
    </div>
  );
}
