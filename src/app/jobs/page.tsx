

'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, Code, TrendingUp, Briefcase } from 'lucide-react';
import { MOCK_JOBS } from '@/lib/mock-data';
import { Flag } from '../page';

type Job = typeof MOCK_JOBS[0];

const jobCategories = {
  tech: {
    title: '技术岗位',
    departments: ['工程部', '产品部', '设计部', '数据科学'],
    icon: Code,
  },
  performance: {
    title: '业绩岗位',
    departments: ['市场部'],
    icon: TrendingUp,
  },
  functional: {
    title: '职能岗位',
    departments: ['职能部'],
    icon: Briefcase,
  },
};

const getCategoryFromDepartment = (department: string) => {
  if (jobCategories.tech.departments.includes(department)) return 'tech';
  if (jobCategories.performance.departments.includes(department)) return 'performance';
  if (jobCategories.functional.departments.includes(department)) return 'functional';
  return 'tech';
};

const JobCard = ({ job, activeTab }: { job: Job, activeTab: string }) => {
  const detailUrl = job.details ? `/jobs/details/${job.id}?fromTab=${activeTab}` : `/apply?jobId=${job.id}&fromTab=${activeTab}`;
  
  return (
    <Card className="hover:shadow-md transition-shadow hover:border-primary/50 overflow-hidden relative">
      <div className="absolute inset-0 opacity-30">
        <Flag country={job.location} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10">
        <div className="flex-grow">
            <h3 className="font-headline text-lg font-semibold mb-1">{job.title}</h3>
            <p className="text-muted-foreground text-sm flex items-center">
              <Flag country={job.location} className="h-4 w-6 mr-2" />
              {job.location}
            </p>
        </div>
        <Button asChild className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0 bg-sky-500 hover:bg-sky-600 text-white text-xs px-3 h-8 animate-pulse-glow">
            <Link href={detailUrl}>
              查看简章
            </Link>
        </Button>
      </CardContent>
    </Card>
  );
};


export default function JobsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const locationParam = searchParams.get('location');
  const [activeTab, setActiveTab] = useState('tech');

  useEffect(() => {
    const departmentParam = searchParams.get('department');
    const tabParam = searchParams.get('fromTab');

    if (tabParam && ['tech', 'performance', 'functional'].includes(tabParam)) {
        setActiveTab(tabParam);
    } else if (departmentParam) {
      const job = MOCK_JOBS.find(j => j.department === departmentParam);
      if (job) {
        setActiveTab(getCategoryFromDepartment(job.department));
      }
    }
  }, [searchParams]);


  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.keywords.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !locationParam || job.location === locationParam;

      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, locationParam]);
  
  const jobsByColumn = useMemo(() => ({
      tech: filteredJobs.filter(job => jobCategories.tech.departments.includes(job.department)),
      performance: filteredJobs.filter(job => jobCategories.performance.departments.includes(job.department)),
      functional: filteredJobs.filter(job => jobCategories.functional.departments.includes(job.department)),
  }), [filteredJobs]);

  const JobsColumn = ({ jobs, title, icon: Icon }: { jobs: Job[], title: string, icon: React.ElementType }) => (
    <div className="w-full">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-4 mb-4">
        <h2 className="text-xl font-bold font-headline flex items-center gap-2 px-2">
          <Icon className="h-5 w-5 text-primary" />
          {title}
          <span className="text-sm font-normal text-muted-foreground ml-2">({jobs.length})</span>
        </h2>
      </div>
      <div className="space-y-4 px-1 pb-4">
        {jobs.length > 0 ? (
          jobs.map(job => <JobCard key={job.id} job={job} activeTab={activeTab} />)
        ) : (
          <div className="text-center py-10 px-4 rounded-lg bg-muted/50">
            <p className="text-muted-foreground text-sm">该类别职位即将上线，敬请期待</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="py-12 md:py-20 flex flex-col h-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-headline mb-2">
            {locationParam ? `${locationParam} 职位` : '探索机会'}
          </h1>
          <p className="text-lg text-muted-foreground">找到适合您的角色。</p>
        </div>

        <Card className="mb-8 p-4 sticky top-[56px] z-20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="按职位关键词搜索"
              className="pl-10 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Card>
        
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-8">
            <JobsColumn jobs={jobsByColumn.tech} title={jobCategories.tech.title} icon={jobCategories.tech.icon} />
            <JobsColumn jobs={jobsByColumn.performance} title={jobCategories.performance.title} icon={jobCategories.performance.icon} />
            <JobsColumn jobs={jobsByColumn.functional} title={jobCategories.functional.title} icon={jobCategories.functional.icon} />
        </div>
      </div>
    </div>
  );
}

    