export interface Experience {
  company: string
  role: string
  period: string
  points: string[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  link: string
  github?: string
  tech: string[]
}

export interface Skill {
  category: string
  items: string[]
  icon: string
}
