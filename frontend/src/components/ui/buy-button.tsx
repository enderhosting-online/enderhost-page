import Link from "next/link";

export function BuyButton() {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href="https://wa.me/51918534289?text=%C2%A1Hola%20Enderhosting%2C%20me%20gustar%C3%ADa%20saber%20un%20poco%20m%C3%A1s%20sobre%20sus%20planes%20y%20de%20la%20prueba%20gratuita."
      className="mt-6 w-full rounded-md bg-primary py-3 text-center text-foreground text-lg shadow-xs hover:bg-primary/90"
    >
      Comprar ahora
    </Link>
  );
}
