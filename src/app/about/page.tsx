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
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Trip.com Group</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">We are a leading global travel service provider, committed to making every trip the perfect trip.</p>
        </div>
      </section>

      <div className="container py-12 md:py-20 space-y-16">
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-headline mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To make it easy and enjoyable for people to explore the world, by providing a seamless, one-stop travel platform with a vast selection of products and services.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/20 p-3 rounded-full w-fit">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline pt-2">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>To be the most trusted and innovative travel platform in the world.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-2">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Customer-centricity, teamwork, integrity, and innovation are at the heart of everything we do.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/20 p-3 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline pt-2">Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We foster a diverse, inclusive, and dynamic work environment that encourages growth and learning.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-2">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connecting millions of travelers with memorable experiences across the globe.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
