"use client";

import { usePathname } from "next/navigation";
import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "./Header";
import { LogoutButton } from "@/components/logout-button";
// mapeamento de rotas da dashboard
const routeHeaders: Record<string, { title: string; subtitle: string }> = {
  "/painel": {
    title: "Dashboard",
    subtitle: "Visão geral dos dados",
  },
  "/sales": {
    title: "Vendas",
    subtitle: "Visão geral das vendas",
  },
  "/products": {
    title: "Produtos",
    subtitle: "Visão geral dos produtos",
  },
  "/stock": {
    title: "Estoque",
    subtitle: "Visão geral do estoque",
  },
};

const DashboardHeader = () => {
  const pathname = usePathname();

  const currentHeader = routeHeaders[pathname] ?? {
    title: "Painel",
    subtitle: "Gestão do sistema",
  };

  return (
    <div className="pb-4 w-full">
      <Header>
        <HeaderLeft>
          <HeaderTitle>{currentHeader.title}</HeaderTitle>
          <HeaderSubtitle>{currentHeader.subtitle}</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <LogoutButton />
        </HeaderRight>
      </Header>
    </div>
  );
};

export default DashboardHeader;
