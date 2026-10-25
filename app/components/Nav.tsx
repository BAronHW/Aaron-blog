'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'about', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'blog', href: '/blog' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-4 mt-2">
      {links.map(({ label, href }) => {
        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors duration-200 ${
              isActive
                ? 'text-zinc-100'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
