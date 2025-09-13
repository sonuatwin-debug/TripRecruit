import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Facebook, Mail, Send, TrendingUp, Handshake, ShieldCheck, Users, Globe, Award, Code, TrendingUp as TrendingUpIcon, Briefcase } from 'lucide-react';
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

const partners = [
  { name: '牛牛体育' },
  { name: '摩根体育' },
  { name: '开云体育' },
  { name: '华体会体育' },
  { name: '乐鱼体育' },
  { name: 'AG体育' },
  { name: '博冠体育' },
  { name: '雷速体育' },
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
        <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors animate-pulse-glow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0001 2.02344C8.45521 2.02344 5.37549 4.14844 4.10352 7.15234C5.39648 6.44141 6.89258 6.00391 8.5 6.00391C8.55371 6.00391 8.60645 6.00488 8.66016 6.00586C9.64648 5.18164 10.8574 4.65234 12.1875 4.65234C14.6582 4.65234 16.5918 6.0957 17.2188 8.24023C17.7129 8.20508 18.2119 8.1875 18.7188 8.1875C20.6777 8.1875 22.4805 8.94336 23.666 10.1582C23.5137 5.76758 18.2461 2.02344 12.0001 2.02344ZM8.5 7.00391C7.39941 7.00391 6.33301 7.17773 5.3418 7.49219C4.65625 8.81641 4.25 10.3203 4.25 11.9316C4.25 12.4463 4.30273 12.9492 4.4043 13.4355C4.94922 13.1211 5.54688 12.8789 6.17383 12.7207C6.12891 12.4609 6.10547 12.1973 6.10547 11.9316C6.10547 10.0547 7.14258 8.41211 8.66016 7.66016C8.60645 7.44336 8.55371 7.22754 8.5 7.00391ZM18.7188 9.1875C18.4238 9.1875 18.1348 9.20703 17.8535 9.24414C17.1328 7.08008 15.0117 5.65234 12.1875 5.65234C11.1445 5.65234 10.1875 6.02734 9.40625 6.66602C8.88086 7.12695 8.4375 7.68359 8.09766 8.3125C7.96289 8.1543 8.00195 8.14844 7.82617 7.99023C7.02539 8.86328 6.52344 10.0078 6.52344 11.3164C6.52344 11.5273 6.54102 11.7344 6.57422 11.9385C6.5957 12.0547 6.62109 12.168 6.64648 12.2812C4.15234 13.4355 2.42773 15.9082 2.42773 18.8105C2.42773 21.1309 3.65234 23.1094 5.48047 24.1621C5.47266 23.7383 5.4668 23.3125 5.4668 22.8848C5.4668 18.3477 9.07227 15.082 13.4316 15.082C13.8418 15.082 14.2461 15.1152 14.6406 15.1777C15.1953 14.0703 16.3457 13.1074 17.6895 12.7285C17.752 12.3379 17.7871 11.9434 17.7871 11.5449C17.7871 10.5137 17.5117 9.55664 17.0273 9.1875C17.6016 9.1875 18.1562 9.1875 18.7188 9.1875ZM13.4316 16.082C9.43555 16.082 6.08203 19.0391 6.08203 22.8848C6.08203 23.2383 6.10352 23.5879 6.14453 23.9316C6.73242 21.8477 8.36523 20.2559 10.3652 19.5547C10.5527 19.0703 10.8281 18.627 11.1719 18.2402C11.3301 18.0469 11.498 17.8633 11.6758 17.6895C11.916 17.4707 12.1699 17.2656 12.4355 17.0762C12.502 17.0273 12.5684 16.9824 12.6348 16.9355C12.877 16.7441 13.1367 16.5742 13.4316 16.5137V16.082ZM17.6895 13.7285C16.8086 14.0371 15.9395 14.4707 15.2285 15.0273C15.0703 14.6543 14.8633 14.3027 14.6152 13.9805C15.8086 13.5625 16.7129 13.4219 17.6895 13.7285Z"/></svg>
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
        <div className="flex gap-4 flex-wrap justify-center -mt-8 mb-12">
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
            <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm-1.5 5l-4 3 4 3V10zm3 0v6l4-3-4-3z"/>
              </svg>
            </a>
            <a href="https://line.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.65 5.62c-1.4-1.92-3.48-3.41-5.91-4.25-1.39-.48-2.86-.74-4.36-.74-5.37 0-9.84 3.73-10.87 8.52-.33 1.53-.33 3.12 0 4.65.98 4.58 4.93 8.1 9.94 8.5.38.03.76.05 1.14.05 4.07 0 7.68-2.02 9.71-5.14 1.3-2.01 2.05-4.38 2.05-6.95 0-1.3-.23-2.55-.66-3.72zm-12.28 9.53h-1.89V10.1h1.89v5.05zm-3.64 0H4.84V10.1h1.89v5.05zm10.7-3.21c0 .5-.13.93-.39 1.3-.26.37-.62.66-1.08.87-.46.2-1.01.3-1.65.3h-1.12V10.1h1.19c.61 0 1.13.1 1.57.3.44.2.78.49 1.03.87.25.37.38.81.38 1.32v.49zm-1.89-1.63h-.9v3.25h.9c.77 0 1.28-.21 1.52-.64.24-.42.24-.98.24-1.67v-.31c0-.68-.2-1.19-.6-1.52-.4-.32-1.02-.48-1.86-.48z"/>
                </svg>
            </a>
             <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.36 15.35h-3.49v-1.88h3.49v1.88zm-5.23 0H5.64v-1.88h3.49v1.88zm8.72 0h-3.49v-1.88h3.49v1.88zm-5.23 3.76h-3.49v-1.88h3.49v1.88zm-5.24 0H2.17v-1.88h3.49v1.88zM21.83.02C17.3-.48 12.8.27 9.17 2.3c-3.78 2.1-6.4 5.7-7 9.98-.38 2.76.04 5.57 1.18 8.13 1.25 2.8 3.5 5.08 6.3 6.55 3.32 1.76 7.1 2.08 10.66.92 3.9-1.28 6.9-4.33 8.16-8.23.9-2.8.9-5.83-.02-8.68C27.55 7.15 25.12 3.8 21.83.02zM9.13 8.6h3.49v1.88H9.13V8.6zm5.24 0h3.49v1.88h-3.49V8.6z"/>
                </svg>
            </a>
            <a href="https://www.dingtalk.com/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.94 3.65c-2.39.4-4.22 1.34-5.74 2.88-2.62 2.67-4.22 6-4.52 9.87-.08 1.02.11 2.04.42 3.01.46 1.45 1.28 2.73 2.37 3.82 2.65 2.65 6.2 4.2 10.07 4.54 1.18.1 2.37-.02 3.54-.25 3.6-1.07 6.4-3.8 7.5-7.38.74-2.42.74-5.04 0-7.46-1.12-3.66-3.88-6.4-7.58-7.53-1.63-.5-3.32-.73-5.06-.8zm.53 3.63l4.5 4.5-4.5 4.5-4.5-4.5 4.5-4.5z"/>
                </svg>
            </a>
            <a href="https://www.lita.gg/" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.41 14.59L12 13.17l-3.41 3.42-1.42-1.42L10.59 12 7.17 8.59l1.42-1.42L12 10.83l3.41-3.42 1.42 1.42L13.41 12l3.42 3.41-1.42 1.42z"/>
                </svg>
            </a>
            <a href="https://im.qq.com" target="_blank" rel="noopener noreferrer" className="inline-block p-3 rounded-full bg-card text-card-foreground hover:bg-muted transition-colors animate-pulse-glow shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0001 2.02344C8.45521 2.02344 5.37549 4.14844 4.10352 7.15234C5.39648 6.44141 6.89258 6.00391 8.5 6.00391C8.55371 6.00391 8.60645 6.00488 8.66016 6.00586C9.64648 5.18164 10.8574 4.65234 12.1875 4.65234C14.6582 4.65234 16.5918 6.0957 17.2188 8.24023C17.7129 8.20508 18.2119 8.1875 18.7188 8.1875C20.6777 8.1875 22.4805 8.94336 23.666 10.1582C23.5137 5.76758 18.2461 2.02344 12.0001 2.02344ZM8.5 7.00391C7.39941 7.00391 6.33301 7.17773 5.3418 7.49219C4.65625 8.81641 4.25 10.3203 4.25 11.9316C4.25 12.4463 4.30273 12.9492 4.4043 13.4355C4.94922 13.1211 5.54688 12.8789 6.17383 12.7207C6.12891 12.4609 6.10547 12.1973 6.10547 11.9316C6.10547 10.0547 7.14258 8.41211 8.66016 7.66016C8.60645 7.44336 8.55371 7.22754 8.5 7.00391ZM18.7188 9.1875C18.4238 9.1875 18.1348 9.20703 17.8535 9.24414C17.1328 7.08008 15.0117 5.65234 12.1875 5.65234C11.1445 5.65234 10.1875 6.02734 9.40625 6.66602C8.88086 7.12695 8.4375 7.68359 8.09766 8.3125C7.96289 8.1543 8.00195 8.14844 7.82617 7.99023C7.02539 8.86328 6.52344 10.0078 6.52344 11.3164C6.52344 11.5273 6.54102 11.7344 6.57422 11.9385C6.5957 12.0547 6.62109 12.168 6.64648 12.2812C4.15234 13.4355 2.42773 15.9082 2.42773 18.8105C2.42773 21.1309 3.65234 23.1094 5.48047 24.1621C5.47266 23.7383 5.4668 23.3125 5.4668 22.8848C5.4668 18.3477 9.07227 15.082 13.4316 15.082C13.8418 15.082 14.2461 15.1152 14.6406 15.1777C15.1953 14.0703 16.3457 13.1074 17.6895 12.7285C17.752 12.3379 17.7871 11.9434 17.7871 11.5449C17.7871 10.5137 17.5117 9.55664 17.0273 9.1875C17.6016 9.1875 18.1562 9.1875 18.7188 9.1875ZM13.4316 16.082C9.43555 16.082 6.08203 19.0391 6.08203 22.8848C6.08203 23.2383 6.10352 23.5879 6.14453 23.9316C6.73242 21.8477 8.36523 20.2559 10.3652 19.5547C10.5527 19.0703 10.8281 18.627 11.1719 18.2402C11.3301 18.0469 11.498 17.8633 11.6758 17.6895C11.916 17.4707 12.1699 17.2656 12.4355 17.0762C12.502 17.0273 12.5684 16.9824 12.6348 16.9355C12.877 16.7441 13.1367 16.5742 13.4316 16.5137V16.082ZM17.6895 13.7285C16.8086 14.0371 15.9395 14.4707 15.2285 15.0273C15.0703 14.6543 14.8633 14.3027 14.6152 13.9805C15.8086 13.5625 16.7129 13.4219 17.6895 13.7285Z"/></svg>
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

        {/* Partners Section */}
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">我们的合作伙伴</h2>
          <div className="bg-card p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
              {partners.map((partner) => (
                <div key={partner.name} className="flex justify-center">
                  <span className="text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
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
