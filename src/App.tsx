import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  Laptop,
  LayoutDashboard,
  Lock,
  Rocket,
  Zap,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <LayoutDashboard className="w-12 h-12 text-primary" />,
      title: "Intuitive Dashboard",
      description: "Powerful analytics and insights at your fingertips"
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Storage",
      description: "Secure and scalable cloud storage solutions"
    },
    {
      icon: <Lock className="w-12 h-12 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security for your peace of mind"
    },
    {
      icon: <Globe2 className="w-12 h-12 text-primary" />,
      title: "Global CDN",
      description: "Lightning-fast content delivery worldwide"
    }
  ];

  const pricing = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: ["5 Team Members", "10GB Storage", "Basic Analytics", "24/7 Support"]
    },
    {
      title: "Pro",
      price: "$99",
      description: "For growing businesses",
      features: ["Unlimited Team Members", "100GB Storage", "Advanced Analytics", "Priority Support"]
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Custom Solutions", "Unlimited Storage", "Custom Analytics", "Dedicated Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">SaaSFlow</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-primary transition">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition">Pricing</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition">About</a>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <Button variant="outline">Log in</Button>
              <Button>Get Started</Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-lg">Features</a>
              <a href="#pricing" className="text-lg">Pricing</a>
              <a href="#about" className="text-lg">About</a>
              <Button variant="outline" className="w-full">Log in</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Streamline Your Workflow
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Boost productivity and scale your business with our powerful SaaS platform
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your business effectively
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div classNam