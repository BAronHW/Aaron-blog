import fs from 'fs'
import Link from 'next/link'
import { BLOG_PATH } from '@/app/constants'

const getTitle = (dir: string) => {
  const content = fs.readFileSync(`app${BLOG_PATH}/${dir}/page.mdx`, { encoding: 'utf8', flag: 'r'});
  const regex = /title:\s*['"](.+?)['"]/
  return content.match(regex)?.[1] ?? null
}

const readAllPageDirs = (): string[] => {
  const directoryToRead = `app${BLOG_PATH}`
  try {
    const dirs = fs.readdirSync(directoryToRead).filter(dir => dir != 'layout.tsx')
    return dirs
  } catch (e) {
    return []
  }
}

const getTitlesAndReadPage = () => {
  try {
    const dirs = readAllPageDirs();
    return dirs.map((dir) => [dir, getTitle(dir)])
  } catch (error) {
    return []
  }
}

export default function BlogList() {
  const dirs = getTitlesAndReadPage()
  return (
    <ul className="divide-y divide-gray-100 dark:divide-zinc-800">
      {dirs.map(([dir, title], index) => (
        <li key={index}>
          <Link
            href={`${BLOG_PATH}/${dir}`}
            className="flex items-center py-3 group"
          >
            <span className="text-gray-900 dark:text-zinc-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
              {title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
