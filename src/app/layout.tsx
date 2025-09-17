import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';
import { Mail, Send } from 'lucide-react';
import Link from 'next/link';
import BackToTopButton from '@/components/back-to-top-button';

export const metadata: Metadata = {
  title: '程聘',
  description: '加入携程集团大家庭，开启新的旅程。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        {/* Floating Contact Buttons */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
            <a href="https://t.me/XCJT02" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow">
                <Send className="h-6 w-6" />
            </a>
            <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.072 2.224c-5.46 0-9.876 3.96-9.876 8.848 0 2.45.966 4.716 2.616 6.444-1.164 2.856-4.26 3.036-4.26 3.036s.48.084 1.764-.78c.852.312 1.764.492 2.7.492 5.46 0 9.876-3.96 9.876-8.848 0-4.888-4.416-8.848-9.876-8.848zM7.818 13.38a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm4.32-4.32c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74zm3.036 4.32a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2z"/>
                </svg>
            </a>
            <a href="https://www.wechat.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow text-2xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.4 3.1c-4.3 0-7.8 2.9-7.8 6.5 0 2.4 1.5 4.5 3.9 5.6-1.3 1.9-3.2 3.2-5.4 3.9v.1c.1-.1.7-1.1 1.7-2.1.8.2 1.6.3 2.5.3 4.3 0 7.8-2.9 7.8-6.5s-3.5-6.6-7.7-6.6zM7.7 11.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm4.1 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm8.3-2.9c0 2.9-2.6 5.2-5.8 5.2.3 0 .7-.1 1-.2 2.2-1 3.8-2.9 4.8-5zm-2.9 1.7c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z"/></svg>
            </a>
            <a href="mailto:xiechengjituan@gmail.com" className="inline-block p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow">
                <Mail className="h-6 w-6" />
            </a>
        </div>
        <Footer />
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
