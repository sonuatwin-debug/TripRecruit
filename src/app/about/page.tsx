import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Globe, Heart, Lightbulb, Users, Rocket, Smile, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

  return (
    <div>
      <section className="relative h-[50vh] text-white">
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

      <div className="container py-12 md:py-20 space-y-16">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/jobs">查看所有岗位</Link>
              </Button>
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
                      <p className="text-3xl font-bold">25年</p>
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
                      <p className="text-3xl font-bold">45,000+</p>
                      <p className="text-sm text-muted-foreground">全球员工</p>
                  </CardContent>
              </Card>
          </div>
        </section>

        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-headline mb-4">我们的使命</h2>
          <p className="text-lg text-muted-foreground">
            通过提供一个无缝、一站式的旅行平台，提供丰富的产品和服务选择，让人们轻松愉快地探索世界。
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <CardTitle className="font-headline pt-2">价值观</CardTitle>
              </CardHeader>
              <CardContent>
                <p>以客户为中心、团队合作、诚信和创新是我们一切工作的核心。</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/20 p-3 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline pt-2">文化</CardTitle>
              </CardHeader>
              <CardContent>
                <p>我们营造一个多元、包容和充满活力的工作环境，鼓励成长和学习。</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-2">影响</CardTitle>
              </CardHeader>
              <CardContent>
                <p>连接全球数百万旅行者，为他们创造难忘的体验。</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
