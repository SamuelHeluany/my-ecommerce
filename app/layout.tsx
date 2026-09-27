import "./globals.css";
import { Roboto } from "next/font/google";
import NavigationMenuBar from "@/components/navigation-menu";
import FooterPage from "@/components/footer-page";

const roboto = Roboto({ subsets: ["latin"] });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body
        className="min-h-full flex flex-col bg-gray-200"
        suppressHydrationWarning
      >
        <NavigationMenuBar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
