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

        <section className="mt-20 text-center max-w-4xl mx-auto">
            <h3 className="font-headline font-semibold text-2xl mb-6">🌍 携程集团简介</h3>
            <div className="bg-card p-8 rounded-lg shadow-lg text-left">
              <p className="text-muted-foreground leading-relaxed">
                携程集团成立于 2010年，至今已有 15年发展历程。总部位于 东南亚核心城市，业务已覆盖 菲律宾、迪拜、泰国、柬埔寨、日本、马来西亚、香港等多个国家和地区。
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                集团现有员工 165000+，始终坚持 诚信 · 专业 · 稳定 · 共赢 的理念，致力于为全球人才提供 正规直招、优质岗位与广阔的发展平台。
              </p>
              <p className="font-semibold text-foreground mt-6 text-center">
                💼 选择携程集团，就是选择稳定与未来！
              </p>
            </div>
        </section>
      </div>
    </div>
  );
}
