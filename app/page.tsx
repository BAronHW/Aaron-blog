import { Suspense } from 'react'
import TabView from '@/app/components/TabView'
import BlogList from '@/app/components/BlogList'
import Timeline from '@/app/components/Timeline'
import Projects from '@/app/components/Projects'

function AboutSection() {
  return (
    <div className="space-y-6">
      <ul className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1">
        <li className="pl-1">Software engineer currently working at Quantexa, a British scale-up</li>
        <li className="pl-1">I enjoy building things and solving problems</li>
        <li className="pl-1">Constantly learning anything that will help me improve as a person and problem solver</li>
      </ul>
      <Timeline />
    </div>
  )
}

function ProjectsSection() {
  return <Projects />
}

export default function Page() {
  return (
    <Suspense>
      <TabView
        aboutContent={<AboutSection />}
        blogContent={<BlogList />}
        projectsContent={<ProjectsSection />}
      />
    </Suspense>
  )
}
