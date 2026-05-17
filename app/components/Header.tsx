import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-[60ch] mx-auto w-full mb-8">
      <Link
        href="/"
        className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-zinc-200 transition-colors duration-200"
      >
        ←
      </Link>
    </header>
  );
}
