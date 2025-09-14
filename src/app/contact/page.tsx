import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { contactMethods } from '../page';

export default function ContactPage() {
  const contactHeroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

  return (
    <div className="-mt-14">
      <section className="relative h-[50vh] text-white">
        {contactHeroImage && (
          <Image
            src={contactHeroImage.imageUrl}
            alt={contactHeroImage.description}
            data-ai-hint={contactHeroImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">联系我们</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">我们随时准备为您提供帮助。请通过以下任何渠道与我们联系。</p>
        </div>
      </section>

      <div className="container py-12 md:py-20">
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
      </div>
    </div>
  );
}
