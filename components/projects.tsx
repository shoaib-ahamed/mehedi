"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const projects = [
  {
    title: "Online Food Ordering System",
    location: "Dhaka, Bangladesh",
    period: "05/2022 - 10/2022",
    description:
      "Developed a user-friendly web application for online food ordering, enhancing customer convenience and improving user experience. Effectively handled product inquiries, payments, and transactions.",
    technologies: ["HTML", "CSS", "Bootstrap 5", "PHP", "Laravel", "JavaScript"],
  },
  {
    title: "Course Registration System",
    location: "Dhaka, Bangladesh",
    period: "01/2021 - 12/2021",
    description:
      "Devised and implemented a web-based application dedicated to Online Course Registration aimed at transforming enrollment process to improve efficiency, accessibility, and overall user experience.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{project.location}</span>
                    </div>
                    <div className="hidden sm:block text-muted-foreground">•</div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{project.period}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

