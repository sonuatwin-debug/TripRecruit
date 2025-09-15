import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Globe, Heart, Lightbulb, Users, Rocket, Smile, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');
  const officeImage1 = { id: 'office-1', imageUrl: 'https://picsum.photos/seed/101/600/400', description: '现代化办公区', imageHint: 'office space' };
  const officeImage2 = { id: 'office-2', imageUrl: 'https://picsum.photos/seed/102/600/400', description: '员工协作区', imageHint: 'team collaboration' };
  const officeImage3 = { id: 'office-3', imageUrl: 'https://picsum.photos/seed/103/600/400', description: '休闲区', imageHint: 'office lounge' };


  return (
    <div className="container">
      <section className="relative h-[50vh] text-white -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24">
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            data-ai-hint={aboutHeroImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">关于携程集团</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">我们是全球领先的旅游服务提供商，致力于让每一次旅行都成为完美的旅程。</p>
        </div>
      </section>

      <div className="py-12 md:py-20 space-y-20">

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold font-headline">我们的愿景与使命</h2>
                <p className="text-muted-foreground text-lg">通过提供一个无缝、一站式的旅行平台，提供丰富的产品和服务选择，让人们轻松愉快地探索世界。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-center">
                <CardHeader>
                    <div className="mx-auto bg-accent/20 p-3 rounded-full w-fit">
                    <Lightbulb className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline pt-2">愿景</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>成为全球最值得信赖和最具创新精神的旅行平台。</p>
                </CardContent>
                </Card>
                <Card className="text-center">
                <CardHeader>
                    <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                    <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline pt-2">使命</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>让每一次旅行都成为完美的旅程，连接全球旅行者。</p>
                </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-8">企业文化</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline pt-2">客户中心</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>我们所有工作的核心都以客户为中心，致力于超越客户期望。</p>
                </CardContent>
                </Card>
                <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline pt-2">团队合作</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>我们营造一个多元、包容和充满活力的工作环境，鼓励合作与成长。</p>
                </CardContent>
                </Card>
                <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline pt-2">诚信正直</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>我们坚持最高的道德标准，对客户、合作伙伴和员工负责。</p>
                </CardContent>
                </Card>
                <Card className="text-center">
                <CardHeader>
                    <CardTitle className="font-headline pt-2">创新精神</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>我们拥抱变化，不断探索新技术和新思路，推动行业发展。</p>
                </CardContent>
                </Card>
            </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">办公环境</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Image src={officeImage1.imageUrl} alt={officeImage1.description} data-ai-hint={officeImage1.imageHint} width={600} height={400} className="rounded-lg object-cover w-full h-full" />
              <Image src={officeImage2.imageUrl} alt={officeImage2.description} data-ai-hint={officeImage2.imageHint} width={600} height={400} className="rounded-lg object-cover w-full h-full" />
              <Image src={officeImage3.imageUrl} alt={officeImage3.description} data-ai-hint={officeImage3.imageHint} width={600} height={400} className="rounded-lg object-cover w-full h-full" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center">
              <div>
                  <h2 className="text-3xl font-bold font-headline mb-4">携程简介</h2>
                  <p className="text-muted-foreground">
                      携程集团秉持『成就完美旅程』的品牌精神，致力打造业界顶尖的在线旅游服务。我们专精于酒店预订、交通票务、旅游度假和商旅管理等领域，以专业、安全和卓越的服务赢得全球用户的信赖。
                  </p>
              </div>
              <div>
                  <h3 className="text-2xl font-bold font-headline mb-4">我们的项目</h3>
                  <p className="text-muted-foreground">
                      携程的使命是不断超越自我，为亿万用户提供最优质的旅行体验。我们通过技术创新，保障服务安全，致力于提供高质量、可信赖的一站式解决方案，以满足客户的全方位需求。
                  </p>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Card className="text-center bg-accent/10 border-accent/30">
                  <CardContent className="p-6">
                      <Rocket className="h-10 w-10 text-accent mx-auto mb-2" />
                      <p className="text-3xl font-bold">200+</p>
                      <p className="text-sm text-muted-foreground">业务覆盖国家</p>
                  </CardContent>
              </Card>
              <Card className="text-center bg-primary/10 border-primary/30">
                  <CardContent className="p-6">
                      <Star className="h-10 w-10 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold">10年</p>
                      <p className="text-sm text-muted-foreground">行业经验</p>
                  </CardContent>
              </Card>
              <Card className="text-center bg-primary/10 border-primary/30">
                  <CardContent className="p-6">
                       <Smile className="h-10 w-10 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold">95%</p>
                      <p className="text-sm text-muted-foreground">用户满意度</p>
                  </CardContent>
              </Card>
              <Card className="text-center bg-accent/10 border-accent/30">
                  <CardContent className="p-6">
                      <Users className="h-10 w-10 text-accent mx-auto mb-2" />
                      <p className="text-3xl font-bold">10000+</p>
                      <p className="text-sm text-muted-foreground">全球员工</p>
                  </CardContent>
              </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
