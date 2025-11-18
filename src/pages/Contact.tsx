import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold glow-text-cyan">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ x: 5 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg glow-box-cyan">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Available for freelance projects, full-time opportunities, and collaborations.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-primary/50">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/50">
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/50">
                    Twitter
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Doe"
                      className={`bg-background/50 border-border/50 focus:border-primary ${
                        errors.name ? "border-destructive" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="john@example.com"
                      className={`bg-background/50 border-border/50 focus:border-primary ${
                        errors.email ? "border-destructive" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="Project Inquiry"
                    className={`bg-background/50 border-border/50 focus:border-primary ${
                      errors.subject ? "border-destructive" : ""
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={`bg-background/50 border-border/50 focus:border-primary resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full glow-box-cyan bg-primary hover:bg-primary/80 text-primary-foreground font-semibold"
                  >
                    Send Message
                    <Send className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed top-1/4 right-10 w-96 h-96 gradient-blur animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-1/4 left-10 w-96 h-96 gradient-blur-purple animate-pulse-glow pointer-events-none" />
    </div>
  );
};

export default Contact;
