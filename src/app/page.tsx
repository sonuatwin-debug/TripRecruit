

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
import { Flag } from '@/components/flag';
import { LineQrCode } from '@/components/line-qr-code';
import { ZaloQrCode } from '@/components/zalo-qr-code';
import { DingtalkQrCode } from '@/components/dingtalk-qr-code';
import { WechatQrCode } from '@/components/wechat-qr-code';
import { QqQrCode } from '@/components/qq-qr-code';
import type { Metadata } from 'next';
import { TelegramIcon, WeChatIcon, WhatsAppIcon, LineIcon, ZaloIcon, DingTalkIcon, QQIcon } from '@/components/contact-icons';

export const metadata: Metadata = {
  title: '加入携程集团｜成就更高价值的自己',
  description: '携程集团招聘官网，专注于全球化人才发展，长期发布各类优质岗位，涵盖市场运营、数据分析、客户服务、技术研发、行政管理等多个方向。我们为求职-	者提供真实可靠的高薪机会，打造国际化职业发展平台，助力人才与企业共赢未来。',
  keywords: '携程集团招聘, 携程招聘官网, 携程人才网, 携程海外工作, 携程集团高薪职位, 携程直招, 携程集团招聘平台, 携程国际人才, 携程工作机会, 携程招聘信-	信息',
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
        icon: '🌍',
        title: "全球化平台",
        description: "加入全球领先的旅游集团，在国际化的舞台上施展才华，接触多元文化，拓展全球视野。"
    },
    {
        icon: '📈',
        title: "广阔发展空间",
        description: "我们提供清晰的职业路径和丰富的晋升机会，无论您是技术专家还是管理人才，都能找到自己的发展方向。"
    },
    {
        icon: '💵',
        title: "有竞争力的薪酬",
        description: "提供行业内富有竞争力的薪资和福利待遇，确保您的付出获得应有的回报。"
    },
    {
        icon: '🤝',
        title: "优秀团队文化",
        description: "与顶尖人才共事，在开放、协作的氛围中共同成长，我们鼓励创新，拥抱变化。"
    },
    {
        icon: '🎓',
        title: "完善的员工培训",
        description: "我们拥有健全的培训体系，从入职引导到专业技能提升，全方位支持您的个人成长和职业发展。"
    },
    {
        icon: '🛡️',
        title: "全方位员工关怀",
        description: "我们关注每一位员工的福祉，提供全面的健康保障、舒适的工作环境和丰富的员工活动。"
    }
];

const jobCategories = [
  {
    value: 'tech',
    label: '技术岗',
    icon: '👨‍💻',
    title: '技术岗',
    description: '我们正在寻找顶尖的技术人才，共同打造业界领先的旅游科技平台。在这里，你将有机会接触到大数据、人工智能、云计算等前沿技术，参与核心产品的研发，用代码改变世界。',
    features: ['运维工程师', '安全工程师', '大数据工程师', '桌面运维', '中高级产品经理'],
    image: 'tech-jobs-showcase'
  },
  {
    value: 'performance',
    label: '业绩岗',
    icon: '📈',
    title: '业绩岗',
    description: '如果你对市场充满热情，渴望通过策略和执行力驱动业务增长，那么业绩岗就是你的舞台。我们提供广阔的平台和资源，让你在市场推广、渠道拓展、销售管理等领域大展拳脚。',
    features: ['渗透劫持', 'SEO组长', 'SEO专员', '推广组长', '推广专员'],
    image: 'performance-jobs-showcase'
  },
  {
    value: 'functional',
    label: '职能岗',
    icon: '🏢',
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
  { name: 'Telegram', icon: TelegramIcon, href: 'https://t.me/XCJT02', isQrCode: false, color: '#27A0E7' },
  { name: 'WeChat', icon: WeChatIcon, href: '#', isQrCode: true, color: '#09B507' },
  { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/+855963406343', isQrCode: false, color: '#25D366' },
  { name: 'Line', icon: LineIcon, href: 'https://line.me/ti/p/ThKJUzyLCg', isQrCode: true, color: '#00c300' },
  { name: 'Zalo', icon: ZaloIcon, href: '#', isQrCode: true, color: '#0068ff' },
  { _id: '154', name: '钉钉', icon: DingTalkIcon, href: '#', isQrCode: true, color: '#387cfa' },
  { _id: '155', name: 'QQ', icon: QQIcon, href: '#', isQrCode: true, color: '#000000' },
];

export default async function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] text-white -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24">
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
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container h-full flex flex-col justify-center text-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">与我们一起寻找您的下一段旅程</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            在携程集团探索激动人心的职业机会，成为塑造旅游未来的全球团队的一员。
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-20 space-y-24">
        {/* Quick Contact Section */}
        <section>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {contactMethods.map((method) => {
              const ContactIcon = method.icon;
              const contactIcon = (
                <div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors animate-pulse-glow"
                >
                  <ContactIcon style={{ color: method.color }} className="w-8 h-8" />
                </div>
              );

              const contactLabel = (
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{method.name}</span>
              );

              if (method.name === 'Line' && method.isQrCode) {
                return (
                  <LineQrCode key={method.name}>
                    <div className="flex flex-col items-center space-y-2 group w-20 cursor-pointer">
                      {contactIcon}
                      {contactLabel}
                    </div>
                  </LineQrCode>
                );
              }

              if (method.name === 'Zalo' && method.isQrCode) {
                return (
                  <ZaloQrCode key={method.name}>
                    <div className="flex flex-col items-center space-y-2 group w-20 cursor-pointer">
                      {contactIcon}
                      {contactLabel}
                    </div>
                  </ZaloQrCode>
                );
              }
              
              if (method.name === '钉钉' && method.isQrCode) {
                return (
                  <DingtalkQrCode key={method.name}>
                    <div className="flex flex-col items-center space-y-2 group w-20 cursor-pointer">
                      {contactIcon}
                      {contactLabel}
                    </div>
                  </DingtalkQrCode>
                );
              }

              if (method.name === 'WeChat' && method.isQrCode) {
                return (
                  <WechatQrCode key={method.name}>
                    <div className="flex flex-col items-center space-y-2 group w-20 cursor-pointer">
                      {contactIcon}
                      {contactLabel}
                    </div>
                  </WechatQrCode>
                );
              }

              if (method.name === 'QQ' && method.isQrCode) {
                return (
                  <QqQrCode key={method.name}>
                    <div className="flex flex-col items-center space-y-2 group w-20 cursor-pointer">
                      {contactIcon}
                      {contactLabel}
                    </div>
                  </QqQrCode>
                );
              }

              return (
                <a key={method.name} href={method.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group w-20">
                  {contactIcon}
                  {contactLabel}
                </a>
              );
            })}
          </div>
        </section>

        {/* Popular Regions Section */}
        <section id="popular-regions" className="scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门招聘地点</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {popularRegions.map((region) => (
              <Card key={region.name} className="overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-glow animate-card-pulse-glow">
                <CardContent className="p-2">
                  <div className="flex flex-col items-center text-center">
                    <Flag country={region.name} className="h-8 w-14 mb-2" />
                    <h3 className="font-semibold text-base text-foreground">
                      <span>{region.name}</span>
                    </h3>
                  </div>
                  <div className="px-2 pb-1 mt-1">
                    <Button asChild variant="outline" size="sm" className="w-full bg-card hover:bg-muted text-card-foreground animate-pulse-glow text-xs h-7">
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
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card to-muted/30 shadow-lg border border-transparent hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl animate-card-pulse-glow"
            >
              <CardContent className="p-6 flex items-start">
                <div className="text-3xl mr-5 flex-shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-foreground/90 text-sm">{benefit.description}</p>
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
            <div className="flex justify-center">
              <TabsList className="h-auto flex-wrap justify-center bg-muted mb-10 inline-flex">
                {jobCategories.map(cat => (
                  <TabsTrigger key={cat.value} value={cat.value} className="text-base py-2.5">
                    <span className="h-5 w-5 mr-2 flex items-center justify-center">{cat.icon}</span>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
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
                            <div className="text-4xl">
                                {advantage.icon}
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
