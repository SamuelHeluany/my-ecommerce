import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  Package,
  ShoppingBasket,
  Store,
} from "lucide-react";
import { Separator } from "./ui/separator";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="w-full flex items-center justify-center h-18">
        <h1 className="text-xl font-semibold flex gap-1 items-center text-[#5A67BA]">
          <Store size={20} />
          ECOMMER.CY
        </h1>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500 text-[10px]">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-1">
            <button className="hover:bg-slate-200  text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-[16px] gap-1 justify-start pl-1 text-[#273240] hover:text-[#5A6ACF] w-full">
                <ChartNoAxesCombined size={16} className="text-[#A6ABC8]" />
                Dashboard
              </p>
            </button>
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-[16px] gap-1 justify-start pl-1">
                <BadgeDollarSign size={16} color="#A6ABC8" />
                Vendas realizadas
              </p>
            </button>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500 text-[10px]">
            GERENCIAR
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-1">
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-[16px] gap-1 justify-start pl-1">
                <ShoppingBasket size={16} color="#A6ABC8" />
                Produtos
              </p>
            </button>
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-[16px] gap-1 justify-start pl-1">
                <Package size={16} color="#A6ABC8" />
                Estoque
              </p>
            </button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
