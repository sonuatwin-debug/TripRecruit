
'use client';

import { Link, usePathname, useRouter } from '@/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Globe, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect, useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { useLocale, useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
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
    setIsMobileMenuOpen(false);
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

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
    let langName = '简体中文';
    if (nextLocale === 'vi') langName = 'Tiếng Việt';
    if (nextLocale === 'th') langName = 'ภาษาไทย';
    toast({
      title: t('languageSwitch'),
      description: t('langSwitched', {langName}),
    })
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/#popular-regions', label: t('popularRegions') },
    { href: '/#benefits', label: t('benefits') },
    { href: '/apply', label: t('applyOnline') },
    { href: '/about', label: t('aboutUs') },
    { href: '/contact', label: t('contactUs') },
    { href: '/faq', label: t('faq') },
  ];

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
            <span className="font-bold font-headline text-lg">{t('companyName')}</span>
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
                <span className="sr-only">{t('languageSwitch')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className="focus:bg-muted" 
                onClick={() => handleLanguageChange('zh')}
                disabled={locale === 'zh'}
              >
                {t('langZh')}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="focus:bg-muted"
                onClick={() => handleLanguageChange('vi')}
                disabled={locale === 'vi'}
              >
                {t('langVi')}
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="focus:bg-muted"
                onClick={() => handleLanguageChange('th')}
                disabled={locale === 'th'}
              >
                {t('langTh')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="hidden md:flex bg-card hover:bg-muted text-card-foreground animate-pulse-glow">
            <Link href="/jobs">{t('findJobs')}</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden bg-background hover:bg-muted text-foreground h-9 w-9 px-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('toggleMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-4 text-left">
                <SheetTitle>
                  <Link href="/" onClick={(e) => handleLinkClick(e, '/')}>
                     <span className="font-bold font-headline text-lg">{t('companyName')}</span>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                   {t('mobileMenuDesc')}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {renderNavLinks(true)}
                 <Button asChild>
                    <Link href="/jobs" onClick={(e) => handleLinkClick(e, '/jobs')}>{t('findJobs')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
