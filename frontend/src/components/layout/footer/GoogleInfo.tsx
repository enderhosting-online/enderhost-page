import Link from 'next/link';

const googleInfo = [
  { name: `${new Date().getFullYear()} Ender Hosting`, url: '/' },
  { name: 'Política de Privacidad', url: '/politica-de-privacidad' },
  { name: 'Ayuda', url: '/preguntas' },
];

export default function GoogleInfo() {
  return (
    <div className="flex gap-7 text-muted-foreground text-sm flex-wrap">
      {
        googleInfo.map(({ name, url }) => (
          <Link key={name} href={url}>{name}</Link>
        ))
      }
    </div>
  );
}
