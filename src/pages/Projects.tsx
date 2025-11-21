import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import loginImg from "../assets/login.jpg"; 
// import portfolioimg from "../assets/portfolio.jpg";

const projects = [
  // {
  //   title: "AI-Powered Dashboard",
  //   description: "Real-time analytics platform with machine learning insights and predictive modeling.",
  //   tech: ["React", "TypeScript", "Python", "TensorFlow"],
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
  // {
  //   title: "3D Product Configurator",
  //   description: "Interactive 3D product visualization with real-time customization and AR preview.",
  //   tech: ["Three.js", "React", "WebGL", "Blender"],
  //   image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
  // {
  //   title: "Portfolio Website",
  //   description: "Decentralized NFT marketplace with smart contracts and Web3 integration.",
  //   tech: ["Solidity", "Ethers.js", "Next.js", "IPFS"],
  //   image: "./src/assetsportfolio .png",
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
  // {
  //   title: "Real-Time Collaboration Tool",
  //   description: "Multi-user collaborative workspace with WebRTC and operational transformation.",
  //   tech: ["WebRTC", "Socket.io", "Node.js", "MongoDB"],
  //   image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
  // {
  //   title: "AR Gaming Experience",
  //   description: "Augmented reality mobile game with geolocation and multiplayer features.",
  //   tech: ["Unity", "ARKit", "C#", "Firebase"],
  //   image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80",
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
  {
    title: "Login page",
    description: "Generative AI platform for creating marketing content with natural language processing.",
    tech: ["GPT-4", "Python", "FastAPI", "PostgreSQL"],
    image:"./src/assets/login.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, combining creativity with technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="fixed top-1/4 left-10 w-96 h-96 gradient-blur animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-1/4 right-10 w-96 h-96 gradient-blur-purple animate-pulse-glow pointer-events-none" />
    </div>
  );
};

export default Projects;
