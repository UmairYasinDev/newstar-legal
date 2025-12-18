"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Users, Wifi, Clock, Settings } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      id: 1,
      icon: Zap,
      heading: "Speed You Can Count On",
      description: "Experience seamless browsing, streaming, and gaming with ultra-fast fiber internet built for today's digital lifestyle. Say goodbye to buffering and enjoy lightning-fast downloads that keep pace with your demands.",
    },
    {
      id: 2,
      icon: Shield,
      heading: "Always Connected, Never Compromised",
      description: "Our 99.9% uptime guarantee and 24/7 network monitoring ensure your connection stays strong—rain or shine, day or night. We proactively maintain our infrastructure so you never miss a moment.",
    },
    {
      id: 3,
      icon: Users,
      heading: "Your Internet, Your Way",
      description: "Custom plans, real-time usage tracking, and easy self-service tools put you in full control of your online experience. Manage your account effortlessly and upgrade whenever you need more speed.",
    },
  ];

  const additionalFeatures = [
    {
      icon: Wifi,
      title: "Nationwide Coverage",
      description: "Expanding fiber network reaching more homes every day",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert technical support available whenever you need us",
    },
    {
      icon: Settings,
      title: "Smart Management",
      description: "Control everything from our intuitive mobile app",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-light/30">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-4 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="container relative z-10 mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                Welcome to <span className="text-secondary">New Star</span> Internet
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-light md:text-xl">
                Pakistan s fastest-growing ISP delivering reliable, high-speed internet to keep you connected to what matters most.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="group">
                  <span>Get Started Today</span>
                  <Zap className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary">
                  View Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Why Choose New Star?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We are not just an internet provider— we are your partner in staying connected to the digital world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                className="group border-2 transition-all duration-300 hover:border-primary hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <feature.icon className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{feature.heading}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-light/20 to-white px-4 py-16 md:py-20">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                More Reasons to Love New Star
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-lg border-2 border-transparent bg-white p-6 shadow-md transition-all duration-300 hover:border-secondary hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-secondary transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-center shadow-2xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-light">
              Join thousands of satisfied customers who have made the switch to New Star Internet.
            </p>
            <Button size="lg" variant="secondary" className="group">
              <span>Contact Us Today</span>
              <Users className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </section>

        <section className="border-t bg-white px-4 py-12">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="mb-6 text-2xl font-semibold text-primary">
                Important Information
              </h3>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/privacy">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/terms">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Terms of Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
