import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">TripRecruit</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/jobs" className="hover:text-primary transition-colors">Jobs</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Trip.com Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
