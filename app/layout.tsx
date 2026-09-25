import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import NavigationMenuBar from "@/components/navigation-menu";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={cn("font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NavigationMenuBar />
        {children}
      </body>
    </html>
  );
}
