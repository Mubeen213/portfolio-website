import { Experience } from '../types'

export const experiences: Experience[] = [
  {
    company: 'Redblock (Formerly Quolum Inc)',
    role: 'Software Engineer',
    location: 'Remote (Bangalore, Karnataka)',
    period: 'Nov 2023 - Present',
    points: [
      'Developed Identity Governance Module for SSO provider integration',
      'Implemented threat analysis reports for security enhancement',
      'Created AI agent for automated user offboarding',
      'Designed External API Access Module for third-party integration',
    ],
    tech: ['Java', 'Spring', 'PostgreSQL', 'REST', 'GraphQL', 'DynamoDB'],
  },
  {
    company: 'Quolum Inc',
    role: 'Software Engineer',
    location: 'Remote (Bangalore, Karnataka)',
    period: 'Jun 2022 - Nov 2023',
    points: [
      'Integrated 25+ third-party applications for usage metrics and license tracking, achieving 20% cost savings',
      'Devloped and Optimized internal crawler framework for processing diverse data points such as Jira, GitHub, and other platforms',
      'Developed report generators aggregating multi-source data for actionable license optimization insights',
      'Improved dashboard performance through legacy code refactoring and PostgreSQL query optimization',
    ],
    tech: ['Java', 'React', 'Spring', 'PostgreSQL', 'GraphQL', 'DynamoDB'],
  },
  {
    company: 'Quolum Inc',
    role: 'Software Engineer Intern',
    location: 'Remote (Bangalore, Karnataka)',
    period: 'Oct 2021 - Dec 2021',
    points: [
      'Developed Slack bots for dashboard event notifications including user invites and signups',
      'Fixed critical bugs across the application improving overall stability',
      'Gained hands-on experience with enterprise-level software development',
    ],
    tech: ['Java', 'PostgreSQL', 'Slack API'],
  },
]
