import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, MapPin, Newspaper, Users, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { summarizeEmployeeStories } from '@/ai/flows/ai-summarize-employee-stories';
import { MOCK_JOBS, MOCK_NEWS, MOCK_STORIES } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

async function EmployeeStories() {
  let summary;
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_API_KEY') {
    try {
      const storiesText = MOCK_STORIES.map(s => `${s.name}, ${s.role}: "${s.story}"`).join('\n\n');
      const result = await summarizeEmployeeStories({ employeeStories: storiesText });
      summary = result.summary;
    } catch (error) {
      console.error('Error summarizing employee stories:', error);
      // Fallback to showing raw stories if AI summarization fails
    }
  }


  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Users /> 员工故事
        </CardTitle>
      </CardHeader>
      <CardContent>
        {summary ? (
          <>
            <p className="text-lg italic">&ldquo;{summary}&rdquo;</p>
            <p className="text-right mt-4 text-sm opacity-80">- 携程集团团队</p>
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

const popularRegions = [
    { name: '菲律宾', color: 'bg-blue-500', logo: <div className="h-4 w-6 rounded-sm bg-white flex flex-col justify-between"><div className="h-[2px] bg-red-500"></div><div className="h-[2px] bg-red-500"></div></div> },
    { name: '迪拜', color: 'bg-green-500', logo: <div className="h-4 w-6 rounded-sm bg-white border border-gray-300"></div> },
    { name: '泰国', color: 'bg-red-500', logo: <div className="h-4 w-6 rounded-sm bg-white flex flex-col justify-around"><div className="h-1 bg-blue-800"></div><div className="h-1 bg-red-600"></div></div> },
    { name: '柬埔寨', color: 'bg-indigo-500', logo: <div className="h-4 w-6 rounded-sm bg-blue-600 flex items-center justify-center"><div className="h-2 w-2 bg-white"></div></div> },
    { name: '日本', color: 'bg-gray-200', logo: <div className="h-4 w-6 rounded-full bg-red-600"></div> },
    { name: '马来西亚', color: 'bg-yellow-500', logo: <div className="h-4 w-6 rounded-sm bg-red-600"></div> },
    { name: '香港', color: 'bg-red-600', logo: <div className="h-4 w-6 rounded-sm bg-white flex items-center justify-center"><div className="h-2 w-2 text-red-600">🌸</div></div> },
    { name: '斯里兰卡', color: 'bg-orange-500', logo: <div className="h-4 w-6 rounded-sm bg-green-800"></div> },
];

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
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">与我们一起寻找您的下一段旅程</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            在携程集团探索激动人心的职业机会，成为塑造旅游未来的全球团队的一员。
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/jobs">
              探索职位 <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <main className="container py-12 md:py-20 space-y-16">
        {/* Featured Jobs Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">精选职位</h2>
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
                      了解更多 <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/jobs">查看所有职位</Link>
            </Button>
          </div>
        </section>

        {/* Popular Regions Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门地区</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularRegions.map((region) => (
              <Button key={region.name} variant="outline" className={`flex flex-col items-center justify-center h-24 gap-2 text-center ${region.color} bg-opacity-20 hover:bg-opacity-30`}>
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white">
                  {region.logo}
                </div>
                <span className="font-semibold text-sm">{region.name}</span>
              </Button>
            ))}
          </div>
        </section>

        {/* Employee Stories Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">我们的团队怎么说</h2>
          <div className="max-w-4xl mx-auto">
            <EmployeeStories />
          </div>
        </section>

        {/* Company News Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">公司新闻</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_NEWS.map((item, index) => {
              const newsImage = PlaceHolderImages.find(p => p.id === `news-${index + 1}`);
              return (
              <div key={index} className="flex flex-col gap-4">
                {newsImage && (
                  <Image
                    src={newsImage.imageUrl}
                    alt={newsImage.description}
                    data-ai-hint={newsImage.imageHint}
                    width={200}
                    height={120}
                    className="rounded-lg object-cover w-full h-48"
                  />
                )}
                <div>
                  <h3 className="font-bold font-headline text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.date}</p>
                  <p className="text-sm">{item.excerpt}</p>
                   <Button asChild variant="link" className="px-0 mt-2">
                    <Link href="#">
                      阅读更多 <ArrowRight className="ml-2" />
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
