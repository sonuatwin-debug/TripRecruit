
'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, Code, TrendingUp, Briefcase } from 'lucide-react';
import { MOCK_JOBS } from '@/lib/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Job = typeof MOCK_JOBS[0];

const jobCategories = {
  tech: ['工程部', '产品部', '设计部', '数据科学'],
  performance: ['市场部'],
  functional: ['职能部'],
};

const getCategoryFromDepartment = (department: string) => {
  if (jobCategories.tech.includes(department)) return 'tech';
  if (jobCategories.performance.includes(department)) return 'performance';
  if (jobCategories.functional.includes(department)) return 'functional';
  return 'tech';
};

const JobCard = ({ job }: { job: Job }) => (
    <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-grow">
            <h3 className="font-headline text-xl font-semibold mb-1">{job.title}</h3>
        </div>
        <Button asChild className="mt-4 md:mt-0 md:ml-4 flex-shrink-0 bg-sky-500 hover:bg-sky-600 text-white animate-pulse-glow">
            <Link href={job.details ? `/jobs/details/${job.id}` : `/apply?jobId=${job.id}`}>
              {job.location === '迪拜' && <span className="mr-2">🇦🇪</span>}
              {job.location === '香港' && <span className="mr-2">🇭🇰</span>}
              {job.location === '日本' && <span className="mr-2">🇯🇵</span>}
              {job.location === '柬埔寨' && <span className="mr-2">🇰🇭</span>}
              {job.location === '马来西亚' && <span className="mr-2">🇲🇾</span>}
              {job.location === '斯里兰卡' && <span className="mr-2">🇱🇰</span>}
              {job.location === '泰国' && <span className="mr-2">🇹🇭</span>}
              查看简章
            </Link>
        </Button>
        </CardContent>
    </Card>
);

export default function JobsPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('tech');
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('all');
  const [department, setDepartment] = useState('all');

  const locations = useMemo(() => ['all', ...Array.from(new Set(MOCK_JOBS.map(job => job.location)))], []);
  const departments = useMemo(() => ['all', ...Array.from(new Set(MOCK_JOBS.map(job => job.department)))], []);

  useEffect(() => {
    const locationParam = searchParams.get('location');
    const departmentParam = searchParams.get('department');
    if (locationParam) {
      setLocation(locationParam);
    }
    if (departmentParam) {
      setDepartment(departmentParam);
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
      const matchesLocation = location === 'all' || job.location === location;
      const matchesDepartment = department === 'all' || job.department === department;
      return matchesSearch && matchesLocation && matchesDepartment;
    });
  }, [searchTerm, location, department]);
  
  const jobsByTab = useMemo(() => ({
      tech: filteredJobs.filter(job => jobCategories.tech.includes(job.department)),
      performance: filteredJobs.filter(job => jobCategories.performance.includes(job.department)),
      functional: filteredJobs.filter(job => jobCategories.functional.includes(job.department)),
  }), [filteredJobs]);

  const JobsList = ({ jobs }: { jobs: Job[] }) => (
    <div className="space-y-6">
        {jobs.length > 0 ? (
          jobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold">未找到职位</h3>
            <p className="text-muted-foreground mt-2">请尝试调整您的搜索过滤器。</p>
          </div>
        )}
      </div>
  );

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline mb-2">探索机会</h1>
        <p className="text-lg text-muted-foreground">找到适合您的角色。</p>
      </div>

      <Card className="mb-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="按职位或关键词搜索..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="地点" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(loc => <SelectItem key={loc} value={loc}>{loc === 'all' ? '所有地点' : loc}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={department} onValueChange={(value) => {
            setDepartment(value);
            if (value !== 'all') {
              const job = MOCK_JOBS.find(j => j.department === value);
              if (job) {
                setActiveTab(getCategoryFromDepartment(job.department));
              }
            }
          }}>
            <SelectTrigger>
              <SelectValue placeholder="部门" />
            </SelectTrigger>
            <SelectContent>
              {departments.map(dep => <SelectItem key={dep} value={dep}>{dep === 'all' ? '所有部门' : dep}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </Card>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="tech" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  技术岗位
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  业绩岗位
              </TabsTrigger>
              <TabsTrigger value="functional" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  职能岗位
              </TabsTrigger>
          </TabsList>
          <TabsContent value="tech">
              <JobsList jobs={jobsByTab.tech} />
          </TabsContent>
          <TabsContent value="performance">
              <JobsList jobs={jobsByTab.performance} />
          </TabsContent>
          <TabsContent value="functional">
              <JobsList jobs={jobsByTab.functional} />
          </TabsContent>
      </Tabs>
    </div>
  );
}
