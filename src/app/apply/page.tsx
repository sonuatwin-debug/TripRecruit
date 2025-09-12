'use client';

import { useSearchParams } from 'next/navigation';
import { MOCK_JOBS } from '@/lib/mock-data';
import ApplicationForm from './application-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');
  const job = MOCK_JOBS.find(j => j.id === jobId);

  return (
    <div className="container py-12 md:py-20">
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
  );
}
