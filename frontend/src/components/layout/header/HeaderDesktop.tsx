import Link from "next/link";
import pagesConfig from "@/config/pages";
import { cn } from "@/lib/utils";

export default function HeaderDesktop() {
  return (
    <nav className="hidden items-start justify-center gap-10 md:flex">
      {pagesConfig.pages.map((pagina) => (
        <Link
          key={pagina.path}
          href={pagina.path}
          className={cn("font-semibold text-sm uppercase")}
        >
          {pagina.name}
        </Link>
      ))}
    </nav>
  );
}
