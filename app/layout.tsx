// app/layout.tsx
import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={roboto.className} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
