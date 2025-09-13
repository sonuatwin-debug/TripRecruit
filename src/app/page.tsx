import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, Send, TrendingUp, Handshake, ShieldCheck, Users, Globe, Award, Code, TrendingUp as TrendingUpIcon, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { summarizeEmployeeStories } from '@/ai/flows/ai-summarize-employee-stories';
import { MOCK_STORIES, MOCK_NEWS } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const advantages = [
    {
        icon: Globe,
        title: "全球化平台",
        description: "加入全球领先的旅游集团，在国际化的舞台上施展才华，接触多元文化，拓展全球视野。"
    },
    {
        icon: TrendingUp,
        title: "广阔发展空间",
        description: "我们提供清晰的职业路径和丰富的晋升机会，无论您是技术专家还是管理人才，都能找到自己的发展方向。"
    },
    {
        icon: Award,
        title: "有竞争力的薪酬",
        description: "提供行业内富有竞争力的薪资和福利待遇，确保您的付出获得应有的回报。"
    },
    {
        icon: Users,
        title: "优秀团队文化",
        description: "与顶尖人才共事，在开放、协作的氛围中共同成长，我们鼓励创新，拥抱变化。"
    },
    {
        icon: Handshake,
        title: "完善的员工培训",
        description: "我们拥有健全的培训体系，从入职引导到专业技能提升，全方位支持您的个人成长和职业发展。"
    },
    {
        icon: ShieldCheck,
        title: "全方位员工关怀",
        description: "我们关注每一位员工的福祉，提供全面的健康保障、舒适的工作环境和丰富的员工活动。"
    }
];

const jobCategories = [
  {
    value: 'tech',
    label: '技术岗',
    icon: Code,
    title: '技术岗',
    description: '我们正在寻找顶尖的技术人才，共同打造业界领先的旅游科技平台。在这里，你将有机会接触到大数据、人工智能、云计算等前沿技术，参与核心产品的研发，用代码改变世界。',
    features: ['前沿技术挑战', '海量数据处理', '分布式系统架构', '敏捷开发流程', '快速职业成长'],
    image: 'tech-jobs-showcase'
  },
  {
    value: 'performance',
    label: '业绩岗',
    icon: TrendingUpIcon,
    title: '业绩岗',
    description: '如果你对市场充满热情，渴望通过策略和执行力驱动业务增长，那么业绩岗就是你的舞台。我们提供广阔的平台和资源，让你在市场推广、渠道拓展、销售管理等领域大展拳脚。',
    features: ['目标驱动文化', '丰厚业绩奖励', '全面市场策略', '精英销售团队', '广阔客户资源'],
    image: 'performance-jobs-showcase'
  },
  {
    value: 'functional',
    label: '职能岗',
    icon: Briefcase,
    title: '职能岗',
    description: '作为公司的坚实后盾，职能部门在人力资源、财务、法务、行政等领域为业务发展提供全方位支持。我们欢迎专业、高效、富有责任感的你加入，共同保障公司的稳健运营。',
    features: ['专业化分工', '跨部门协作', '完善支持体系', '多样化发展路径', '人性化管理'],
    image: 'functional-jobs-showcase'
  }
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
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow">
          <Send className="h-6 w-6" />
        </a>
        <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow text-2xl">
          🐧
        </a>
        <a href="https://www.wechat.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 4.86 0 10.842c0 4.234 2.823 7.84 6.75 9.473V24l3.14-1.764a13.32 13.32 0 0 0 2.11.206c6.627 0 12-4.86 12-10.842S18.627 0 12 0zm-3.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
          </svg>
        </a>
        <a href="mailto:recruitment@trip.com" className="inline-block p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow">
          <Mail className="h-6 w-6" />
        </a>
      </div>

      <main className="container py-12 md:py-20 space-y-16">
        <div className="flex gap-4 flex-wrap justify-center mt-8 mb-12">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
              <Send className="h-6 w-6" />
            </a>
            <a href="https://www.wechat.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 4.86 0 10.842c0 4.234 2.823 7.84 6.75 9.473V24l3.14-1.764a13.32 13.32 0 0 0 2.11.206c6.627 0 12-4.86 12-10.842S18.627 0 12 0zm-3.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
              </svg>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.052 24l1.688-6.164A11.91 11.91 0 0 1 0 12.002C0 5.373 5.373 0 12.002 0s12.002 5.373 12.002 12.002-5.373 12.002-12.002 12.002a11.903 11.903 0 0 1-5.748-1.545L.052 24zm6.495-3.32a9.555 9.555 0 0 0 11.4-11.4 9.555 9.555 0 0 0-11.4 11.4zM12 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm4.8-6.9c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1-.2.2-.4.1c-.2-.1-1-.4-1.9-1.2s-1.4-1.7-1.6-2c-.2-.3 0-.4.1-.5.1-.1.2-.2.4-.3.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.3c-.2 0-.4.1-.6.3s-.7.7-.7 1.7.7 2 1.7 3.3c1 1.3 2.5 3.5 6.1 5.1.8.2 1.3.2 1.7.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
            </a>
            <a href="https://line.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.22,6.54a10.83,10.83,0,0,0-15.39,0,10.91,10.91,0,0,0,0,15.28l.11.11,2.2,1.65A10.84,10.84,0,0,0,12,24a10.74,10.74,0,0,0,5.77-1.78l2.36-1.77.11-.11a10.88,10.88,0,0,0,0-13.8ZM9.29,14.94H7.06V10.15H9.29Zm4.47,0H11.53V10.15h2.23Zm4.46-3a2.81,2.81,0,0,1-1.46,2.15,4.6,4.6,0,0,1-2.29.56H11.53V10.15h1.61a4.2,4.2,0,0,1,2.1.5,2.72,2.72,0,0,1,1.4,2.23Z"/>
                </svg>
            </a>
            <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.003c0-1.107-.893-2-2-2s-2 .893-2 2v2c0 1.107.893 2 2 2s2-.893 2-2v-2zm-2 6h4v2h-4v-2zm-2 4h8v2h-8v-2zm2 4h4v2h-4v-2zM19.143 21.345c1.898-.79 3.357-2.31 4-4.148.643-1.838.45-3.854-.5-5.59-1.57-2.85-4.47-4.61-7.64-4.61-3.173 0-6.073 1.758-7.643 4.61-.95 1.736-1.144 3.752-.5 5.59.643 1.838 2.102 3.358 4 4.148l.235.099-.44 2.156 2.73-1.638a11.13 11.13 0 0 0 2.666 0l2.73 1.638-.44-2.156.235-.099z"/>
                </svg>
            </a>
            <a href="https://www.dingtalk.com/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.435 6.074l-6.38 4.254-2.58-1.72-4.14 4.142 4.14 4.14 4.14-4.14-1.56-1.04 2.58-1.72 6.38-4.254-6.52-3.4zm2.14 8.566c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-2.78 2.78-2.78-2.78c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7l2.78 2.78-2.78 2.78c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.78-2.78 2.78 2.78c.2.2.4.3.7.3s.5-.1.7-.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-2.78-2.78 2.78-2.78z" transform="translate(-1.5 -1.5) scale(1.25)"/>
                </svg>
            </a>
            <a href="https://www.lita.gg/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.41 14.59L12 13.17l-3.41 3.42-1.42-1.42L10.59 12 7.17 8.59l1.42-1.42L12 10.83l3.41-3.42 1.42 1.42L13.41 12l3.42 3.41-1.42 1.42z"/>
                </svg>
            </a>
            <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg text-2xl">
              🐧
            </a>
          </div>

        {/* Popular Regions Section */}
        <section id="popular-regions" className="scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门招聘地点</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularRegions.map((region) => (
              <div key={region.name} className="relative p-4 rounded-lg flex flex-col justify-between h-48">
                <div className={'absolute inset-0 rounded-lg ' + region.color + ' opacity-20'}></div>
                <div className="relative text-center w-full">
                  <div className="text-4xl">{region.logo}</div>
                  <h3 className="font-semibold mt-2 text-foreground">{region.name}</h3>
                </div>
                <Button asChild variant="outline" className="relative w-full bg-card/80 hover:bg-card text-card-foreground animate-pulse-glow">
                  <Link href={`/jobs?location=${region.name}`}>查看岗位</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Job Categories Section */}
        <section className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门职位类别</h2>
          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-10 bg-muted">
              {jobCategories.map(cat => (
                <TabsTrigger key={cat.value} value={cat.value} className="text-base py-2.5">
                  <cat.icon className="h-5 w-5 mr-2" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {jobCategories.map(cat => {
              const image = PlaceHolderImages.find(p => p.id === cat.image);
              return (
                <TabsContent key={cat.value} value={cat.value}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold font-headline text-primary">{cat.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
                      <ul className="space-y-3">
                        {cat.features.map(feature => (
                          <li key={feature} className="flex items-center">
                            <ShieldCheck className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild size="lg" variant="outline" className="bg-card hover:bg-muted text-card-foreground animate-pulse-glow">
                        <Link href="/jobs">查看更多 <ArrowRight className="ml-2" /></Link>
                      </Button>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      {image && (
                        <Image 
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </section>

        {/* Advantages Section */}
        <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">我们的优势</h2>
                <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                    <Card key={index} className="text-center p-6">
                        <div className="flex justify-center mb-4">
                            <div className="bg-primary/10 text-primary p-4 rounded-full">
                                <advantage.icon className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground">{advantage.description}</p>
                    </Card>
                ))}
            </div>
        </section>
      </main>
    </div>
  );
}
