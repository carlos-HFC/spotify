import { Suggestion } from "@/components/Suggestion";
import { RECENTLY_PLAYED } from "@/constants";

export default function Buscar() {
  return (
    <div className="flex flex-col gap-10 min-h-screen pt-32 px-10 pb-20 *:flex *:flex-col text-white">
      <section className="gap-8 mb-8">
        <div className="font-bold text-3xl">Buscas recentes</div>
        <div className="flex gap-8">
          {RECENTLY_PLAYED.map(item => (
            <Suggestion
              {...item}
            />
          ))}
        </div>
      </section>

      <section className="gap-4">
        <div className="font-bold text-3xl">Seu top gêneros</div>
        <div className="flex gap-8">
          {RECENTLY_PLAYED.map(item => (
            <Suggestion
              {...item}
            />
          ))}
        </div>
      </section>

      <section className="gap-8">
        <div className="font-bold text-3xl">Navegar por todas as seções</div>
        <div className="flex gap-8">
          {RECENTLY_PLAYED.map(item => (
            <Suggestion
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
}