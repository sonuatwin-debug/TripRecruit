import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Utensils, Home, Plane, Medkit, Gift, PartyPopper, GraduationCap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: '住宿福利',
    description: '提供高标准公寓或宿舍，设施齐全，温馨舒适，让您身在异乡也能感受到家的温暖。',
  },
  {
    icon: Utensils,
    title: '餐饮福利',
    description: '公司设有员工食堂，聘请专业厨师团队，提供多样化、营养均衡的中式菜肴，满足您的味蕾。',
  },
  {
    icon: Plane,
    title: '假期福利',
    description: '享有丰厚的带薪年假、病假及其他法定节假日，并提供回国往返机票，让您工作生活两不误。',
  },
  {
    icon: Medkit,
    title: '健康保障',
    description: '为员工提供全面的医疗保险和定期健康体检，并设有当地医疗团队，确保您的健康无忧。',
  },
  {
    icon: Gift,
    title: '节日贺礼',
    description: '在各大传统节日及员工生日，公司会发放节日礼金或精美礼品，传递公司关怀。',
  },
  {
    icon: PartyPopper,
    title: '团建活动',
    description: '定期组织丰富的团建活动、部门聚餐及年度旅游，增进团队凝聚力，放松身心。',
  },
  {
    icon: GraduationCap,
    title: '专业培训',
    description: '提供完善的入职培训、在职培训和职业发展规划，助力员工不断成长，提升专业技能。',
  },
  {
    icon: ShieldCheck,
    title: '安全保障',
    description: '配备专业的安保团队，提供24小时全方位的安全保障，确保员在海外的工作和生活安全。',
  },
];

export default function BenefitsPage() {
  const benefitsHeroImage = { id: 'benefits-hero', imageUrl: 'https://picsum.photos/seed/301/1200/600', description: '员工在休息室愉快交谈', imageHint: 'employee benefits' };

  return (
    <div>
      <section className="relative h-[50vh] text-white">
        <Image
          src={benefitsHeroImage.imageUrl}
          alt={benefitsHeroImage.description}
          data-ai-hint={benefitsHeroImage.imageHint}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">公司福利</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">我们关心每一位员工，并提供全方位的福利保障。</p>
        </div>
      </section>

      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
