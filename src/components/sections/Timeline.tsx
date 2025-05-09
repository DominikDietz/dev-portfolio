import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { timelineData } from "@/constants";
import { Building2, CalendarDays, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";
import Section from "../Section";

export default function Timeline() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey and career highlights"
    >
      {timelineData.map((item, index) => {
        const isLast = index === timelineData.length - 1;

        const cardClasses = cn(
          "border-primary/20 hover:border-primary mb-6 grow py-0 transition-all duration-300 ml-8 md:ml-16",
          {
            "mb-0": isLast,
          },
        );
        return (
          <div key={index} className="relative flex">
            <div className="relative flex flex-col items-center">
              <div className="bg-background dark:bg-muted border-muted-foreground absolute top-9 z-10 flex h-4 w-4 rounded-full border" />
              <div className="bg-muted-foreground h-full w-px grow" />
            </div>

            <Card className={cardClasses}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h4 className="text-primary text-xl font-bold">
                      {item.title}
                    </h4>
                    <Badge
                      variant="outline"
                      className="border-primary/30 w-fit px-3 py-1.5 text-base font-medium"
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {item.timeframe}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="text-muted-foreground flex items-center">
                      <Building2 className="text-primary/70 mr-2 h-5 w-5" />
                      <span className="text-base">{item.company}</span>
                    </div>
                    <div className="text-muted-foreground flex items-center">
                      <MapPin className="text-primary/70 mr-2 h-5 w-5" />
                      <span className="text-base">{item.location}</span>
                    </div>
                  </div>

                  <div className="mt-2">
                    <ul className="marker:text-primary list-disc space-y-2 pl-5">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-base">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </Section>
  );
}
