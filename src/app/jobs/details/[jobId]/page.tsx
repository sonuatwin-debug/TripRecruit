
'use client';

import { useParams, notFound } from 'next/navigation';
import { MOCK_JOBS } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, MapPin, Clock, Briefcase, Users, Languages, Wallet, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function JobDetailsPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  const job = MOCK_JOBS.find(j => j.id === jobId);

  if (!job || !job.details) {
    notFound();
  }

  const { details } = job;

  return (
    <div className="container">
      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold font-headline">{job.title}</CardTitle>
              <CardDescription className="flex flex-wrap gap-x-4 gap-y-2 text-base pt-2">
                <span className="flex items-center gap-2"><Briefcase className="h-5 w-5" /> {job.department}</span>
                <span className="flex items-center gap-2"><MapPin className="h-5 w-5" /> {job.location}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              <Separator />

              <div>
                <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">📋 基本信息</h3>
                <div className="grid grid-cols-1 gap-y-3 gap-x-8 text-muted-foreground">
                  <p><strong className="font-semibold text-foreground w-24 inline-block">性别:</strong> {details.gender}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">年龄:</strong> {details.age}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">国籍:</strong> {details.nationality}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">语言要求:</strong> {details.languages}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">💰 薪资待遇:</strong> {details.salary}</p>
                  <p><strong className="font-semibold text-foreground w-24 inline-block">⏰ 工作时间:</strong> {details.hours}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">🎯 岗位需求</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {details.requirements.map((req, index) => <li key={index}>{req}</li>)}
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">🛠️ 岗位职责</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {details.responsibilities.map((res, index) => <li key={index}>{res}</li>)}
                </ul>
              </div>

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
