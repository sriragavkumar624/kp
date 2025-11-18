import { motion } from "framer-motion";
import { Code, Palette, Database, Cloud, Cpu, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js / WebGL", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "GraphQL / REST APIs", level: 90 },
      { name: "Redis / Caching", level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS / Azure", level: 82 },
      { name: "Docker / Kubernetes", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    icon: Palette,
    title: "Design & 3D",
    skills: [
      { name: "Figma / Adobe XD", level: 88 },
      { name: "Blender / Cinema 4D", level: 82 },
      { name: "After Effects", level: 85 },
      { name: "UI/UX Design", level: 90 },
    ],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    skills: [
      { name: "Python / TensorFlow", level: 80 },
      { name: "OpenAI APIs", level: 85 },
      { name: "LangChain", level: 78 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    icon: Zap,
    title: "Performance & Testing",
    skills: [
      { name: "Web Performance", level: 92 },
      { name: "Jest / Vitest", level: 88 },
      { name: "Cypress / Playwright", level: 85 },
      { name: "Accessibility (a11y)", level: 90 },
    ],
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold glow-text-cyan">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web experiences
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg glow-box-cyan">
                      <category.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center space-y-8"
        >
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {["React", "TypeScript", "Node.js", "Python", "Docker", "AWS", "PostgreSQL", "Three.js", "Next.js", "GraphQL"].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.2, opacity: 1 }}
                className="px-6 py-3 bg-muted/50 rounded-lg border border-border/30 text-sm font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="fixed top-1/3 left-0 w-96 h-96 gradient-blur animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-1/3 right-0 w-96 h-96 gradient-blur-purple animate-pulse-glow pointer-events-none" />
    </div>
  );
};

export default Skills;
