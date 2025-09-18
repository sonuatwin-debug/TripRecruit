
'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MOCK_JOBS } from '@/lib/mock-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Flag } from '@/components/flag';
import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';

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

      <div className="space-y-2">
        <Label>👤 姓名 (拼音)</Label>
        <Input placeholder="请输入您的姓名" name="fullName" required />
      </div>

      <div className="space-y-2">
        <Label>☎️ 联系方式 (最少填两项)</Label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label>✈️ Telegram</Label>
          <Input placeholder="请输入您的 Telegram" name="telegram" />
        </div>
        <div className="space-y-2">
          <Label>💬 微信</Label>
          <Input placeholder="请输入您的微信号" name="wechat" />
        </div>
        <div className="space-y-2">
          <Label>🟦 QQ</Label>
          <Input placeholder="请输入您的QQ号" name="qq" />
        </div>
        <div className="space-y-2">
          <Label>📧 邮箱</Label>
          <Input type="email" placeholder="请输入您的邮箱" name="email" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>🎯 意向岗位</Label>
        <Input 
          placeholder="请输入您意向的岗位" 
          name="jobTitle" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label>💰 期望薪资</Label>
        <Input placeholder="例如：15k-20k" name="expectedSalary" required />
      </div>

      <div className="space-y-2">
        <Label>📎 上传简历 (PDF/Word)</Label>
        <Input type="file" name="resume" accept=".pdf,.doc,.docx" required />
      </div>

      <div className="space-y-2">
        <div className="mb-4">
          <Label className="text-base">🌍 工作地点</Label>
          <p className="text-sm text-muted-foreground">
            请选择您感兴趣的工作地点
          </p>
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
      </div>

      <div className="space-y-2">
        <Label>📝 备注 (可选)</Label>
        <Textarea
          placeholder="您可以在此填写任何补充信息"
          rows={5}
          name="notes"
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-card hover:bg-muted text-card-foreground animate-pulse-glow">🚀 提交申请</Button>
    </form>
  );
}
