import Link from 'next/link';
import pagesConfig from '@/config/pages';
import { apiService } from '@/services/api';
import { extractImageUrl } from '@/lib/directus';
import ColumnLinks from './ColumnLinks';

export default async function FooterLinks() {
  const globalData = await apiService.getGlobalData();

  return (
    <div className="flex flex-wrap gap-7">
      {
        pagesConfig.pages
          .filter((page) => page.sections && page.sections.length > 2)
          .map((page) => (
            <ColumnLinks
              key={page.path}
              {...page}
            />
          ))
      }
      <Link href="/" className="flex justify-center basis-36 max-h-60 grow self-start">
        <img
          src={extractImageUrl(globalData.logo)}
          alt={globalData.title}
          className="w-full h-full"
        />
      </Link>
    </div>
  );
}
