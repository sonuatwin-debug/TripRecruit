'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MOCK_JOB_DESCRIPTION, MOCK_USER_PROFILE } from '@/lib/mock-data';
import { aiAssistedApplication } from '@/ai/flows/ai-assisted-application';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const applicationSchema = z.object({
  fullName: z.string().min(2, '姓名是必填项'),
  email: z.string().email('无效的电子邮件地址'),
  phone: z.string().min(10, '电话号码是必填项'),
  resume: z.any().refine(files => files?.length > 0, '简历是必填项。'),
  coverLetter: z.string().min(50, '请写一封简短的求职信（最少50个字符）。'),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;
type Suggestions = Record<string, string>;

export default function ApplicationForm() {
  const [suggestions, setSuggestions] = useState<Suggestions | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: undefined,
    },
  });

  async function onSubmit(data: ApplicationFormValues) {
    // In a real app, you would handle file upload and form submission here.
    console.log(data);
    alert('申请已成功提交！ （请检查控制台以获取数据）');
    form.reset();
  }
  
  async function getAiSuggestions() {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const formState = form.getValues();
      const response = await aiAssistedApplication({
        jobDescription: MOCK_JOB_DESCRIPTION,
        userProfile: MOCK_USER_PROFILE,
        applicationFormFields: JSON.stringify(formState),
      });

      if (response.suggestedChanges) {
        setSuggestions(JSON.parse(response.suggestedChanges));
      } else {
        setSuggestions({}); // No suggestions
      }
    } catch (error) {
      console.error('获取AI建议时出错：', error);
      setSuggestions({ general: '目前无法获取AI建议。' });
    } finally {
      setIsLoading(false);
    }
  }

  const renderSuggestion = (fieldName: keyof ApplicationFormValues) => {
    if (!suggestions || !suggestions[fieldName]) return null;
    return <p className="text-sm text-accent-foreground bg-accent/20 p-2 mt-1 rounded-md">{suggestions[fieldName]}</p>;
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button variant="outline" onClick={getAiSuggestions} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          AI 助手
        </Button>
      </div>

      {suggestions && Object.keys(suggestions).length === 0 && !isLoading && (
        <Alert className="mb-4 border-green-500 text-green-700">
            <Wand2 className="h-4 w-4 !text-green-700" />
            <AlertTitle>看起来不错！</AlertTitle>
            <AlertDescription>
                我们的AI助手审核了您的申请，没有提出任何建议。您可以提交了！
            </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>全名</FormLabel>
                <FormControl>
                  <Input placeholder="张三" {...field} />
                </FormControl>
                {renderSuggestion('fullName')}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>电子邮件地址</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="zhang.san@example.com" {...field} />
                  </FormControl>
                  {renderSuggestion('email')}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>电话号码</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+86 138 1234 5678" {...field} />
                  </FormControl>
                  {renderSuggestion('phone')}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>简历</FormLabel>
                <FormControl>
                  <Input type="file" {...form.register('resume')} />
                </FormControl>
                {renderSuggestion('resume')}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>求职信</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="请介绍一下您自己，以及为什么您是这个职位的合适人选。"
                    rows={8}
                    {...field}
                  />
                </FormControl>
                 {renderSuggestion('coverLetter')}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">提交申请</Button>
        </form>
      </Form>
    </>
  );
}
