'use server';

/**
 * @fileOverview A flow to summarize employee stories for candidate review.
 *
 * - summarizeEmployeeStories - A function that summarizes employee stories.
 * - SummarizeEmployeeStoriesInput - The input type for the summarizeEmployeeStories function.
 * - SummarizeEmployeeStoriesOutput - The return type for the summarizeEmployeeStories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeEmployeeStoriesInputSchema = z.object({
  employeeStories: z
    .string()
    .describe('A collection of employee stories to summarize.'),
});
export type SummarizeEmployeeStoriesInput = z.infer<
  typeof SummarizeEmployeeStoriesInputSchema
>;

const SummarizeEmployeeStoriesOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the provided employee stories.'),
});
export type SummarizeEmployeeStoriesOutput = z.infer<
  typeof SummarizeEmployeeStoriesOutputSchema
>;

export async function summarizeEmployeeStories(
  input: SummarizeEmployeeStoriesInput
): Promise<SummarizeEmployeeStoriesOutput> {
  return summarizeEmployeeStoriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeEmployeeStoriesPrompt',
  input: {schema: SummarizeEmployeeStoriesInputSchema},
  output: {schema: SummarizeEmployeeStoriesOutputSchema},
  prompt: `You are an expert at summarizing employee stories to quickly convey company culture and employee experiences to potential candidates.

  Summarize the following employee stories in a concise and engaging manner:

  {{employeeStories}}`,
});

const summarizeEmployeeStoriesFlow = ai.defineFlow(
  {
    name: 'summarizeEmployeeStoriesFlow',
    inputSchema: SummarizeEmployeeStoriesInputSchema,
    outputSchema: SummarizeEmployeeStoriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
