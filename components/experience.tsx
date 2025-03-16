"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Store Manager",
    company: "Shoe Star",
    location: "Greenbelt, MD",
    period: "07/2023 to Current",
    responsibilities: [
      "Managed and optimized store inventory database to ensure accurate records and efficient operations.",
      "Utilized Excel spreadsheets to analyze sales data to generate reports in order to provide insights to support inventory planning and decision making.",
      "Delivered excellent customer service by focusing on customer satisfaction and building long-term customer loyalty.",
      "Facilitated onboarding and training for new employees ensuring proficiency in core store operations and customer service standards.",
      "Actively engaged in weekly meetings with management to review performance metrics, inventory trends, and sales strategies.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Nano Information Technology",
    location: "Dhaka, Bangladesh",
    period: "02/2021 to 03/2023",
    responsibilities: [
      "Developed an Online Food Order system using HTML, CSS, Bootstrap 5, PHP, Laravel, and JavaScript.",
      "Assisted in office operations, gaining practical experience in the professional work environment.",
      "Proficient in office management with a keen eye for detail, adept at streamlining workflows, and experienced in fostering a collaborative work environment.",
      "Built databases and table structures for web applications.",
    ],
  },
  {
    title: "Front-End Web Developer Intern",
    company: "6sense Technology",
    location: "Dhaka, Bangladesh",
    period: "01/2018 to 01/2021",
    responsibilities: [
      "Provided exceptional customer service by understanding and meeting customer needs.",
      "Effectively handled product inquiries, payments, and transactions.",
      "Proven ability to convincingly engage customers and cultivate lasting relationships through effective communication and trust-building strategies.",
      "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {exp.company} - {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

