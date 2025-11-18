import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import FloatingShapes from "@/components/FloatingShapes";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <FloatingShapes />

      {/* Gradient Blurs */}
      <div className="absolute top-20 left-20 w-96 h-96 gradient-blur animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 gradient-blur-purple animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center space-y-8"
        >
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="glow-text-cyan">Creative</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Crafting immersive digital experiences with cutting-edge technologies.
            Specialized in 3D web experiences, interactive animations, and modern web applications.
          </motion.p>

          <motion.div variants={item} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary glow-text-cyan">
              Full Stack Developer & 3D Artist
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                <span>Award-Winning Work</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="group glow-box-cyan bg-primary hover:bg-primary/80 text-primary-foreground font-semibold"
              >
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center gap-6 pt-8"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
