import { MOCK_JOBS } from '@/lib/mock-data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JobDetailsClient from './job-details-client';

type Props = {
  params: { jobId: string };
  searchParams: { [key: string]: string | string[] | undefined };
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

export default function JobDetailsPage({ params, searchParams }: Props) {
  const job = MOCK_JOBS.find(j => j.id === params.jobId);

  if (!job) {
    notFound();
  }
  
  const fromTab = typeof searchParams.fromTab === 'string' ? searchParams.fromTab : null;

  return (
    <JobDetailsClient job={job} fromTab={fromTab} />
  );
}
