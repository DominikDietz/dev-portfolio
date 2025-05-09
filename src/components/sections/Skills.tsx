"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/constants";
import { useState } from "react";
import Section from "../Section";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all" ? skills : (
      skills.filter((skill) => skill.category === activeTab)
    );

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="My technical toolkit and expertise in web development"
      isAlternate
    >
      <Tabs
        defaultValue="all"
        className="mx-auto w-full max-w-2xl"
        onValueChange={setActiveTab}
      >
        <TabsList className="mb-8 grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  className="border-border hover:border-primary overflow-hidden border py-0 transition-colors"
                >
                  <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center">
                      <div
                        className={`bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full ${skill.color}`}
                      >
                        <Icon />
                      </div>
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <Badge variant="secondary" className="mt-2">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
