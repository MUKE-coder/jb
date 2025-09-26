import { BookOpen, Calendar, Users, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "One-on-One Mentorship",
      description:
        "Personalized guidance tailored to your specific career goals and challenges",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Group Sessions",
      description:
        "Collaborative learning with fellow developers in structured group mentorship",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Monthly Workshops",
      description:
        "Hands-on workshops covering latest tech trends, best practices, and industry insights",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Weekly Calls",
      description:
        "Regular check-ins and progress reviews to keep you on track with your goals",
    },
  ];

  return (
    <section id="about" className="py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16">
          {/* Left Column - About */}
          <div>
            <Badge className="mb-4">About Muke Johnbaptist</Badge>

            <h2 className="mb-6 text-4xl leading-tight md:text-5xl">
              Empowering developers to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                thrive
              </span>
            </h2>

            <div className="mb-8 space-y-3">
              <p>
                With over 8 years of experience in software development,
                I&apos;ve helped hundreds of developers navigate their career
                journeys, from junior roles to senior positions and beyond.
              </p>
              <p>
                My approach combines technical expertise with practical career
                guidance, focusing on real-world skills that matter in
                today&apos;s tech industry. Whether you&apos;re just starting
                out or looking to make a career transition, I&apos;m here to
                guide you.
              </p>
              <p>
                Through my mentorship programs, I organize monthly workshops,
                weekly group calls, and provide personalized one-on-one guidance
                to help you achieve your professional goals.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="">
                View My Work
              </Button>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border shadow transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border text-muted-foreground">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        {/* <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-blue-400">8+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-purple-400">150+</div>
            <div className="text-gray-300">Developers Mentored</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-green-400">24</div>
            <div className="text-gray-300">Workshops This Year</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
