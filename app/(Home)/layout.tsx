// app/(Home)/layout.tsx
import NavigationMenuBar from "@/components/navigation-menu";
import FooterPage from "@/components/footer-page";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col bg-gray-200">
      <NavigationMenuBar />
      <main className="flex-1">{children}</main>
      <FooterPage />
    </div>
  );
}
