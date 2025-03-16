"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
      </div>

      <div className="section-container z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.img
            src="/propic.jpeg" // Replace with your actual image URL
            alt="Mehedi Hasan"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full mb-6" // Make it round with Tailwind's `rounded-full`
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mehedi Hasan
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer & Store Manager
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Combining technical expertise with operational excellence to drive success and make a meaningful impact.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild variant="outline" size="icon" className="rounded-full">
              <a href="https://github.com/mehedi123456" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full">
              <a
                href="https://www.linkedin.com/in/mehedi-hasan-b80551237/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full">
              <a href="mailto:meh8edi@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-8 w-8 mx-auto animate-bounce text-primary" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

