
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationSuccessPage() {
  return (
    <div className="container">
      <div className="py-12 md:py-20 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader className="items-center text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <CardTitle className="text-3xl font-bold font-headline">
              申请已成功提交！
            </CardTitle>
            <CardDescription>
              感谢您的申请，我们的招聘团队会尽快审核您的资料。如果合适，我们将会与您联系。
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/jobs">查看更多职位</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/">返回首页</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
