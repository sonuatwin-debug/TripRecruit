
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

export function LineQrCode({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>扫描Line二维码</DialogTitle>
          <DialogDescription>
            使用Line应用扫描此二维码以添加我们。
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dtcqrybyo/image/upload/v1758121655/line-qr_ax6wjo.jpg"
            alt="Line QR Code"
            width={250}
            height={250}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
