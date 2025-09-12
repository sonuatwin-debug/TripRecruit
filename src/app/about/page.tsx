import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Globe, Heart, Lightbulb } from 'lucide-react';
import Image from 'next/image';

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
