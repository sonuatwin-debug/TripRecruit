'use server';

/**
 * @fileOverview This file defines a Genkit flow for AI-assisted job application completion.
 *
 * The flow helps users fill out job applications by providing guidance on required information.
 * It exports the AiAssistedApplication function, the AiAssistedApplicationInput type, and the AiAssistedApplicationOutput type.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAssistedApplicationInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The detailed description of the job being applied for.'),
  userProfile: z
    .string()
    .describe(
      'The user profile, containing information like skills, experience, and education.'
    ),
  applicationFormFields: z
    .string()
    .describe(
      'The current state of the application form, as a stringified JSON object. Each key represents a form field, and its value represents the user input.'
    ),
});
export type AiAssistedApplicationInput = z.infer<
  typeof AiAssistedApplicationInputSchema
>;

const AiAssistedApplicationOutputSchema = z.object({
  suggestedChanges: z
    .string()
    .describe(
      'A stringified JSON object containing suggestions for each form field, including whether the field is missing or needs improvement. Empty if no changes needed.'
    ),
});

export type AiAssistedApplicationOutput = z.infer<
  typeof AiAssistedApplicationOutputSchema
>;

export async function aiAssistedApplication(
  input: AiAssistedApplicationInput
): Promise<AiAssistedApplicationOutput> {
  return aiAssistedApplicationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistedApplicationPrompt',
  input: {schema: AiAssistedApplicationInputSchema},
  output: {schema: AiAssistedApplicationOutputSchema},
  prompt: `You are an AI assistant designed to help users complete job applications.

  Based on the job description, the user profile, and the current state of the application form, provide suggestions on how to improve the application.

  Job Description: {{{jobDescription}}}
  User Profile: {{{userProfile}}}
  Current Application Form Fields: {{{applicationFormFields}}}

  Analyze the current application form fields and identify any missing information or areas for improvement.

  Specifically, look for:
  - Missing required fields
  - Weak descriptions of skills or experience
  - Mismatches between the user profile and the job requirements

  Return a JSON object with suggestions for each form field. If a field is missing, indicate that it is required. If a field needs improvement, provide specific suggestions on what to add or change.  If no changes are needed, the object should be empty.
  `,
});

const aiAssistedApplicationFlow = ai.defineFlow(
  {
    name: 'aiAssistedApplicationFlow',
    inputSchema: AiAssistedApplicationInputSchema,
    outputSchema: AiAssistedApplicationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
