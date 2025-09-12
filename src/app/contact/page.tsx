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
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Get in Touch</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl">We’re here to help and answer any questions you might have.</p>
                </div>
            </section>
            
            <div className="container py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Our Headquarters</h3>
                                    <p className="text-muted-foreground">968 Jin Zhong Road, Shanghai, China</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className="text-muted-foreground">+86 21 3406 4880</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-muted-foreground">recruitment@trip.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold font-headline mb-6">Send Us a Message</h2>
                                <form className="space-y-4">
                                    <Input placeholder="Your Name" />
                                    <Input type="email" placeholder="Your Email" />
                                    <Textarea placeholder="Your Message" rows={5} />
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
