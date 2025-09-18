
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '携程集团招聘官网｜全球化人才招聘平台｜海外高薪职位',
  description: '携程集团招聘官网，专注于全球化人才发展，长期发布各类优质岗位，涵盖市场运营、数据分析、客户服务、技术研发、行政管理等多个方向。我们为求职-	者提供真实可靠的高薪机会，打造国际化职业发展平台，助力人才与企业共赢未来。',
  keywords: '携程集团招聘, 携程招聘官网, 携程人才网, 携程海外工作, 携程集团高薪职位, 携程直招, 携程集团招聘平台, 携程国际人才, 携程工作机会, 携程招聘信-息',
};

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
