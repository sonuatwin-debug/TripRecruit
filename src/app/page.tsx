

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, Send, TrendingUp, Handshake, ShieldCheck, Users, Globe, Award, Code, TrendingUp as TrendingUpIcon, Briefcase, Gift, Utensils, Plane, Home as HomeIcon, GraduationCap, DollarSign, PiggyBank, CalendarDays, Laptop } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { summarizeEmployeeStories } from '@/ai/flows/ai-summarize-employee-stories';
import { MOCK_STORIES, MOCK_NEWS } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Flag = ({ country, className }: { country: string, className?: string }) => {
  const flags: { [key: string]: React.ReactNode } = {
    菲律宾: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#0038a8" d="M0 0h1200v300H0z"/><path fill="#ce1126" d="M0 300h1200v300H0z"/><path fill="#fff" d="m0 0 520 300L0 600z"/><path fill="#fcd116" d="m188 300-40-122-108 84 12-129-92 100 40-122-72 112 61-118-49 121 72-112-40 122 83-108-12 129 100-92-61 118 112-72-84 108 129-12z"/><circle cx="160" cy="300" r="70" fill="#fcd116"/></svg>
    ),
    迪拜: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#00732f" d="M0 0h1200v200H0z"/><path fill="#fff" d="M0 200h1200v200H0z"/><path fill="#000" d="M0 400h1200v200H0z"/><path fill="red" d="M0 0h300v600H0z"/></svg>
    ),
    泰国: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#A51931" d="M0 0h1200v600H0z"/><path fill="#fff" d="M0 100h1200v400H0z"/><path fill="#2D2A4A" d="M0 200h1200v200H0z"/></svg>
    ),
    柬埔寨: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#032ea1" d="M0 0h900v600H0z"/><path fill="#e00025" d="M0 150h900v300H0z"/><path fill="#fff" d="m450 216-90 60v48h180v-48zm-150-12h300v12H300zm-30 132h360v12H270z" stroke="#000" strokeWidth="3"/><path fill="#fff" d="m390 276 30 24v12h-30zm-90 0h30v24h-30zm45 30h30v12h-30zm-30-48h90v12h-90z"/></svg>
    ),
    日本: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#fff" d="M0 0h900v600H0z"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
    ),
    马来西亚: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#fff" d="M0 0h1200v600H0z"/><path stroke="#c00" strokeWidth="43" d="M0 64.5h1200M0 150.5h1200M0 236.5h1200M0 322.5h1200M0 408.5h1200M0 494.5h1200M0 580.5h1200"/><path fill="#003566" d="M0 0h600v387H0z"/><path fill="#fecb00" d="M420 193.5a133 133 0 1 0-262-52 159 159 0 1 1 200 200 133 133 0 0 0 62-148z"/><path fill="#fecb00" d="m287 40 10 65 59-32-32 59 65 10-54 40 40 54-65-10-10 65-40-54-54 40 10-65-59 32 32-59-65-10 54-40-40-54 65 10z"/></svg>
    ),
    香港: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}><path fill="#de2910" d="M0 0h900v600H0z"/><path fill="#fff" d="m450 300-112-35 83 91-91 83 35-112-70 100 100-70-35 112 91-83-83-91 112 35-100 70z"/><circle cx="450" cy="300" r="60" fill="#de2910"/><path fill="#fff" d="m450 300-37-12 28 30-30 28 12-37-23 33 33-23-12 37 30-28-28-30 37 12-33 23z"/></svg>
    ),
    斯里兰卡: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}><path fill="#FFB81C" d="M0 0h1200v600H0z"/><path fill="#00534E" d="M0 0h150v600H0z"/><path fill="#F26422" d="M150 0h150v600H150z"/><g fill="#8D1A38"><path d="M350 50h800v500H350z"/><path d="M380 80h740v440H380z" fill="#FFB81C"/><path d="M1030 500c25 0 25-25 25-25V80c0-20-20-20-20-20h-5c-20 0-20 20-20 20v400s0 25 25 25zM430 100c-25 0-25 25-25 25v370c0 20 20 20 20 20h5c20 0 20-20 20-20V125s0-25-25-25z"/><path d="M905 300s-7-2-12 21c-5 23-11 41-11 41s-10-10-38-10-38 10-38 10l-11-41c-5-23-12-21-12-21s7 2 12-21c5-23 11-41 11-41s10 10 38 10 38-10 38-10l11 41c5 23 12 21 12 21z"/><path d="M750 320a100 100 0 0 0-20-60l-135 75a100 100 0 0 0-35-15 100 100 0 0 0-10-30L450 300l90 10a100 100 0 0 0-10 100l-65 20 15 65a100 100 0 0 0 100 0l-5-100z"/></g></svg>
    ),
  };
  const flag = flags[country];
  if (!flag) return null;
  return flag;
};


const popularRegions = [
    { name: '菲律宾', color: 'bg-philippines' },
    { name: '迪拜', color: 'bg-dubai' },
    { name: '泰国', color: 'bg-thailand' },
    { name: '柬埔寨', color: 'bg-cambodia' },
    { name: '日本', color: 'bg-japan' },
    { name: '马来西亚', color: 'bg-malaysia' },
    { name: '香港', color: 'bg-hongkong' },
    { name: '斯里兰卡', color: 'bg-srilanka' },
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
    features: ['运维工程师', '安全工程师', '大数据工程师', '桌面运维', '中高级产品经理'],
    image: 'tech-jobs-showcase'
  },
  {
    value: 'performance',
    label: '业绩岗',
    icon: TrendingUpIcon,
    title: '业绩岗',
    description: '如果你对市场充满热情，渴望通过策略和执行力驱动业务增长，那么业绩岗就是你的舞台。我们提供广阔的平台和资源，让你在市场推广、渠道拓展、销售管理等领域大展拳脚。',
    features: ['渗透劫持', 'SEO组长', 'SEO专员', '推广组长', '推广专员'],
    image: 'performance-jobs-showcase'
  },
  {
    value: 'functional',
    label: '职能岗',
    icon: Briefcase,
    title: '职能岗',
    description: '作为公司的坚实后盾，职能部门在人力资源、财务、法务、行政等领域为业务发展提供全方位支持。我们欢迎专业、高效、富有责任感的你加入，共同保障公司的稳健运营。',
    features: ['客服维护', '数据分析师', '运营专员', '平台体验组长', '技术客服'],
    image: 'functional-jobs-showcase'
  }
];

const benefitsData = [
  {
    icon: '💰',
    title: '全勤奖',
    description: '500-1000 RMB，餐补 10-15U/天',
  },
  {
    icon: '📈',
    title: '绩效奖金',
    description: '转正后每月享有绩效',
  },
  {
    icon: '🎁',
    title: '年终奖',
    description: '13-17 薪 + 春节红包',
  },
  {
    icon: '🔄',
    title: '调薪机制',
    description: '转正后每半年调薪一次',
  },
  {
    icon: '🏅',
    title: '忠诚奖',
    description: '入职满2年20000 RMB，5年50000 RMB',
  },
  {
    icon: '🏠',
    title: '住宿',
    description: '提供2-3人间高级公寓，家电WIFI齐全，不住宿含可享房屋补助',
  },
  {
    icon: '🍲',
    title: '餐饮',
    description: '公司自聘厨师，提供川湘粤菜四餐，水果饮品无限畅饮',
  },
  {
    icon: '🎂',
    title: '节日礼金',
    description: '生日礼金，端午、中秋、元旦、春节假日三倍工资',
  },
  {
    icon: '🤝',
    title: '团建活动',
    description: '每月各部门组织团建活动',
  },
  {
    icon: '✈️',
    title: '假期补贴',
    description: '满1年享15天带薪年假及机票报销，半年不休假补贴10500 RMB',
  },
  {
    icon: '🎓',
    title: '培训体系',
    description: '完善的培训体系（新人岗前培训、岗中晋升培训）',
  },
  {
    icon: '🛡️',
    title: '工作环境',
    description: '集团为所有员工提供安全、可靠的工作环境和设备',
  },
];


export const contactMethods = [
  { 
    name: 'Telegram', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
    href: 'https://t.me/',
    color: '#0088cc'
  },
  { 
    name: 'WeChat', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.4 3.1c-4.3 0-7.8 2.9-7.8 6.5 0 2.4 1.5 4.5 3.9 5.6-1.3 1.9-3.2 3.2-5.4 3.9v.1c.1-.1.7-1.1 1.7-2.1.8.2 1.6.3 2.5.3 4.3 0 7.8-2.9 7.8-6.5s-3.5-6.6-7.7-6.6zM7.7 11.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm4.1 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm8.3-2.9c0 2.9-2.6 5.2-5.8 5.2.3 0 .7-.1 1-.2 2.2-1 3.8-2.9 4.8-5zm-2.9 1.7c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z"/></svg>, 
    href: 'https://www.wechat.com',
    color: '#07C160'
  },
  { 
    name: 'WhatsApp', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.94A9.96 9.96 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h.01c5.52 0 10-4.48 10-10a9.94 9.94 0 0 0-2.95-7.06zM12 20.02c-1.67 0-3.24-.57-4.48-1.54l-4.54 1.22 1.24-4.42A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8.02-8 8.02z"/><path d="m15.33 14.15-1.42-.71c-.1-.05-.28-.05-.48.15l-.56.67c-.24.29-.53.37-.83.27-.6-.2-1.38-.64-2.14-1.4-.84-.84-1.39-1.8-1.5-2.07-.1-.28.02-.53.25-.7l.45-.51c.2-.23.23-.52.12-.76l-.71-1.7c-.12-.28-.35-.45-.63-.45h-.5c-.28 0-.55.12-.75.31-.2.19-.78.74-.78 1.85s.8 2.14.94 2.3s1.56 2.41 3.8 3.39c.6.25 1.1.4 1.5.5.5.11.9.1 1.2-.05.38-.15 1.18-.93 1.34-1.25s.16-.58.11-.63l-.33-.11c-.13-.05-.28-.02-.4.07z"/></svg>, 
    href: 'https://www.whatsapp.com',
    color: '#25D366'
  },
  { 
    name: 'Messenger', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="m9.22 10.22-3.88 1.94 3.88 1.94 1.94 3.88 1.94-3.88 3.88-1.94-3.88-1.94-1.94-3.88z"/></svg>, 
    href: 'https://www.messenger.com',
    color: '#0099FF'
  },
  { 
    name: 'Line', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3H3.5C3.2 3 3 3.2 3 3.5v12c0 .3.2.5.5.5h3.8l.5.8c.4.6 1.1 1.2 1.7 1.2s1.3-.6 1.7-1.2l.5-.8h5.3c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5zM8.5 13c-.8 0-1.5-.7-1.5-1.5S7.7 10 8.5 10s1.5.7 1.5 1.5S9.3 13 8.5 13zm3.5 0c-.8 0-1.5-.7-1.5-1.5S11.2 10 12 10s1.5.7 1.5 1.5S12.8 13 12 13zm3.5 0c-.8 0-1.5-.7-1.5-1.5S14.7 10 15.5 10s1.5.7 1.5 1.5S16.3 13 15.5 13z"/></svg>, 
    href: 'https://line.me',
    color: '#00C300'
  },
  { 
    name: 'Zalo', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.5v11M9 17.5h6"/><path d="M7 22h10c.8 0 1.5-.7 1.5-1.5v-17C18.5 2.7 17.8 2 17 2H7c-.8 0-1.5.7-1.5 1.5v17C5.5 21.3 6.2 22 7 22z"/></svg>,
    href: 'https://zalo.me',
    color: '#0068FF'
  },
  { 
    name: '钉钉', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.035 7.643l-3.21-3.21a.9.9 0 0 0-1.272 0L8.342 7.643a.9.9 0 0 0 .636 1.536h1.714v5.714a.9.9 0 1 0 1.8 0V9.179h1.714a.9.9 0 0 0 .636-1.536zM3 13.5c0-4.965 4.035-9 9-9s9 4.035 9 9-4.035 9-9 9-9-4.035-9-9zm1.8 0c0 3.972 3.228 7.2 7.2 7.2s7.2-3.228 7.2-7.2-3.228-7.2-7.2-7.2-7.2 3.228-7.2 7.2z"/></svg>, 
    href: 'https://www.dingtalk.com',
    color: '#1296db'
  },
  { 
    name: '丝瓜', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.8 3H5.2A2.2 2.2 0 0 0 3 5.2v13.6A2.2 2.2 0 0 0 5.2 21h13.6a2.2 2.2 0 0 0 2.2-2.2V5.2A2.2 2.2 0 0 0 18.8 3zM8.98 16.5H6.5V9h2.48v7.5zm-1.24-8.48a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88zm8.76 8.48h-2.48v-3.6c0-.86-.02-1.96-.86-1.96s-1 .93-1 1.9v3.66h-2.48V9h2.38v1.1h.03c.34-.64 1.16-1.32 2.35-1.32 2.51 0 2.98 1.65 2.98 3.8v4.4z"/></svg>, 
    href: 'https://www.siguazhibo.com',
    color: '#0077B5'
  },
  { 
    name: 'QQ', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.072 2.224c-5.46 0-9.876 3.96-9.876 8.848 0 2.45.966 4.716 2.616 6.444-1.164 2.856-4.26 3.036-4.26 3.036s.48.084 1.764-.78c.852.312 1.764.492 2.7.492 5.46 0 9.876-3.96 9.876-8.848 0-4.888-4.416-8.848-9.876-8.848zM7.818 13.38a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm4.32-4.32c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74zm3.036 4.32a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2z"/></svg>,
    href: 'https://im.qq.com',
    color: '#000000'
  },
];

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24">
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

      <div className="container py-12 md:py-20 space-y-24">
        {/* Quick Contact Section */}
        <section>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {contactMethods.map((method) => (
              <a key={method.name} href={method.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group w-20">
                <div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors animate-pulse-glow"
                  style={{ color: method.color }}
                >
                  <div className="w-8 h-8">{method.icon}</div>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{method.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Popular Regions Section */}
        <section id="popular-regions" className="scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门招聘地点</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularRegions.map((region) => (
              <Card key={region.name} className="overflow-hidden group hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="p-6 pb-2 text-center">
                    <h3 className="font-semibold text-xl text-foreground flex items-center justify-center">
                      <Flag country={region.name} className="h-6 w-8 mr-3" />
                      <span>{region.name}</span>
                    </h3>
                  </div>
                  <div className="px-6 pb-6">
                    <Button asChild variant="outline" className="w-full bg-card hover:bg-muted text-card-foreground animate-pulse-glow">
                      <Link href={`/jobs?location=${region.name}`}>查看岗位</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">福利待遇</h2>
            <p className="text-lg text-muted-foreground mt-2">我们提供全面的福利，关爱每一位员工的成长与生活。</p>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <Card key={index} className="bg-muted/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start">
                  <div className="text-2xl mr-4 flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
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
      </div>
    </>
  );
}
