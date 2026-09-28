import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardHeader from "./_components/dashboard-header";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Especifique os pesos que vai utilizar
  variable: "--font-poppins", // Opcional: útil se for integrar com Tailwind CSS
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className={`${poppins.className} flex min-h-screen w-full`}>
        <AppSidebar />
        <SidebarTrigger />
        <div className="w-full pt-2">
          <DashboardHeader />
          <main className={poppins.className}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
