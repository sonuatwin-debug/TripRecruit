
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Globe, Menu } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"

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
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      if (pathname === '/') {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/' + href.substring(1));
      }
    } else {
      router.push(href);
    }
  };
  
  useEffect(() => {
    const handleAnchorLink = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    handleAnchorLink();
    window.addEventListener('hashchange', handleAnchorLink, false);
    return () => {
      window.removeEventListener('hashchange', handleAnchorLink, false);
    };
  }, []);

  const handleLanguageChange = (langCode: string, langName: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', langCode);
    router.replace(currentUrl.toString(), { scroll: false });
    toast({
      title: '语言切换',
      description: `语言已切换至 ${langName}`,
    })
  };

  const renderNavLinks = (isMobile: boolean) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={(e) => handleLinkClick(e, link.href)}
        className={cn(
          'font-medium transition-colors hover:text-primary',
          pathname === link.href && !link.href.includes('#') ? 'text-primary' : 'text-foreground/80',
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

        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9 hover:bg-muted">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">切换语言</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className="focus:bg-muted" 
                onClick={() => handleLanguageChange('zh', '简体中文')}
              >
                简体中文
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="focus:bg-muted"
                onClick={() => handleLanguageChange('vi', 'Tiếng Việt')}
              >
                Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="focus:bg-muted"
                onClick={() => handleLanguageChange('th', 'ภาษาไทย')}
              >
                ภาษาไทย
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="hidden md:flex bg-card hover:bg-muted text-card-foreground animate-pulse-glow">
            <Link href="/jobs">寻找职位</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden bg-background hover:bg-muted text-foreground h-9 w-9 px-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">切换菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-4 text-left">
                <SheetTitle>
                  <Link href="/" onClick={(e) => handleLinkClick(e, '/')}>
                     <span className="font-bold font-headline text-lg">携程集团</span>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                   在这里浏览网站的主要页面。
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {renderNavLinks(true)}
                 <Button asChild>
                    <Link href="/jobs" onClick={(e) => handleLinkClick(e, '/jobs')}>寻找职位</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
