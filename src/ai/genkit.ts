import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {genkitFirebase} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY || 'YOUR_API_KEY',
    }),
    genkitFirebase(),
  ],
  model: 'googleai/gemini-2.5-flash',
});
