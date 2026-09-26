import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FilterProducts = () => {
  return (
    <div className="bg-white w-1/5 rounded-md h-fit">
      <h2 className="text-xl font-semibold text-slate-700 px-7 py-2">
        Filtros
      </h2>
      <Separator className="w-full mb-5" />
      <div className="px-7 pb-2">
        <h2 className="text-md font-semibold text-slate-700">Ordenar por</h2>
        <div className="grid">
          <Button className="w-full flex justify-start text-slate-500 bg-transparent hover:bg-orange-600 cursor-pointer hover:text-white">
            Menor preço
          </Button>
          <Button className="w-full flex justify-start text-slate-500 bg-transparent hover:bg-orange-600 cursor-pointer hover:text-white">
            Maior preço
          </Button>
        </div>
      </div>
      <Separator className="w-full mb-5" />
      <div className="px-7 pb-2">
        <h2 className="text-md font-semibold text-slate-700">Categorias</h2>
        <div className="grid">
          <Button className="w-full flex justify-start text-slate-500 bg-transparent hover:bg-orange-600 cursor-pointer hover:text-white">
            Celulares
          </Button>
          <Button className="w-full flex justify-start text-slate-500 bg-transparent hover:bg-orange-600 cursor-pointer hover:text-white">
            Eletrodomésticos
          </Button>
          <Button className="w-full flex justify-start text-slate-500 bg-transparent hover:bg-orange-600 cursor-pointer hover:text-white">
            Gamer
          </Button>
          <Button className="w-full flex justify-start text-slate-500 bg-transparent hover:bg-orange-600 cursor-pointer hover:text-white">
            Computadores
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
