import { Genre } from "@/components/Genre";
import { Suggestion } from "@/components/Suggestion";

import { SEARCH, GENRES } from "@/constants";

export default function Buscar() {
  return (
    <div className="flex flex-col gap-10 min-h-screen pt-32 px-10 pb-20 *:flex *:flex-col text-white">
      <section className="gap-8 mb-8">
        <div className="font-bold text-3xl">Buscas recentes</div>
        <div className="flex gap-8">
          {SEARCH.map(item => (
            <Suggestion
              key={item.title}
              {...item}
              isSearch
            />
          ))}
        </div>
      </section>

      <section className="gap-4">
        <div className="font-bold text-3xl">Seu top gêneros</div>
        <div className="flex gap-8">
          {GENRES.map(item => item.top && (
            <Genre
              key={item.genre}
              {...item}
            />
          ))}
        </div>
      </section>

      <section className="gap-8">
        <div className="font-bold text-3xl">Navegar por todas as seções</div>
        <div className="grid grid-cols-5 gap-8">
          {GENRES.map(item => (
            <Genre
              key={item.genre}
              {...item}
              top={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}