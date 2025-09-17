
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

export function ZaloQrCode({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>扫描Zalo二维码</DialogTitle>
          <DialogDescription>
            使用Zalo应用扫描此二维码以添加我们。
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dz1oictdz/image/upload/v1758125977/photo_2025-09-17_22-48-39_ixbvtr.jpg"
            alt="Zalo QR Code"
            width={250}
            height={250}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
