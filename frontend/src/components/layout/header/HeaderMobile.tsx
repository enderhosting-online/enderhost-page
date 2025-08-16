'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import pagesConfig from '@/config/pages';
import { Menu } from 'lucide-react';
import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { extractImageUrl } from '@/lib/directus';
import { GlobalData } from '@/types/directus';

function LinkMobile(
  props: React.ComponentProps<'a'> & { children: ReactNode; setSheetOpen:
  (value: boolean) => void },
) {
  const { push } = useRouter();
  const {
    href, setSheetOpen, children, ...rest
  } = props;

  return (
    <a
      {...rest}
      href={href?.toString()}
      onClick={(e) => {
        e.preventDefault();
        setSheetOpen(false);
        push(href?.toString() || '');
      }}
    >
      {children}
    </a>
  );
}

interface HeaderMobileProps {
  globalData: GlobalData;
}

export default function HeaderMobile({ globalData }: HeaderMobileProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="ghost" size="icon" className="size-10">
          <Menu className="size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="py-2 flex md:hidden">
        <ScrollArea className="h-[95vh]">
          <SheetHeader>
            <div className="flex flex-col gap-4 mb-5">
              <SheetTitle className="flex flex-col text-3xl font-bold">
                <span className="flex items-center justify-center text-2xl font-extrabold gap-2">
                  <img src={extractImageUrl(globalData.logo)} alt={globalData.title} className="w-40" />
                </span>
              </SheetTitle>
            </div>
          </SheetHeader>
          <nav className="flex flex-col justify-center gap-6 px-4 font-medium text-foreground">
            {pagesConfig.pages.map((pagina) => (
              <div key={pagina.path}>
                <LinkMobile
                  href={pagina.path}
                  className={cn('px-2 py-2 text-foreground/70 font-semibold mb-4 hover:underline')}
                  setSheetOpen={setSheetOpen}
                >
                  {pagina.name}
                </LinkMobile>
                <div className="flex flex-col pl-5 py-2">
                  {
                    pagina.sections && pagina.sections.map((section) => (
                      <LinkMobile
                        key={section.id}
                        href={`${pagina.path}#${section.id}`}
                        className="px-1 py-1 font-normal"
                        setSheetOpen={setSheetOpen}
                      >
                        {section.name}
                      </LinkMobile>
                    ))
                  }
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
