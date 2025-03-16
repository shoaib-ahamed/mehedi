"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "MBA: Information Technology",
    institution: "University of Potomac, School of Business Administration & Management",
    location: "Falls Church, VA",
    period: "Expected in 08/2025",
  },
  {
    degree: "Bachelor of Science: Computer Science",
    institution: "Independent University of Bangladesh, College of Computer Science",
    location: "Dhaka, Bangladesh",
    period: "04/2022",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
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

