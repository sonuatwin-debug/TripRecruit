import { notFound } from 'next/navigation';
import { MOCK_JOBS } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

type Props = {
  params: { jobId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = MOCK_JOBS.find(j => j.id === params.jobId);

  const title = job ? `${job.title} - 携程集团招聘` : '职位详情 - 携程集团招聘';
  
  return {
    title: title,
    description: '携程集团招聘官网，专注于全球化人才发展，长期发布各类优质岗位，涵盖市场运营、数据分析、客户服务、技术研发、行政管理等多个方向。我们为求职-	者提供真实可靠的高薪机会，打造国际化职业发展平台，助力人才与企业共赢未来。',
    keywords: `携程集团招聘, ${job?.title}, ${job?.location}, 携程招聘官网, 携程人才网, 携程海外工作, 携程集团高薪职位`,
  };
}

export default function JobDetailsPage({ params }: { params: { jobId: string } }) {
  const jobId = params.jobId;
  const job = MOCK_JOBS.find(j => j.id === jobId);

  if (!job) {
    notFound();
  }

  const { details } = job;

  const hasRequirements = details && details.requirements && details.requirements.length > 0;
  const hasResponsibilities = details && details.responsibilities && details.responsibilities.length > 0;

  return (
    <div className="container">
      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">{job.title}</CardTitle>
              <CardDescription className="flex flex-wrap gap-x-4 gap-y-2 text-base pt-2">
                <span className="flex items-center gap-2">🏢 {job.department}</span>
                <span className="flex items-center gap-2">📍 {job.location}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              <Separator />
              
              {details && (
              <div>
                <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">📋 基本信息</h3>
                <div className="grid grid-cols-1 gap-y-3 gap-x-8 text-muted-foreground">
                  <p><strong className="font-semibold text-foreground w-24 inline-block">⚧️ 性别:</strong> {details.gender}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">⌛ 年龄:</strong> {details.age}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">🌐 国籍:</strong> {details.nationality}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">🗣️ 语言要求:</strong> {details.languages}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">💰 薪资待遇:</strong> {details.salary}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">⏰ 工作时间:</strong> {details.hours}</p>
                </div>
              </div>
              )}

              {hasRequirements && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">🎯 岗位需求</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {details.requirements.map((req, index) => <li key={index}>{req}</li>)}
                    </ul>
                  </div>
                </>
              )}

              {hasResponsibilities && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">🛠️ 岗位职责</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {details.responsibilities.map((res, index) => <li key={index}>{res}</li>)}
                    </ul>
                  </div>
                </>
              )}

              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-8 animate-pulse-glow">
                <Link href={`/apply?jobId=${job.id}`}>🚀 立即申请</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
