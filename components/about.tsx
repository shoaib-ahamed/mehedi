"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                A skilled professional with a strong educational and technical background to adapt to new technologies
                and applications. I am committed to continuous learning and enjoy working on challenges that enhance my
                expertise and improve outcomes. My combination of technical knowledge, problem-solving abilities, and
                collaborative mindset enables me to contribute effectively to various projects. I am eager to take on
                roles where I can apply my skills to drive success and make a meaningful impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

