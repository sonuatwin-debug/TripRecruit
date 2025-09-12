import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ApplicationForm from '../apply/application-form';

export default function ContactPage() {
    const contactHeroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

    return (
        <div>
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
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">在线申请</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">我们期待您的加入，请填写下面的表格进行申请。</p>
                </div>
            </section>
            
            <div className="container py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold font-headline">
                                职位申请
                            </CardTitle>
                            <CardDescription>
                                请填写下面的表格提交您的申请。
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ApplicationForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
