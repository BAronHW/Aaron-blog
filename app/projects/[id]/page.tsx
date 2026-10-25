import { notFound } from 'next/navigation'
import { highlight } from 'sugar-high'
import { projects } from '@/app/data/projects'

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === Number(id))

  if (!project) notFound()

  return (
    <div className="mt-8 space-y-10">

      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl font-medium text-zinc-100">{project.name}</h1>
        <p className="text-zinc-400 leading-relaxed">{project.overview ?? project.description}</p>
        <div className="flex gap-4 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              Live
            </a>
          )}
        </div>
      </div>

      {/* Stack */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs text-zinc-400 border border-zinc-700 rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="text-sm text-zinc-400">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Architecture */}
      {project.architecture && project.architecture.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-zinc-500">Architecture</h2>
          <ul className="space-y-2">
            {project.architecture.map((point, i) => (
              <li key={i} className="text-sm text-zinc-400">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Code blocks */}
      {project.codeBlocks && project.codeBlocks.length > 0 && (
        <div className="space-y-6">
          {project.codeBlocks.map((block, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-xs uppercase tracking-widest text-zinc-500">{block.label}</h2>
              <pre>
                <code dangerouslySetInnerHTML={{ __html: highlight(block.code) }} />
              </pre>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
