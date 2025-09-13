
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

const popularRegions = [
    { name: '菲律宾', color: 'bg-philippines', logo: 'PH' },
    { name: '迪拜', color: 'bg-dubai', logo: 'AE' },
    { name: '泰国', color: 'bg-thailand', logo: 'TH' },
    { name: '柬埔寨', color: 'bg-cambodia', logo: 'KH' },
    { name: '日本', color: 'bg-japan', logo: 'JP' },
    { name: '马来西亚', color: 'bg-malaysia', logo: 'MY' },
    { name: '香港', color: 'bg-hongkong', logo: 'HK' },
    { name: '斯里兰卡', color: 'bg-srilanka', logo: 'LK' },
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

export default function HomePage() {
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

      <main className="container py-12 md:py-20 space-y-24">

        {/* Popular Regions Section */}
        <section id="popular-regions" className="scroll-mt-20">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">热门招聘地点</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularRegions.map((region) => (
              <div key={region.name} className="relative p-4 rounded-lg flex flex-col justify-between h-48">
                <div className={'absolute inset-0 rounded-lg ' + region.color + ' opacity-20'}></div>
                <div className="relative text-center w-full">
                  <div className="text-4xl font-bold text-foreground/80">{region.logo}</div>
                  <h3 className="font-semibold mt-2 text-foreground">{region.name}</h3>
                </div>
                <Button asChild variant="outline" className="relative w-full bg-card/80 hover:bg-card text-card-foreground animate-pulse-glow">
                  <Link href={`/jobs?location=${region.name}`}>查看岗位</Link>
                </Button>
              </div>
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
      </main>
    </div>
  );
}
