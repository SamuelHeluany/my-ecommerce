import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavigationMenuBar = () => {
  return (
    <div className="grid w-full">
      <div className="px-60 py-2 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold flex gap-1 items-center">
            <Store size={20} />
            ECOMMER.CY
          </h1>
        </Link>

        <div className="flex gap-1">
          <InputGroup className="p-2 bg-white">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon align="inline-end">
              <button className="cursor-pointer">
                <SearchIcon size={16} />
              </button>
            </InputGroupAddon>
          </InputGroup>
          <div className="flex items-center">
            <Button className="bg-orange-600 hover:bg-orange-500 cursor-pointer">
              <ShoppingCart size={16} />
              Carrinho
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-orange-600 p-1">
        <NavigationMenu>
          <NavigationMenuList className="gap-5">
            <NavigationMenuLink className="cursor-pointer hover:bg-orange-500">
              <p className="text-md text-white font-semibold flex gap-1 items-center">
                Home
              </p>
            </NavigationMenuLink>
            <NavigationMenuItem className="hover:bg-orange-500 rounded-md">
              <NavigationMenuTrigger className="text-white hover:bg-orange-500 rounded-md">
                Categorias
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Celurares</NavigationMenuLink>
                <NavigationMenuLink>Eletrodomésticos</NavigationMenuLink>
                <NavigationMenuLink>Gamer</NavigationMenuLink>
                <NavigationMenuLink>Computadores</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuLink className="cursor-pointer hover:bg-orange-500">
              <p className="text-md text-white font-semibold">Sobre nós</p>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavigationMenuBar;
