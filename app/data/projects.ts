export type Progress = 'done' | 'inProgress'

export type CodeBlock = {
  label: string
  code: string
}

export type Project = {
  id: number
  name: string
  description: string
  tags: string[]
  github?: string
  live?: string
  progress: Progress
  overview?: string
  features?: string[]
  architecture?: string[]
  architectureImage?: string
  codeBlocks?: CodeBlock[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Lumina',
    description: 'Agent tracing software for observing and debugging LLM agent behaviour.',
    tags: ['Scala', 'http4s', 'Circe', 'Skunk', 'React', 'TypeScript', 'Mantine'],
    github: 'https://github.com/BAronHW/Lumina',
    progress: 'inProgress',
  },
  {
    id: 2,
    name: 'KV Store',
    description: 'A key-value store with a lexer and top-down parser, built in C. Features a REPL with TTL, persistence, and chained hash map collision handling.',
    tags: ['C', 'Makefile', 'Lexer', 'Parser'],
    progress: 'inProgress',
    overview: 'A key-value store built from scratch in C, featuring a custom lexer and top-down parser. The project implements a full REPL with support for TTL-based expiry, file persistence, and a hash map with chained collision handling, all without external dependencies.',
    features: [
      'SET, GET, DELETE, EXISTS operations',
      'TTL-based key expiry',
      'LIST, COUNT, CLEAR for store inspection',
      'SAVE and LOAD for file persistence',
      'Flexible syntax: spaces around (, ), , are optional',
      'AddressSanitizer build target for memory safety checks',
    ],
    architecture: [
      'kv_store.c: REPL entry point and command dispatch',
      'lexer.c/h: tokenizer that splits raw input into a flat token stream',
      'parser.c/h: top-down parser that validates token sequences and builds command structs',
      'hash_table.c/h: hash map with string keys/values and chained collision handling',
      'Pipeline: raw input → tokenize() → parse_tokens() → dispatch → hash table ops',
    ],
    codeBlocks: [
      {
        label: 'Build',
        code: `make kv_store           # normal build
make kv_store-asan      # build with AddressSanitizer
make clean

./build/kv_store`,
      },
      {
        label: 'Example Usage',
        code: `SET(foo, bar)
SET( foo , bar )   # spaces are optional
GET(foo)
EXISTS(foo)
TTL(foo, 60)
LIST
COUNT
SAVE(mystore)
LOAD(mystore)
DELETE(foo)
CLEAR
EXIT`,
      },
      {
        label: 'Grammar',
        code: `set_cmd    → SET ( IDENT , IDENT )
get_cmd    → GET ( IDENT )
delete_cmd → DELETE ( IDENT )
exists_cmd → EXISTS ( IDENT )
ttl_cmd    → TTL ( IDENT , NUMBER )
list_cmd   → LIST
count_cmd  → COUNT
clear_cmd  → CLEAR
save_cmd   → SAVE ( IDENT )
load_cmd   → LOAD ( IDENT )
exit_cmd   → EXIT`,
      },
    ],
  },
  {
    id: 3,
    name: 'Case Compass',
    description: 'Application for lawyers to track and search cases digitally, using embeddings and RAG for intelligent document retrieval.',
    tags: ['Node.js', 'React.js', 'Redis', 'BullMQ', 'RAG', 'AWS S3', 'JWT'],
    github: 'https://github.com/BAronHW/CaseCompass',
    progress: 'done',
    overview: 'CaseCompass is a legal case management tool designed to help lawyers digitally track, search, and interact with their cases and documents. It uses a RAG pipeline to allow attorneys to query their case files in natural language, with AI-powered contract analysis and automated drafting built on top.',
    features: [
      'Session auth with JWT and Google sign-in',
      'RAG system for natural language querying of cases and documents',
      'Contract logical analysis and automated drafting',
      'Cloud file storage with AWS S3',
      'AI-powered document categorisation',
      'Background job processing via BullMQ and Redis',
    ],
    architecture: [
      'TypeScript monorepo with separate backend, frontend, and shared packages',
      'Express.js REST API on Node.js backend',
      'React.js frontend',
      'Redis + BullMQ for async background processing',
      'AWS S3 for document storage',
    ],
    architectureImage: '/case-compass-architecture.png',
  },
  {
    id: 4,
    name: 'Finance App',
    description: 'Personal banking app for students to track expenses, manage accounts, and visualise spending patterns.',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Apollo', 'Firebase', 'PostgreSQL', 'Prisma', 'shadcn/ui'],
    github: 'https://github.com/BAronHW/Finance-App',
    progress: 'done',
    overview: 'FinApp is a student-focused personal finance application for tracking spending, managing accounts, and building better financial habits. It provides a dashboard with real-time account balances, transaction history, and spending visualisations to help students stay on top of their money.',
    features: [
      'User authentication via Firebase',
      'Dashboard with account balances, recent transactions, and financial summary',
      'Expense logging and categorisation',
      'Budget goals with progress monitoring',
      'Transaction history with search and filtering',
      'Charts and visualisations of spending patterns',
    ],
    architecture: [
      'Next.js frontend with React Hooks for state management',
      'GraphQL API with Apollo Client',
      'Separate Node.js backend with Prisma for database migrations',
      'PostgreSQL database',
      'Firebase for authentication',
      'Tailwind CSS and shadcn/ui for styling',
    ],
  },
]
