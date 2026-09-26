import { Flame } from "lucide-react";
import FilterProducts from "./_components/filter-products";

export default function Home() {
  return (
    <div className="px-40 pt-10">
      <h1 className="font-bold text-xl text-slate-700 flex gap-1 pb-5">
        <Flame color="#F54900" />
        Nossos produtos
      </h1>

      <div className="flex w-full gap-4">
        <FilterProducts />
        <div className="w-5/6">Teste</div>
      </div>
    </div>
  );
}
