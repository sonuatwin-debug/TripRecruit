'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Building, MapPin, Search } from 'lucide-react';
import { MOCK_JOBS } from '@/lib/mock-data';

type Job = typeof MOCK_JOBS[0];

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('all');
  const [department, setDepartment] = useState('all');

  const locations = useMemo(() => ['all', ...Array.from(new Set(MOCK_JOBS.map(job => job.location)))], []);
  const departments = useMemo(() => ['all', ...Array.from(new Set(MOCK_JOBS.map(job => job.department)))], []);

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
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger>
              <SelectValue placeholder="部门" />
            </SelectTrigger>
            <SelectContent>
              {departments.map(dep => <SelectItem key={dep} value={dep}>{dep === 'all' ? '所有部门' : dep}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </Card>
      
      <div className="space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-grow">
                  <h3 className="font-headline text-xl font-semibold mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Building /> {job.department}</div>
                    <div className="flex items-center gap-2"><MapPin /> {job.location}</div>
                  </div>
                </div>
                <Button asChild className="mt-4 md:mt-0 md:ml-4 flex-shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/apply?jobId=${job.id}`}>立即申请</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold">未找到职位</h3>
            <p className="text-muted-foreground mt-2">请尝试调整您的搜索过滤器。</p>
          </div>
        )}
      </div>
    </div>
  );
}
