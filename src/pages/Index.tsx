import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ragavImg from "../assets/ragav.jpg"; // 🔥 correct path

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-16 mt-20">
      
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Hello, I'm <br></br><span className="text-primary">Sri Ragav Kumar A </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
           Full Stack Developer
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          I build immersive, fast, and modern digital experiences.  
          Passionate about games, UI animations.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-primary text-black rounded-lg font-semibold hover:bg-primary/80 transition"
          >
            View My Work
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#00ffff"
          className="rounded-xl shadow-lg"
        >
          <motion.img
            src={ragavImg}
            alt="Sri Ragav Kumar"
            className="w-72 h-80 object-cover rounded-xl shadow-xl border border-primary/60"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Tilt>
      </motion.div>

    </div>
  );
};

export default Index;
