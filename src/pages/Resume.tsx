import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description: "Leading development of cutting-edge web applications with React, Node.js, and cloud technologies.",
    },
    {
      role: "3D Web Developer",
      company: "Creative Studios",
      period: "2019 - 2021",
      description: "Created immersive 3D web experiences using Three.js, WebGL, and interactive animations.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2017 - 2019",
      description: "Developed responsive websites and web applications for various clients across industries.",
    },
  ];

  const education = [
    {
      degree: "M.S. Computer Science",
      school: "Stanford University",
      period: "2015 - 2017",
    },
    {
      degree: "B.S. Software Engineering",
      school: "MIT",
      period: "2011 - 2015",
    },
  ];

  const awards = [
    "Best Web Experience - Awwwards 2023",
    "Developer of the Year - Tech Awards 2022",
    "Innovation in 3D Web - WebGL Awards 2021",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold glow-text-cyan">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="glow-box-cyan bg-primary hover:bg-primary/80 text-primary-foreground font-semibold"
            >
              <Download className="mr-2" size={20} />
              Download PDF Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg glow-box-cyan">
              <Briefcase className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-foreground font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-secondary/10 rounded-lg glow-box-purple">
              <GraduationCap className="text-secondary" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-secondary mb-2">{edu.degree}</h3>
                  <p className="text-foreground font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Award className="text-accent" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Awards & Recognition</h2>
          </div>
          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
            <ul className="space-y-4">
              {awards.map((award, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                  {award}
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="fixed top-1/3 left-10 w-96 h-96 gradient-blur animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-1/3 right-10 w-96 h-96 gradient-blur-purple animate-pulse-glow pointer-events-none" />
    </div>
  );
};

export default Resume;
