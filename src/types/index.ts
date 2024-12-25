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
  features: string[]
  link?: string
  github?: string
  image?: string
}

export interface Skill {
  name: string
  icon?: string
  category: 'core' | 'frontend' | 'backend'
}
