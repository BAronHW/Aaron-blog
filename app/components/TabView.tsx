'use client'

import { ReactNode } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type Tab = 'about' | 'blog' | 'projects'

const tabs: { label: string; key: Tab }[] = [
  { label: 'About', key: 'about' },
  { label: 'Projects', key: 'projects' },
  { label: 'Blog', key: 'blog' },
]

export default function TabView({
  aboutContent,
  blogContent,
  projectsContent,
}: {
  aboutContent: ReactNode
  blogContent: ReactNode
  projectsContent: ReactNode
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = (searchParams.get('tab') as Tab) || 'about'

  const handleTabChange = (key: Tab) => {
    router.replace(`/?tab=${key}`, { scroll: false })
  }

  return (
    <>
      <header className="pt-12">
        <span className="text-[3rem] font-serif font-medium text-zinc-100">
          Aaron Wan
        </span>
        <nav className="flex gap-4 mt-2">
          {tabs.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`text-sm transition-colors duration-200 cursor-pointer ${
                active === key
                  ? 'text-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <div className="mt-6">
        {active === 'about' && aboutContent}
        {active === 'blog' && blogContent}
        {active === 'projects' && projectsContent}
      </div>
    </>
  )
}
