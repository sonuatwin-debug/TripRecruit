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
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  resume: z.any().refine(files => files?.length > 0, 'Resume is required.'),
  coverLetter: z.string().min(50, 'Please write a short cover letter (min 50 characters).'),
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
    alert('Application submitted successfully! (Check console for data)');
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
      console.error('Error getting AI suggestions:', error);
      setSuggestions({ general: 'Could not get AI suggestions at this time.' });
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
          AI Assist
        </Button>
      </div>

      {suggestions && Object.keys(suggestions).length === 0 && !isLoading && (
        <Alert className="mb-4 border-green-500 text-green-700">
            <Wand2 className="h-4 w-4 !text-green-700" />
            <AlertTitle>Looking Good!</AlertTitle>
            <AlertDescription>
                Our AI assistant reviewed your application and has no suggestions. You're ready to submit!
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
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
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
                <FormLabel>Resume/CV</FormLabel>
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
                <FormLabel>Cover Letter</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself and why you're a good fit for this role."
                    rows={8}
                    {...field}
                  />
                </FormControl>
                 {renderSuggestion('coverLetter')}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Submit Application</Button>
        </form>
      </Form>
    </>
  );
}
