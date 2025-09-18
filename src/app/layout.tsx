import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';
import { Mail, Send } from 'lucide-react';
import Link from 'next/link';
import BackToTopButton from '@/components/back-to-top-button';
import { WechatQrCode } from '@/components/wechat-qr-code';

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
            <a href="https://t.me/XCJT02" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2">
                <div className="inline-block p-3 rounded-full bg-white text-[#0088cc] hover:bg-gray-100 transition-colors animate-pulse-glow border border-[#0088cc]">
                    <Send className="h-6 w-6" />
                </div>
                <span className="hidden group-hover:block bg-background p-2 rounded-md text-foreground text-sm font-medium">Telegram</span>
            </a>
            <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors animate-pulse-glow text-2xl border">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.072 2.224c-5.46 0-9.876 3.96-9.876 8.848 0 2.45.966 4.716 2.616 6.444-1.164 2.856-4.26 3.036-4.26 3.036s.48.084 1.764-.78c.852.312 1.764.492 2.7.492 5.46 0 9.876-3.96 9.876-8.848 0-4.888-4.416-8.848-9.876-8.848zM7.818 13.38a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm4.32-4.32c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74zm3.036 4.32a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2z"/>
                    </svg>
                </div>
                <span className="hidden group-hover:block bg-background p-2 rounded-md text-foreground text-sm font-medium">QQ</span>
            </a>
            <WechatQrCode>
              <div className="group flex items-center space-x-2 cursor-pointer">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-white text-[#07C160] hover:bg-gray-100 transition-colors animate-pulse-glow text-2xl border">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M49.998 8.995C27.355 8.995 8.995 24.352 8.995 42.868c0 10.272 5.616 19.347 14.524 25.07l-2.532 9.477c-.503 1.88.805 3.69 2.684 4.193a3.513 3.513 0 0 0 1.058.158c1.24 0 2.422-.63 3.104-1.725l7.98-12.784a32.96 32.96 0 0 0 8.185 1.616c22.643 0 41.003-15.357 41.003-33.868C91.002 24.353 72.64 8.995 49.998 8.995z"/>
                        <path d="M68.14 53.472c-15.937 0-28.84-10.82-28.84-24.167s12.903-24.167 28.84-24.167c15.936 0 28.84 10.82 28.84 24.167a24.03 24.03 0 0 1-5.01 14.73l-.008.013c.273.79.42 1.62.42 2.473 0 3.32-1.637 6.273-4.14 8.23-1.07.84-2.3 1.51-3.63 2a11.53 11.53 0 0 1-3.6.8c-.52 0-1.03-.04-1.54-.12-.3-.04-.58-.1-.87-.15a.76.76 0 0 1-.32-.1c-.1-.04-.2-.06-.3-.1l-1.3-.57c-.16-.07-.3-.14-.46-.22l-.12-.05c-4.9-2.32-8.2-7.06-8.2-12.51 0-1.5.25-2.94.72-4.3l.06-.18c.03-.08.05-.16.08-.24l.02-.07c1.78-5.1 5.3-9.42 9.94-12.28a2.53 2.53 0 0 0 .52-3.5 2.52 2.52 0 0 0-3.5-.53c-5.4 3.24-9.6 8.3-11.75 14.37-1.12 3.1-1.74 6.4-1.74 9.82 0 6.8 3.1 12.8 8.1 16.7l.12.1c.14.1.28.18.43.27l1.3.58c.2.08.4.16.6.23.57.26 1.15.5 1.74.68.7.23 1.4.4 2.1.53.2.04.4.06.58.08.15.02.3.03.45.03.62 0 1.23-.1 1.8-.28 1.4-.48 2.68-1.17 3.75-2.04 3.1-2.43 5.03-6.1 5.03-10.15 0-1.2-.2-2.37-.55-3.5l-.04-.12a2.53 2.53 0 0 0-3.2-1.4 2.5 2.5 0 0 0-1.4 3.2c.2.65.3 1.32.3 2.02 0 2.5-1.07 4.75-2.8 6.36a9.5 9.5 0 0 1-6.68 2.5c-4.93 0-8.94-3.6-8.94-8.03 0-1.8.68-3.48 1.85-4.82a6.45 6.45 0 0 1 4.7-2.03c4.2 0 7.6 3.1 7.6 6.9s-3.4 6.9-7.6 6.9a2.52 2.52 0 1 0 0 5.04c6.94 0 12.6-5.02 12.6-11.14 0-5-3.5-9.3-8.4-10.7a2.53 2.53 0 0 0-1.2-4.9 2.52 2.52 0 0 0-2.8 2.2c-.1.3-.12.6-.12.9 0 2.2 1.9 4 4.3 4s4.3-1.8 4.3-4-1.9-4-4.3-4c-4.9 0-8.8 3.6-8.8 8s3.9 8 8.8 8a7.53 7.53 0 0 0 7.5-7.5c0-3.5-2.6-6.4-6.2-7.3a7.5 7.5 0 1 0-7.3 9.4 2.52 2.52 0 0 0 3.1-1.8 2.53 2.53 0 0 0-1.8-3.1 2.5 2.5 0 0 0-3.1 1.8 12.5 12.5 0 0 1-5.2-10.4c0-7 6.1-12.7 13.6-12.7 7.5 0 13.6 5.7 13.6 12.7s-6.1 12.7-13.6 12.7z" fill="currentColor"/>
                        <circle cx="34.95" cy="42.868" r="4.306" fill="currentColor"/>
                        <circle cx="53.07" cy="42.868" r="4.306" fill="currentColor"/>
                      </svg>
                  </div>
                  <span className="hidden group-hover:block bg-background p-2 rounded-md text-foreground text-sm font-medium">WeChat</span>
              </div>
            </WechatQrCode>
            <a href="mailto:xiechengjituan@gmail.com" className="group flex items-center space-x-2">
                <div className="inline-block p-3 rounded-full bg-white text-primary hover:bg-gray-100 transition-colors animate-pulse-glow border border-primary">
                    <Mail className="h-6 w-6" />
                </div>
                <span className="hidden group-hover:block bg-background p-2 rounded-md text-foreground text-sm font-medium">Email</span>
            </a>
        </div>
        <Footer />
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
