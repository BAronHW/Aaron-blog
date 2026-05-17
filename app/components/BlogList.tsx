import fs from 'fs'
import Link from 'next/link'

const getTitle = (dir: string) => {
  const content = fs.readFileSync(`app/n/${dir}/page.mdx`, { encoding: 'utf8', flag: 'r'});
  const regex = /title:\s*['"](.+?)['"]/
  return content.match(regex)?.[1] ?? null
}

const readAllPageDirs = (): string[] => {
  const directoryToRead = 'app/n'
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
    <div className='flex flex-col'>
      {dirs.map(([dir, title], index) => (
        <Link key={index} href={`/n/${dir}`}>{title}</Link>
      ))}
    </div>
  )
}
