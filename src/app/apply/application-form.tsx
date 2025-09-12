'use client';

import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOCK_JOBS } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';

const applicationSchema = z.object({
  fullName: z.string().min(2, '姓名为必填项'),
  contact: z.string().min(5, '联系方式为必填项'),
  jobId: z.string({ required_error: '请选择一个意向岗位' }),
  expectedSalary: z.string().min(2, '期望薪资为必填项'),
  resume: z.any().refine(files => files?.length > 0, '简历为必填项。'),
  notes: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export default function ApplicationForm() {
  const searchParams = useSearchParams();
  const initialJobId = searchParams.get('jobId');
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      contact: '',
      jobId: initialJobId || undefined,
      expectedSalary: '',
      notes: '',
      resume: undefined,
    },
  });

  async function onSubmit(data: ApplicationFormValues) {
    try {
      // In a real app, you would handle file upload and form submission here.
      console.log(data);
      toast({
        title: "提交成功",
        description: "您的申请已成功提交。",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "提交失败",
        description: "提交申请时发生错误，请稍后重试。",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>姓名</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的姓名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>联系方式 (手机/微信/邮箱)</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的联系方式" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="jobId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>意向岗位</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择您感兴趣的岗位" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {MOCK_JOBS.map(job => (
                    <SelectItem key={job.id} value={job.id}>{job.title} - {job.location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
            control={form.control}
            name="expectedSalary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>期望薪资</FormLabel>
                <FormControl>
                  <Input placeholder="例如：15k-20k" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>上传简历 (PDF/Word)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf,.doc,.docx" {...form.register('resume')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>备注 (可选)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="您可以在此填写任何补充信息"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow">提交申请</Button>
      </form>
    </Form>
  );
}
