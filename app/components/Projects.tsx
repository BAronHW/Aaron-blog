'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { projects } from '@/app/data/projects'

export default function Projects() {
  const router = useRouter()
  if (projects.length === 0) {
    return (
      <p className="text-sm text-zinc-500 mt-8">Projects coming soon.</p>
    )
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div onClick={() => router.push(`/projects/${project.id}`)} className="block h-full cursor-pointer">
          <Card className="bg-[#252320] ring-0 shadow-none h-full flex flex-col hover:bg-[#2e2b27] transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-zinc-100 text-lg">{project.name}</CardTitle>
              <CardDescription className="text-zinc-400 text-sm leading-relaxed">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 py-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs text-zinc-400 border border-zinc-700 rounded px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-4 bg-transparent border-none pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  Live
                </a>
              )}
            </CardFooter>
          </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
