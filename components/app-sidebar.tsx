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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="w-full flex items-center mt-2">
        <h1 className="text-xl font-semibold flex gap-1 items-center">
          <Store size={20} />
          ECOMMER.CY
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500 text-[11px]">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-1">
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-lg gap-1 justify-start pl-1">
                <ChartNoAxesCombined size={20} />
                Dashboard
              </p>
            </button>
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-lg gap-1 justify-start pl-1">
                <BadgeDollarSign size={20} />
                Vendas realizadas
              </p>
            </button>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500 text-[11px]">
            GERENCIAR
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-1">
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-lg gap-1 justify-start pl-1">
                <ShoppingBasket size={20} />
                Produtos
              </p>
            </button>
            <button className="hover:bg-slate-200 text-[#273240] hover:text-[#5A6ACF] text-[15px] w-full h-10 rounded-md cursor-pointer">
              <p className="flex items-center text-lg gap-1 justify-start pl-1">
                <Package size={20} />
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
