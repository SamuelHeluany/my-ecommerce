import Link from "next/link";
import { Separator } from "./ui/separator";

const FooterPage = () => {
  return (
    <div className="w-full grid justify-center bg-orange-600 mt-5">
      <span className="flex gap-3 w-90 justify-center items-center py-2">
        <Link
          href="/"
          className="cursor-pointer hover:underline text-sm text-white font-semibold"
        >
          Home
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="/"
          className="cursor-pointer hover:underline text-sm text-white font-semibold"
        >
          Sobre nós
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="/"
          className="cursor-pointer hover:underline text-sm text-white font-semibold"
        >
          Área administrativa
        </Link>
      </span>
      <span className="text-white">
        © 2026 ecommer.cy. Todos os direitos reservados.
      </span>

      {/* 
      <span className="flex gap-3 w-90 justify-center items-center py-2">
        <Link href="/" className="cursor-pointer hover:underline text-sm">
          Home
        </Link>
        <Separator orientation="vertical" />
        <Link href="/" className="cursor-pointer hover:underline text-sm">
          Sobre nós
        </Link>
        <Separator orientation="vertical" />
        <Link href="/" className="cursor-pointer hover:underline text-sm">
          Área administrativa
        </Link>
      </span>
      <span>© 2026 Ecommer.cy. Todos os direitos reservados.</span> */}
    </div>
  );
};

export default FooterPage;
