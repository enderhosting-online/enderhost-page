import { extractImageUrl } from '@/lib/directus';
import { apiService } from '@/services/api';
import Link from 'next/link';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

import './Header.css';

export const revalidate = 60 * 60;

export default async function Header() {
  const globalData = await apiService.getGlobalData();

  return (
    <div
      className="w-full backdrop-blur-lg sticky top-0 z-50 flex justify-center"
      id="header"
    >
      <header className="w-full flex justify-between items-center max-w-6xl px-6 pt-1">
        <Link
          href="/"
        >
          <span className="flex items-center justify-center text-2xl font-extrabold gap-2">
            <img src={extractImageUrl(globalData.logo)} alt={globalData.title} className="w-40" />
          </span>
        </Link>
        <HeaderDesktop />
        <HeaderMobile globalData={globalData} />
      </header>
    </div>
  );
}
