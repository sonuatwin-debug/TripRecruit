

import { contactMethods } from '../page';
import { LineQrCode } from '@/components/line-qr-code';
import { ZaloQrCode } from '@/components/zalo-qr-code';
import { DingtalkQrCode } from '@/components/dingtalk-qr-code';
import { WechatQrCode } from '@/components/wechat-qr-code';
import { QqQrCode } from '@/components/qq-qr-code';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '加入携程集团｜成就更高价值的自己',
  description: '携程集团招聘官网，专注于全球化人才发展，长期发布各类优质岗位，涵盖市场运营、数据分析、客户服务、技术研发、行政管理等多个方向。我们为求职-	者提供真实可靠的高薪机会，打造国际化职业发展平台，助力人才与企业共赢未来。',
  keywords: '携程集团招聘, 携程招聘官网, 携程人才网, 携程海外工作, 携程集团高薪职位, 携程直招, 携程集团招聘平台, 携程国际人才, 携程工作机会, 携程招聘信-	息',
};

export default function ContactPage() {
  const contactHeroImage = {
    imageUrl: "https://res.cloudinary.com/dz1oictdz/image/upload/v1758187447/20161226113199329551_madw33.jpg",
    description: "联系我们",
    imageHint: "我们随时准备为您提供帮助。请通过以下任何渠道与我们联系。"
  };

  return (
    <div className="-mt-14">
      <section className="relative h-[50vh]">
        <Image
          src={contactHeroImage.imageUrl}
          alt={contactHeroImage.description}
          data-ai-hint={contactHeroImage.imageHint}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative container h-full flex flex-col justify-end items-center text-center pb-16 md:pb-24">
          <p className="text-lg md:text-xl max-w-3xl text-white drop-shadow-md">{contactHeroImage.imageHint}</p>
        </div>
      </section>

      <div className="container py-12 md:py-20">
        <section>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {contactMethods.map((method) => {
              const contactIcon = (
                <div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors animate-pulse-glow"
                  style={{ color: method.color }}
                >
                  <div className="w-8 h-8 flex items-center justify-center">{method.icon}</div>
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

        <section className="mt-20 max-w-3xl mx-auto text-center">
          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-start justify-center">
              <span className="mr-2">📩</span>
              <span>如果您在使用过程中遇到任何问题或有疑问，欢迎随时与我们联系。</span>
            </p>
            <p className="flex items-start justify-center">
              <span className="mr-2">📩</span>
              <span>您可以通过以上任意联系方式与我们取得沟通，我们的团队将第一时间为您解答并提供支持。</span>
            </p>
            <p className="flex items-start justify-center">
              <span className="mr-2">📩</span>
              <span>我们致力于为您提供快速、专业、贴心的服务，让您的体验更加顺畅。</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
