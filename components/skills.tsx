"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Code, Laptop, BarChart, FileDigit, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Database Management",
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL", "Microsoft Access", "MongoDB"],
  },
  {
    title: "Web Development",
    icon: <Code className="h-5 w-5" />,
    skills: ["C++", "PHP", "Laravel", "HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Python"],
  },
  {
    title: "Applications",
    icon: <Laptop className="h-5 w-5" />,
    skills: ["SolidWorks", "LoggerPro", "ImageJ", "Microsoft 365 Suite"],
  },
  {
    title: "Analysis",
    icon: <BarChart className="h-5 w-5" />,
    skills: ["Market Analysis", "Operational Analysis", "Performance Analysis"],
  },
  {
    title: "Digital",
    icon: <FileDigit className="h-5 w-5" />,
    skills: ["Digital Content Management", "Search Engine Optimization"],
  },
  {
    title: "Design",
    icon: <Palette className="h-5 w-5" />,
    skills: ["Website Design", "Graphic Design"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

