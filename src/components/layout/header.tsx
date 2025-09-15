'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/#popular-regions', label: '热门招聘地点' },
  { href: '/#benefits', label: '福利待遇' },
  { href: '/apply', label: '在线申请' },
  { href: '/about', label: '关于我们' },
  { href: '/contact', label: '联系我们' },
  { href: '/faq', label: '常见问题' },
];

export default function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile: boolean) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'font-medium transition-colors hover:text-primary',
          pathname === link.href ? 'text-primary' : 'text-foreground/80',
          isMobile ? 'block py-2 text-lg' : 'text-sm'
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">携程集团</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            {renderNavLinks(false)}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex bg-card hover:bg-muted text-card-foreground animate-pulse-glow">
            <Link href="/jobs">寻找职位</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">切换菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-4 text-left">
                <SheetTitle>
                  <span className="sr-only">导航菜单</span>
                  <Link href="/" className="flex items-center space-x-2">
                     <span className="font-bold font-headline text-lg">携程集团</span>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                   在这里浏览网站的主要页面。
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {renderNavLinks(true)}
                 <Button asChild className="bg-card hover:bg-muted text-card-foreground mt-4 animate-pulse-glow">
                    <Link href="/jobs">寻找职位</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
