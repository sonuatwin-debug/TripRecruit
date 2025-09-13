

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, Send, TrendingUp, Handshake, ShieldCheck, Users, Globe, Award, Code, TrendingUp as TrendingUpIcon, Briefcase, Gift, Utensils, Plane, Home as HomeIcon, GraduationCap, DollarSign } from 'lucide-react';
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

const benefits = [
    { icon: TrendingUpIcon, text: "所有岗位转正后每月享有绩效，部门负责人和自评绩效等级SABC" },
    { icon: DollarSign, text: "全勤奖500-1000RMB，餐补10-15U/天" },
    { icon: TrendingUp, text: "根据工作表现，转正后每半年调薪一次，1-6000RMB (除销售市场岗位)" },
    { icon: Gift, text: "生日礼金，端午、中秋、元旦、春节假日三倍工资" },
    { icon: HomeIcon, text: "提供2-3人间高级公寓，家电WIFI齐全，不住宿舍可享房屋补助(300-800U)" },
    { icon: Utensils, text: "公司自聘厨师，提供川湘粤菜四餐，水果饮品无限畅饮" },
    { icon: Plane, text: "满1年享15天带薪年假及机票报销，半年不休假补贴10500RMB" },
    { icon: Users, text: "每月各部门组织团建活动" },
    { icon: Award, text: "年终13-17薪 + 春节红包" },
    { icon: Handshake, text: "入职满2年忠诚奖金20000RMB，5年忠诚奖金50000RMB" },
    { icon: GraduationCap, text: "完善的培训体系(新人岗前培训，岗中晋升培训)" }
];

const contactMethods = [
  { 
    name: 'Telegram', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13 2 9l-1.5 9 9.5-4 9-6.5L22 2zM2 9l9 4"/></svg>, 
    href: 'https://t.me/' 
  },
  { 
    name: 'WeChat', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.86 0 10.842c0 4.234 2.823 7.84 6.75 9.473V24l3.14-1.764a13.32 13.32 0 0 0 2.11.206c6.627 0 12-4.86 12-10.842S18.627 0 12 0zM8.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>, 
    href: 'https://www.wechat.com' 
  },
  { 
    name: 'WhatsApp', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.052 24l1.688-6.164a11.565 11.565 0 0 1-1.688-5.82C.052 5.41 5.462 0 12.016 0c6.554 0 11.964 5.41 11.964 12.016 0 6.606-5.41 11.964-11.964 11.964a11.85 11.85 0 0 1-5.94-1.616L.052 24zm6.413-3.48a9.888 9.888 0 0 0 5.55 1.54c5.448 0 9.888-4.44 9.888-9.888 0-5.448-4.44-9.888-9.888-9.888-5.448 0-9.888 4.44-9.888 9.888a9.888 9.888 0 0 0 1.54 5.55l-1.024 3.744 3.82-1.024zm4.187-2.688c-.288-.144-.432-.216-1.7-.84-.288-.144-.432-.216-.6-.216-.144 0-.312.024-.48.264-.144.24-.552.696-.672.84-.12.144-.24.168-.432.072-.216-.096-.864-.312-1.632-.984-.6-.504-.984-1.128-1.104-1.32-.12-.192-.012-.312.084-.408.072-.072.168-.192.24-.264.072-.072.12-.144.168-.24.048-.096.024-.192-.024-.264-.048-.072-.552-1.32-.768-1.8-.216-.48-.432-.408-.576-.408-.144 0-.312-.024-.48-.024s-.432.072-.648.336c-.216.264-.84.816-.84 1.968s.864 2.28 1 2.448c.12.144 1.68 2.592 4.08 3.576.576.24.984.36 1.32.456.552.144 1.056.12 1.44.072.432-.048 1.32-.528 1.512-.984.192-.48.192-.888.144-.984-.048-.12-.168-.192-.336-.264z"/></svg>, 
    href: 'https://www.whatsapp.com' 
  },
  { 
    name: 'Messenger', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/><path d="M8.216 17.472l2.883-2.882 2.146 2.146L17.784 8.2l-9.568 5.485z"/></svg>, 
    href: 'https://www.messenger.com' 
  },
  { 
    name: 'Line', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.333 4H5.667C4.746 4 4 4.746 4 5.667v10.666C4 17.254 4.746 18 5.667 18h5.45l.933 2.8s.267.733 1.067.733c.8 0 1.067-.733 1.067-.733L15.117 18H18.333c.921 0 1.667-.746 1.667-1.667V5.667C20 4.746 19.254 4 18.333 4zM7.833 11.5a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666zm4.167 0a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666zm4.167 0a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666z"/></svg>, 
    href: 'https://line.me' 
  },
  { 
    name: 'Zalo', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.5v11M9 17.5h6"/><path d="M7 22h10c.8 0 1.5-.7 1.5-1.5v-17C18.5 2.7 17.8 2 17 2H7c-.8 0-1.5.7-1.5 1.5v17C5.5 21.3 6.2 22 7 22z"/></svg>, 
    href: 'https://zalo.me' 
  },
  { 
    name: '钉钉', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.035 7.643l-3.21-3.21a.9.9 0 0 0-1.272 0L8.342 7.643a.9.9 0 0 0 .636 1.536h1.714v5.714a.9.9 0 1 0 1.8 0V9.179h1.714a.9.9 0 0 0 .636-1.536zM3 13.5c0-4.965 4.035-9 9-9s9 4.035 9 9-4.035 9-9 9-9-4.035-9-9zm1.8 0c0 3.972 3.228 7.2 7.2 7.2s7.2-3.228 7.2-7.2-3.228-7.2-7.2-7.2-7.2 3.228-7.2 7.2z"/></svg>, 
    href: 'https://www.dingtalk.com' 
  },
  { 
    name: '丝瓜', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.8 3H5.2A2.2 2.2 0 0 0 3 5.2v13.6A2.2 2.2 0 0 0 5.2 21h13.6a2.2 2.2 0 0 0 2.2-2.2V5.2A2.2 2.2 0 0 0 18.8 3zM8.98 16.5H6.5V9h2.48v7.5zm-1.24-8.48a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88zm8.76 8.48h-2.48v-3.6c0-.86-.02-1.96-.86-1.96s-1 .93-1 1.9v3.66h-2.48V9h2.38v1.1h.03c.34-.64 1.16-1.32 2.35-1.32 2.51 0 2.98 1.65 2.98 3.8v4.4z"/></svg>, 
    href: 'https://www.siguazhibo.com' 
  },
  { 
    name: 'QQ', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.072 2.224c-5.46 0-9.876 3.96-9.876 8.848 0 2.45.966 4.716 2.616 6.444-1.164 2.856-4.26 3.036-4.26 3.036s.48.084 1.764-.78c.852.312 1.764.492 2.7.492 5.46 0 9.876-3.96 9.876-8.848 0-4.888-4.416-8.848-9.876-8.848zM7.818 13.38a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm4.32-4.32c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74zm3.036 4.32a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2z"/></svg>, 
    href: 'https://im.qq.com' 
  },
];

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] text-white -mx-4 sm:-mx-6 md:-mx-16 lg:-mx-24 xl:-mx-32">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.072 2.224c-5.46 0-9.876 3.96-9.876 8.848 0 2.45.966 4.716 2.616 6.444-1.164 2.856-4.26 3.036-4.26 3.036s.48.084 1.764-.78c.852.312 1.764.492 2.7.492 5.46 0 9.876-3.96 9.876-8.848 0-4.888-4.416-8.848-9.876-8.848zM7.818 13.38a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm4.32-4.32c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74zm3.036 4.32a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2z"/>
              </svg>
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

      <div className="py-12 md:py-20 space-y-24">
        {/* Quick Contact Section */}
        <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-8">快捷联系方式</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                {contactMethods.map((method) => (
                    <a key={method.name} href={method.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center space-y-2 text-center group">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
              <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-y-8 justify-items-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 w-full max-w-2xl">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-foreground leading-relaxed">{benefit.text}</p>
                </div>
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
      </div>
    </>
  );
}
