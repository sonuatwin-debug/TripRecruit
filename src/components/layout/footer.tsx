import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-bold font-headline text-lg">携程集团</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/about" className="hover:text-primary transition-colors">关于</Link>
            <Link href="/jobs" className="hover:text-primary transition-colors">职位</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">联系我们</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 携程集团。版权所有。
        </div>
      </div>
    </footer>
  );
}
