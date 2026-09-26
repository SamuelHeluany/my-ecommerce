import "./globals.css";
import { Roboto } from "next/font/google";
import NavigationMenuBar from "@/components/navigation-menu";

const roboto = Roboto({ subsets: ["latin"] });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NavigationMenuBar />
        {children}
      </body>
    </html>
  );
}
