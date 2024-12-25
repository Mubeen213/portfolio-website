export interface Experience {
  company: string
  location: string
  role: string
  period: string
  points: string[]
  tech: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  image?: string
  link?: string
  github?: string
  category: 'frontend' | 'backend' | 'fullstack'
}

export interface Skill {
  name: string
  icon?: string
  category: 'core' | 'frontend' | 'backend'
}
