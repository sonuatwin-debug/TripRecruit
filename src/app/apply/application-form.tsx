
'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MOCK_JOBS } from '@/lib/mock-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Flag } from '@/components/flag';
import { useEffect, useState } from 'react';

const locations = [
    { id: 'philippines', label: '菲律宾' },
    { id: 'dubai', label: '迪拜' },
    { id: 'thailand', label: '泰国' },
    { id: 'cambodia', label: '柬埔寨' },
    { id: 'japan', label: '日本' },
    { id: 'malaysia', label: '马来西亚' },
    { id: 'hongkong', label: '香港' },
    { id: 'srilanka', label: '斯里兰卡' },
];

export default function ApplicationForm() {
  const searchParams = useSearchParams();
  const initialJobId = searchParams.get('jobId');
  const initialJob = MOCK_JOBS.find(job => job.id === initialJobId);
  const [jobTitle, setJobTitle] = useState(initialJob ? `${initialJob.title} - ${initialJob.location}` : '');

  useEffect(() => {
    if (initialJob) {
      setJobTitle(`${initialJob.title} - ${initialJob.location}`);
    }
  }, [initialJob]);

  return (
    <form action="https://formspree.io/f/mnnbrjoe" method="POST" encType="multipart/form-data" className="space-y-6">
      <input type="hidden" name="_next" value="/apply/success" />
      <input type="hidden" name="_subject" value="新的职位申请!" />

      <FormItem>
        <FormLabel>👤 姓名 (拼音)</FormLabel>
        <FormControl>
          <Input placeholder="请输入您的姓名" name="fullName" required />
        </FormControl>
      </FormItem>

      <FormItem>
        <FormLabel>☎️ 联系方式 (最少填两项)</FormLabel>
      </FormItem>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FormItem>
          <FormLabel>✈️ Telegram</FormLabel>
          <FormControl>
            <Input placeholder="请输入您的 Telegram" name="telegram" />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel>💬 微信</FormLabel>
          <FormControl>
            <Input placeholder="请输入您的微信号" name="wechat" />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel>🟦 QQ</FormLabel>
          <FormControl>
            <Input placeholder="请输入您的QQ号" name="qq" />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel>📧 邮箱</FormLabel>
          <FormControl>
            <Input type="email" placeholder="请输入您的邮箱" name="email" />
          </FormControl>
        </FormItem>
      </div>
      
      <FormItem>
        <FormLabel>🎯 意向岗位</FormLabel>
        <FormControl>
          <Input 
            placeholder="请输入您意向的岗位" 
            name="jobTitle" 
            value={jobTitle} 
            onChange={(e) => setJobTitle(e.target.value)} 
            required 
          />
        </FormControl>
      </FormItem>
      
      <FormItem>
        <FormLabel>💰 期望薪资</FormLabel>
        <FormControl>
          <Input placeholder="例如：15k-20k" name="expectedSalary" required />
        </FormControl>
      </FormItem>

      <FormItem>
        <FormLabel>📎 上传简历 (PDF/Word)</FormLabel>
        <FormControl>
          <Input type="file" name="resume" accept=".pdf,.doc,.docx" required />
        </FormControl>
      </FormItem>

      <FormItem>
        <div className="mb-4">
          <FormLabel className="text-base">🌍 工作地点</FormLabel>
          <FormDescription>
            请选择您感兴趣的工作地点
          </FormDescription>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((item) => (
            <div key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                <Checkbox id={item.id} name="workLocations" value={item.label} />
                <label htmlFor={item.id} className="font-normal flex items-center">
                    <Flag country={item.label} className="h-4 w-6 mr-2" />
                    {item.label}
                </label>
            </div>
        ))}
        </div>
      </FormItem>

      <FormItem>
        <FormLabel>📝 备注 (可选)</FormLabel>
        <FormControl>
          <Textarea
            placeholder="您可以在此填写任何补充信息"
            rows={5}
            name="notes"
          />
        </FormControl>
      </FormItem>

      <Button type="submit" size="lg" className="w-full bg-card hover:bg-muted text-card-foreground animate-pulse-glow">🚀 提交申请</Button>
    </form>
  );
}
