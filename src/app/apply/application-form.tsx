
'use client';

import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MOCK_JOBS } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Flag } from '../page';

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

const applicationSchema = z.object({
  fullName: z.string().min(1, '姓名为必填项'),
  telegram: z.string().optional(),
  wechat: z.string().optional(),
  qq: z.string().optional(),
  email: z.string().optional(),
  jobTitle: z.string().min(1, '意向岗位为必填项'),
  expectedSalary: z.string().min(1, '期望薪资为必填项'),
  resume: z.any().refine(files => files?.length > 0, '简历为必填项。'),
  workLocations: z.array(z.string()).refine(value => value.some(item => item), {
    message: '至少选择一个工作地点',
  }),
  notes: z.string().optional(),
}).refine(data => {
    const filledFields = [data.telegram, data.wechat, data.qq, data.email].filter(Boolean);
    return filledFields.length >= 2;
}, {
    message: '至少填写两个联系方式 (Telegram, 微信, QQ, 邮箱)',
    path: ['telegram'], // Show error on one of the fields
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export default function ApplicationForm() {
  const searchParams = useSearchParams();
  const initialJobId = searchParams.get('jobId');
  const initialJob = MOCK_JOBS.find(job => job.id === initialJobId);
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      telegram: '',
      wechat: '',
      qq: '',
      email: '',
      jobTitle: initialJob ? `${initialJob.title} - ${initialJob.location}` : '',
      expectedSalary: '',
      notes: '',
      resume: undefined,
      workLocations: [],
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
        <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>✍️ 姓名 (拼音)</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的姓名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormItem>
          <FormLabel>📞 联系方式 (最少填两项)</FormLabel>
        </FormItem>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FormField
            control={form.control}
            name="telegram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>📲 Telegram</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的 Telegram" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="wechat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>💬 微信</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的微信号" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qq"
            render={({ field }) => (
              <FormItem>
                <FormLabel>🧑‍💻 QQ</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的QQ号" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>📧 邮箱</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的邮箱" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>🎯 意向岗位</FormLabel>
              <FormControl>
                <Input placeholder="请输入您意向的岗位" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
            control={form.control}
            name="expectedSalary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>💰 期望薪资</FormLabel>
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
              <FormLabel>📄 上传简历 (PDF/Word)</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf,.doc,.docx" {...form.register('resume')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workLocations"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">📍 工作地点</FormLabel>
                <FormDescription>
                  请选择您感兴趣的工作地点
                </FormDescription>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locations.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="workLocations"
                  render={({ field }) => {
                    return (
                      <FormItem
                        className="flex flex-row items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value || []), item.id])
                                : field.onChange(
                                    (field.value || [])?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center">
                          <Flag country={item.label} className="h-4 w-6 mr-2" />
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              </div>
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

        <Button type="submit" size="lg" className="w-full bg-card hover:bg-muted text-card-foreground animate-pulse-glow">🚀 提交申请</Button>
      </form>
    </Form>
  );
}

    