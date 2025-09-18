import { Suspense } from 'react';
import { MOCK_JOBS } from '@/lib/mock-data';
import ApplicationForm from './application-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '携程集团招聘官网｜全球化人才招聘平台｜海外高薪职位',
  description: '携程集团招聘官网，专注于全球化人才发展，长期发布各类优质岗位，涵盖市场运营、数据分析、客户服务、技术研发、行政管理等多个方向。我们为求职-	者提供真实可靠的高薪机会，打造国际化职业发展平台，助力人才与企业-共赢未来。',
  keywords: '携程集团招聘, 携程招聘官网, 携程人才网, 携程海外工作, 携程集团高薪职位, 携程直招, 携程集团招聘平台, 携程国际人才, 携程工作机会, 携程招聘信-息',
};

function ApplyPageContent({ jobId }: { jobId: string | null }) {
  const job = MOCK_JOBS.find(j => j.id === jobId);

  return (
    <div className="container">
      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">
                {job ? `申请 ${job.title}` : '在线申请'}
              </CardTitle>
              <CardDescription>
                {job ? `${job.department} • ${job.location}` : '请填写下面的表格进行申请。'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage({ searchParams }: { searchParams: { jobId: string } }) {
  const { jobId } = searchParams;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplyPageContent jobId={jobId} />
    </Suspense>
  );
}
