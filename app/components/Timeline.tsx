'use client'

import { motion } from 'framer-motion'

const experience = [
  {
    company: 'Quantexa',
    role: 'Associate Software Engineer',
    period: 'Jan 2026 – present',
    tags: ['Scala', 'TypeScript', 'Angular', 'RxJS', 'NgRx', 'gRPC', 'Git', 'Systems Design'],
    bullets: [
      'Working with Scala for backend services and Angular (TypeScript) for the frontend',
      'Creating and maintaining AML software',
      'Built low-code configuration features enabling clients to set up Quantexa projects faster, improving delivery speed',
      'Receiving and contributing to code reviews across the team',
      'Taking features end-to-end from planning through to delivery in a fast-paced agile team',
      'Responsible for writing abstractions and refactoring legacy Angular frontend services',
    ],
  },
  {
    company: 'Equilibrium Markets Ltd',
    role: 'Junior Fullstack Software Engineer',
    period: 'May 2025 – Oct 2025',
    tags: ['TypeScript', 'Node.js', 'Express.js', 'React.js', 'TypeORM', 'Docker', 'Docker Compose', 'Git', 'Databases', 'Systems Design', 'Agile'],
    bullets: [
      'Working within fast pace agile environment',
      'Creating systems to automate needs of distributors and buyers',
      'Creating RESTful backend',
      'Designed and implemented feature for selling surplus food stock',
      'Presented and received feedback directly from stakeholders',
      'Followed relational database design patterns and best practices',
    ],
  },
  {
    company: 'PortF',
    role: 'Software Engineer Intern',
    period: 'Sept 2024 – Nov 2024',
    tags: ['TypeScript', 'Python', 'GraphQL', 'React.js', 'Next.js', 'LangChain', 'Prisma ORM', 'AWS'],
    bullets: [
      'Built full-stack features for private equity and ESG management software',
      'Developed data-driven analytics across the fintech platform',
      'Worked across the stack with TypeScript, Python, GraphQL, and React/Next.js',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="mt-12">
      <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">
        Experience
      </h2>

      <div className="relative">
<div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="relative pl-8"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-400 border-2 border-[#1b1a19]" />

              <div className="flex justify-between items-baseline mb-1">
                <span className="font-medium text-zinc-100">{job.company}</span>
                <span className="text-sm text-zinc-500">{job.period}</span>
              </div>
              <p className="text-sm text-zinc-400 mb-3">{job.role}</p>
              <ul className="space-y-1">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-zinc-500 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {job.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.tags.map((tag, j) => (
                    <span key={j} className="text-xs text-zinc-400 border border-zinc-700 rounded px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
