import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Facebook, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { summarizeEmployeeStories } from '@/ai/flows/ai-summarize-employee-stories';
import { MOCK_STORIES, MOCK_NEWS } from '@/lib/mock-data';
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
          我们的团队怎么说
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
    { name: '菲律宾', color: 'bg-philippines', logo: '🇵🇭' },
    { name: '迪拜', color: 'bg-dubai', logo: '🇦🇪' },
    { name: '泰国', color: 'bg-thailand', logo: '🇹🇭' },
    { name: '柬埔寨', color: 'bg-cambodia', logo: '🇰🇭' },
    { name: '日本', color: 'bg-japan', logo: '🇯🇵' },
    { name: '马来西亚', color: 'bg-malaysia', logo: '🇲🇾' },
    { name: '香港', color: 'bg-hongkong', logo: '🇭🇰' },
    { name: '斯里兰卡', color: 'bg-srilanka', logo: '🇱🇰' },
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
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.052 24l1.688-6.164A11.91 11.91 0 0 1 0 12.002C0 5.373 5.373 0 12.002 0s12.002 5.373 12.002 12.002-5.373 12.002-12.002 12.002a11.903 11.903 0 0 1-5.748-1.545L.052 24zm6.495-3.32a9.555 9.555 0 0 0 11.4-11.4 9.555 9.555 0 0 0-11.4 11.4zM12 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm4.8-6.9c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1-.2.2-.4.1c-.2-.1-1-.4-1.9-1.2s-1.4-1.7-1.6-2c-.2-.3 0-.4.1-.5.1-.1.2-.2.4-.3.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.3c-.2 0-.4.1-.6.3s-.7.7-.7 1.7.7 2 1.7 3.3c1 1.3 2.5 3.5 6.1 5.1.8.2 1.3.2 1.7.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
              </svg>
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors">
              <Send className="h-6 w-6" />
            </a>
            <a href="https://www.wechat.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 4.86 0 10.842c0 4.234 2.823 7.84 6.75 9.473V24l3.14-1.764a13.32 13.32 0 0 0 2.11.206c6.627 0 12-4.86 12-10.842S18.627 0 12 0zm-3.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
              </svg>
            </a>
             <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 4.776 0 10.667c0 3.342 1.777 6.278 4.444 8.211V24l3.89-2.222c1.22.333 2.5.555 3.778.555C18.628 22.333 24 17.557 24 11.667S18.628 0 12 0zM8.89 14.444s-2.11 3.556-5.89 2.778c0 0 2.11-4.89 7.444-4.89s7.444 4.89 7.444 4.89c-3.778.778-5.89-2.778-5.89-2.778s-1.556 1.444-3.11 0zm-1.667-3.667c-.667 0-1.222-.556-1.222-1.222s.555-1.223 1.222-1.223S8.444 8.89 8.444 9.555s-.556 1.222-1.222 1.222zm7.556 0c-.667 0-1.222-.556-1.222-1.222s.555-1.223 1.222-1.223 1.222.556 1.222 1.222-.555 1.222-1.222 1.222z"/>
              </svg>
            </a>
            <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm-1.5 5l-4 3 4 3V10zm3 0v6l4-3-4-3z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <main className="container py-12 md:py-20 space-y-16">
        {/* Popular Regions Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门地区</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularRegions.map((region) => (
              <div key={region.name} className="relative p-4 rounded-lg flex flex-col justify-between h-48">
                <div className={'absolute inset-0 rounded-lg ' + region.color + ' opacity-20'}></div>
                <div className="relative text-center w-full">
                  <div className="text-4xl">{region.logo}</div>
                  <h3 className="font-semibold mt-2 text-foreground">{region.name}</h3>
                </div>
                <Button asChild variant="outline" className="relative w-full bg-card/80 hover:bg-card text-card-foreground">
                  <Link href={`/jobs?location=${region.name}`}>查看岗位</Link>
                </Button>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
