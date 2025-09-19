

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, Send, TrendingUp, Handshake, ShieldCheck, Users, Globe, Award, Code, TrendingUp as TrendingUpIcon, Briefcase, Gift, Utensils, Plane, Home as HomeIcon, GraduationCap, DollarSign, PiggyBank, CalendarDays, Laptop } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/navigation';
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
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: '加入携程集团｜成就更高价值的自己',
  description: '携程集团招聘官网，专注于全球化人才发展，长期发布各类优质岗位，涵盖市场运营、数据分析、客户服务、技术研发、行政管理等多个方向。我们为求职-	者提供真实可靠的高薪机会，打造国际化职业发展平台，助力人才与企业共赢未来。',
  keywords: '携程集团招聘, 携程招聘官网, 携程人才网, 携程海外工作, 携程集团高薪职位, 携程直招, 携程集团招聘平台, 携程国际人才, 携程工作机会, 携程招聘信-	息',
};

const popularRegions = [
    { name: '菲律宾', key: 'regionPhilippines' },
    { name: '迪拜', key: 'regionDubai' },
    { name: '泰国', key: 'regionThailand' },
    { name: '柬埔寨', key: 'regionCambodia' },
    { name: '日本', key: 'regionJapan' },
    { name: '马来西亚', key: 'regionMalaysia' },
    { name: '香港', key: 'regionHongkong' },
    { name: '斯里兰卡', key: 'regionSrilanka' },
];

export const contactMethods = [
  { 
    name: 'Telegram', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0z" fill="#27A0E7"/><path d="M5.44 12.032l11.232-4.384c.72-.288.432.072.144.648l-2.52 7.92c-.216.792-.72.936-1.44.576l-3.24-2.376-1.584 1.512c-.144.144-.288.288-.576.288l.216-3.24 6.048-5.616c.288-.288-.072-.432-.432-.144l-7.56 4.824-3.168-.936c-.72-.216-.72-.792.144-1.152z" fill="#fff"/></svg>,
    href: 'https://t.me/XCJT02',
    isQrCode: false,
    color: '#0088cc'
  },
  { 
    name: 'WeChat', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none"><path d="M49.998 8.995C27.355 8.995 8.995 24.352 8.995 42.868c0 10.272 5.616 19.347 14.524 25.07l-2.532 9.477c-.503 1.88.805 3.69 2.684 4.193a3.513 3.513 0 0 0 1.058.158c1.24 0 2.422-.63 3.104-1.725l7.98-12.784a32.96 32.96 0 0 0 8.185 1.616c22.643 0 41.003-15.357 41.003-33.868C91.002 24.353 72.64 8.995 49.998 8.995z" fill="#09B507"/><path d="M68.14 53.472c-15.937 0-28.84-10.82-28.84-24.167s12.903-24.167 28.84-24.167c15.936 0 28.84 10.82 28.84 24.167a24.03 24.03 0 0 1-5.01 14.73l-.008.013c.273.79.42 1.62.42 2.473 0 3.32-1.637 6.273-4.14 8.23-1.07.84-2.3 1.51-3.63 2a11.53 11.53 0 0 1-3.6.8c-.52 0-1.03-.04-1.54-.12-.3-.04-.58-.1-.87-.15a.76.76 0 0 1-.32-.1c-.1-.04-.2-.06-.3-.1l-1.3-.57c-.16-.07-.3-.14-.46-.22l-.12-.05c-4.9-2.32-8.2-7.06-8.2-12.51 0-1.5.25-2.94.72-4.3l.06-.18c.03-.08.05-.16.08-.24l.02-.07c1.78-5.1 5.3-9.42 9.94-12.28a2.53 2.53 0 0 0 .52-3.5 2.52 2.52 0 0 0-3.5-.53c-5.4 3.24-9.6 8.3-11.75 14.37-1.12 3.1-1.74 6.4-1.74 9.82 0 6.8 3.1 12.8 8.1 16.7l.12.1c.14.1.28.18.43.27l1.3.58c.2.08.4.16.6.23.57.26 1.15.5 1.74.68.7.23 1.4.4 2.1.53.2.04.4.06.58.08.15.02.3.03.45.03.62 0 1.23-.1 1.8-.28 1.4-.48 2.68-1.17 3.75-2.04 3.1-2.43 5.03-6.1 5.03-10.15 0-1.2-.2-2.37-.55-3.5l-.04-.12a2.53 2.53 0 0 0-3.2-1.4 2.5 2.5 0 0 0-1.4 3.2c.2.65.3 1.32.3 2.02 0 2.5-1.07 4.75-2.8 6.36a9.5 9.5 0 0 1-6.68 2.5c-4.93 0-8.94-3.6-8.94-8.03 0-1.8.68-3.48 1.85-4.82a6.45 6.45 0 0 1 4.7-2.03c4.2 0 7.6 3.1 7.6 6.9s-3.4 6.9-7.6 6.9a2.52 2.52 0 1 0 0 5.04c6.94 0 12.6-5.02 12.6-11.14 0-5-3.5-9.3-8.4-10.7a2.53 2.53 0 0 0-1.2-4.9 2.52 2.52 0 0 0-2.8 2.2c-.1.3-.12.6-.12.9 0 2.2 1.9 4 4.3 4s4.3-1.8 4.3-4-1.9-4-4.3-4c-4.9 0-8.8 3.6-8.8 8s3.9 8 8.8 8a7.53 7.53 0 0 0 7.5-7.5c0-3.5-2.6-6.4-6.2-7.3a7.5 7.5 0 1 0-7.3 9.4 2.52 2.52 0 0 0 3.1-1.8 2.53 2.53 0 0 0-1.8-3.1 2.5 2.5 0 0 0-3.1 1.8 12.5 12.5 0 0 1-5.2-10.4c0-7 6.1-12.7 13.6-12.7 7.5 0 13.6 5.7 13.6 12.7s-6.1 12.7-13.6 12.7z" fill="#FFF"/><circle cx="34.95" cy="42.868" r="4.306" fill="#FFF"/><circle cx="53.07" cy="42.868" r="4.306" fill="#FFF"/></g></svg>, 
    href: '#',
    isQrCode: true,
    color: '#07C160'
  },
  { 
    name: 'WhatsApp', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366"><path d="M19.05 4.94A9.96 9.96 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h.01c5.52 0 10-4.48 10-10a9.94 9.94 0 0 0-2.95-7.06zM12 20.02c-1.67 0-3.24-.57-4.48-1.54l-4.54 1.22 1.24-4.42A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8.02-8 8.02z"/><path d="m15.33 14.15-1.42-.71c-.1-.05-.28-.05-.48.15l-.56.67c-.24.29-.53.37-.83.27-.6-.2-1.38-.64-2.14-1.4-.84-.84-1.39-1.8-1.5-2.07-.1-.28.02-.53.25-.7l.45-.51c.2-.23.23-.52.12-.76l-.71-1.7c-.12-.28-.35-.45-.63-.45h-.5c-.28 0-.55.12-.75.31-.2.19-.78.74-.78 1.85s.8 2.14.94 2.3s1.56 2.41 3.8 3.39c.6.25 1.1.4 1.5.5.5.11.9.1 1.2-.05.38-.15 1.18-.93 1.34-1.25s.16-.58.11-.63l-.33-.11c-.13-.05-.28-.02-.4.07z" fill="white"/></svg>, 
    href: 'https://wa.me/+855963406343',
    isQrCode: false,
    color: '#25D366'
  },
  { 
    name: 'Line', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M83.33 16.67H16.67C9.25 16.67 3.33 22.58 3.33 30v40c0 7.42 5.92 13.33 13.34 13.33h5.21l1.56 2.34c1.25 1.88 3.44 3.75 5.31 3.75s4.06-1.88 5.31-3.75l1.56-2.34h16.67c7.42 0 13.33-5.92 13.33-13.33V30c0-7.42-5.92-13.33-13.33-13.33zm-56.25 40c-2.3 0-4.17-1.87-4.17-4.17s1.87-4.17 4.17-4.17 4.17 1.87 4.17 4.17-1.87 4.17-4.17 4.17zm14.58 0c-2.3 0-4.17-1.87-4.17-4.17s1.87-4.17 4.17-4.17 4.17 1.87 4.17 4.17-1.87 4.17-4.17 4.17zm14.59 0c-2.3 0-4.17-1.87-4.17-4.17s1.87-4.17 4.17-4.17 4.17 1.87 4.17 4.17-1.87 4.17-4.17 4.17z" fill="#00c300"/></svg>, 
    href: 'https://line.me/ti/p/ThKJUzyLCg',
    isQrCode: false,
    color: '#00C300'
  },
  { 
    name: 'Zalo', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M100 50c0 27.6-22.4 50-50 50S0 77.6 0 50 22.4 0 50 0s50 22.4 50 50" fill="#0068ff"/><path d="M60.6 52.8H48.1v-9.1h12.5v-9.6H39.4c-4.4 0-7.9 3.5-7.9 7.9v21.3c0 .3.3.6.6.6h28.5c.3 0 .6-.3.6-.6V52.8h-1zM48.1 59.8h-7.1v-5.4h7.1v5.4z" fill="#fff"/></svg>,
    href: '#',
    isQrCode: true,
    color: '#0068FF'
  },
  { _id: '154', name: '钉钉', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.035 7.643l-3.21-3.21a.9.9 0 0 0-1.272 0L8.342 7.643a.9.9 0 0 0 .636 1.536h1.714v5.714a.9.9 0 1 0 1.8 0V9.179h1.714a.9.9 0 0 0 .636-1.536zM3 13.5c0-4.965 4.035-9 9-9s9 4.035 9 9-4.035 9-9 9-9-4.035-9-9zm1.8 0c0 3.972 3.228 7.2 7.2 7.2s7.2-3.228 7.2-7.2-3.228-7.2-7.2-7.2-7.2 3.228-7.2 7.2z" fill="#387cfa"/></svg>, href: '#', isQrCode: true, color: '#387cfa' },
  { _id: '155', name: 'QQ', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.072 2.224c-5.46 0-9.876 3.96-9.876 8.848 0 2.45.966 4.716 2.616 6.444-1.164 2.856-4.26 3.036-4.26 3.036s.48.084 1.764-.78c.852.312 1.764.492 2.7.492 5.46 0 9.876-3.96 9.876-8.848 0-4.888-4.416-8.848-9.876-8.848zM7.818 13.38a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm4.32-4.32c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74zm3.036 4.32a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2z" fill="#000000"/></svg>, href: '#', isQrCode: true, color: '#000000' },
];

export default function HomePage() {
  const t = useTranslations('HomePage');
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');

  const advantages = [
      {
          icon: '🌍',
          title: t('advantageGlobal'),
          description: t('advantageGlobalDesc')
      },
      {
          icon: '📈',
          title: t('advantageGrowth'),
          description: t('advantageGrowthDesc')
      },
      {
          icon: '💵',
          title: t('advantageSalary'),
          description: t('advantageSalaryDesc')
      },
      {
          icon: '🤝',
          title: t('advantageCulture'),
          description: t('advantageCultureDesc')
      },
      {
          icon: '🎓',
          title: t('advantageTraining'),
          description: t('advantageTrainingDesc')
      },
      {
          icon: '🛡️',
          title: t('advantageCare'),
          description: t('advantageCareDesc')
      }
  ];

  const jobCategories = [
    {
      value: 'tech',
      label: t('techJobs'),
      icon: '👨‍💻',
      title: t('techJobs'),
      description: t('techJobsDesc'),
      features: [t('techJobFeature1'), t('techJobFeature2'), t('techJobFeature3'), t('techJobFeature4'), t('techJobFeature5')],
      image: 'tech-jobs-showcase'
    },
    {
      value: 'performance',
      label: t('performanceJobs'),
      icon: '📈',
      title: t('performanceJobs'),
      description: t('performanceJobsDesc'),
      features: [t('performanceJobFeature1'), t('performanceJobFeature2'), t('performanceJobFeature3'), t('performanceJobFeature4'), t('performanceJobFeature5')],
      image: 'performance-jobs-showcase'
    },
    {
      value: 'functional',
      label: t('functionalJobs'),
      icon: '🏢',
      title: t('functionalJobs'),
      description: t('functionalJobsDesc'),
      features: [t('functionalJobFeature1'), t('functionalJobFeature2'), t('functionalJobFeature3'), t('functionalJobFeature4'), t('functionalJobFeature5')],
      image: 'functional-jobs-showcase'
    }
  ];

  const benefitsData = [
    { icon: '💰', title: t('benefitAttendance'), description: t('benefitAttendanceDesc') },
    { icon: '📈', title: t('benefitPerformance'), description: t('benefitPerformanceDesc') },
    { icon: '🎁', title: t('benefitYearEnd'), description: t('benefitYearEndDesc') },
    { icon: '🔄', title: t('benefitSalaryReview'), description: t('benefitSalaryReviewDesc') },
    { icon: '🏅', title: t('benefitLoyalty'), description: t('benefitLoyaltyDesc') },
    { icon: '🏠', title: t('benefitAccommodation'), description: t('benefitAccommodationDesc') },
    { icon: '🍲', title: t('benefitDining'), description: t('benefitDiningDesc') },
    { icon: '🎂', title: t('benefitHolidayBonus'), description: t('benefitHolidayBonusDesc') },
    { icon: '🤝', title: t('benefitTeamBuilding'), description: t('benefitTeamBuildingDesc') },
    { icon: '✈️', title: t('benefitVacation'), description: t('benefitVacationDesc') },
    { icon: '🎓', title: t('benefitTraining'), description: t('benefitTrainingDesc') },
    { icon: '🛡️', title: t('benefitWorkEnv'), description: t('benefitWorkEnvDesc') },
  ];
  
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
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{t('heroTitle')}</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-20 space-y-24">
        {/* Quick Contact Section */}
        <section>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {contactMethods.map((method) => {
              const contactIcon = (
                <div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors animate-pulse-glow"
                  style={{ color: method.color }}
                >
                  <div className="w-8 h-8">{method.icon}</div>
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
          <h2 className="text-3xl font-bold font-headline text-center mb-8">{t('popularRegionsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {popularRegions.map((region) => (
              <Card key={region.name} className="overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-glow animate-card-pulse-glow">
                <CardContent className="p-2">
                  <div className="flex flex-col items-center text-center">
                    <Flag country={region.name} className="h-8 w-14 mb-2" />
                    <h3 className="font-semibold text-base text-foreground">
                      <span>{t(region.key as any)}</span>
                    </h3>
                  </div>
                  <div className="px-2 pb-1 mt-1">
                    <Button asChild variant="outline" size="sm" className="w-full bg-card hover:bg-muted text-card-foreground animate-pulse-glow text-xs h-7">
                      <Link href={`/jobs?location=${region.name}`}>{t('viewJobsButton')}</Link>
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
            <h2 className="text-3xl font-bold font-headline">{t('benefitsTitle')}</h2>
            <p className="text-lg text-muted-foreground mt-2">{t('benefitsSubtitle')}</p>
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
          <h2 className="text-3xl font-bold font-headline text-center mb-8">{t('jobCategoriesTitle')}</h2>
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
                        <Link href="/jobs">{t('viewMoreButton')} <ArrowRight className="ml-2" /></Link>
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
                <h2 className="text-3xl font-bold font-headline">{t('advantagesTitle')}</h2>
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
