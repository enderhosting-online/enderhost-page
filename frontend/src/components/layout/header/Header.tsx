import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { SimgleItem } from '@/types/directus';
import Link from 'next/link';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

import './Header.css';

export const revalidate = 60 * 60;

export default async function Header() {
  const globalMetadata = await directus.request(readItems('global')) as SimgleItem;
  return (
    <div
      className="w-full backdrop-blur-lg sticky top-0 z-50 flex justify-center"
      id="header"
    >
      <header className="w-full flex justify-between items-center max-w-6xl py-3 px-6">
        <Link
          href="/"
        >
          <span className="flex items-center justify-center text-2xl font-extrabold gap-2">
            <img src={`http://localhost:8055/assets/${globalMetadata.logo}`} alt={globalMetadata.title} className="w-8 pixelated" />
            <span>
              {globalMetadata.title}
            </span>
          </span>
        </Link>
        <HeaderDesktop />
        <HeaderMobile />
      </header>
    </div>
  );
}
