import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
                <h1 className="text-4xl md:text-5xl font-bold font-headline">联系我们</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl">我们在这里帮助您并回答您可能有的任何问题。</p>
                </div>
            </section>
            
            <div className="container py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-6">联系信息</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">我们的总部</h3>
                                    <p className="text-muted-foreground">中国上海市金钟路968号</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">致电我们</h3>
                                    <p className="text-muted-foreground">+86 21 3406 4880</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">给我们发邮件</h3>
                                    <p className="text-muted-foreground">recruitment@trip.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold font-headline mb-6">给我们留言</h2>
                                <form className="space-y-4">
                                    <Input placeholder="您的姓名" />
                                    <Input type="email" placeholder="您的邮箱" />
                                    <Textarea placeholder="您的留言" rows={5} />
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">发送留言</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
