import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, MapPin, Newspaper, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { summarizeEmployeeStories } from '@/ai/flows/ai-summarize-employee-stories';
import { MOCK_JOBS, MOCK_NEWS, MOCK_STORIES } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

async function EmployeeStories() {
  let summary;
  try {
    const storiesText = MOCK_STORIES.map(s => `${s.name}, ${s.role}: "${s.story}"`).join('\n\n');
    const result = await summarizeEmployeeStories({ employeeStories: storiesText });
    summary = result.summary;
  } catch (error) {
    console.error('Error summarizing employee stories:', error);
    // Fallback to showing raw stories if AI summarization fails
  }


  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Users /> Employee Stories
        </CardTitle>
      </CardHeader>
      <CardContent>
        {summary ? (
          <>
            <p className="text-lg italic">&ldquo;{summary}&rdquo;</p>
            <p className="text-right mt-4 text-sm opacity-80">- The Trip.com Group Team</p>
          </>
        ) : (
          <div className="space-y-4">
            {MOCK_STORIES.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback>{s.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <blockquote className="italic border-l-2 border-accent pl-4">
                    <p>&ldquo;{s.story}&rdquo;</p>
                  </blockquote>
                  <p className="text-right mt-2 text-sm font-semibold">{s.name}, <span className="font-normal opacity-80">{s.role}</span></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container h-full flex flex-col justify-center text-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">Find Your Next Journey with Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Explore exciting career opportunities at Trip.com Group and be part of a global team shaping the future of travel.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/jobs">
              Explore Open Roles <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <main className="container py-12 md:py-20 space-y-16">
        {/* Featured Jobs Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">Featured Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_JOBS.slice(0, 3).map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Building /> {job.department}</div>
                    <div className="flex items-center gap-2"><MapPin /> {job.location}</div>
                  </div>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href={`/jobs`}>
                      Learn More <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </section>

        {/* Employee Stories Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">What Our Team Says</h2>
          <div className="max-w-4xl mx-auto">
            <EmployeeStories />
          </div>
        </section>

        {/* Company News Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">Company News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_NEWS.map((item, index) => {
              const newsImage = PlaceHolderImages.find(p => p.id === `news-${index + 1}`);
              return (
              <div key={index} className="flex flex-col md:flex-row items-start gap-4">
                {newsImage && (
                  <Image
                    src={newsImage.imageUrl}
                    alt={newsImage.description}
                    data-ai-hint={newsImage.imageHint}
                    width={200}
                    height={120}
                    className="rounded-lg object-cover w-full md:w-48"
                  />
                )}
                <div>
                  <h3 className="font-bold font-headline text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.date}</p>
                  <p className="text-sm">{item.excerpt}</p>
                   <Button asChild variant="link" className="px-0 mt-2">
                    <Link href="#">
                      Read More <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            )})}
          </div>
        </section>
      </main>
    </div>
  );
}
