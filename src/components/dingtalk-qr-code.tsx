
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

export function DingtalkQrCode({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>扫描钉钉二维码</DialogTitle>
          <DialogDescription>
            使用钉钉应用扫描此二维码以添加我们。
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="https://res.cloudinary.com/dz1oictdz/image/upload/v1758126658/photo_2025-09-17_23-19-22_uzl3n1.jpg"
            alt="DingTalk QR Code"
            width={250}
            height={250}
          />
          <p className="font-semibold text-center text-foreground">
            钉钉账号: ohz-12r5125zk
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
