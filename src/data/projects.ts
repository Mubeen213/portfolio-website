import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'nikahhub',
    title: 'NikahHub',
    description: `A comprehensive matrimonial platform designed to simplify  matchmaking process. 
    Features secure Phone verification, profile matching based on  preferences. 
    Built with privacy-first approach, the platform helps number of users find compatible matches. Implemented robust security measures for protecting sensitive user data.`,
    tech: [
      'React',
      'Spring Boot',
      'AWS',
      'PostgreSQL',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Google OAuth',
    ],
    link: 'https://nikahhub.org',
    features: [
      'Advanced profile matching',
      'Real-time chat',
      'Privacy controls',
      'Islamic guidelines compliance',
    ],
  },
  {
    id: 'prayerTrack',
    title: 'PrayerTrack',
    description: `A location-based application helping Muslim travelers locate nearby mosques and find prayer times. 
    Integrates with Google Maps API to provide real-time navigation.
    Serves 500+ daily active users in Hyderabad.
    Have a verification process to claim a mosque and get administrative rights.
    Allows mosque administrators to update prayer times and manage events.`,
    tech: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    link: 'https://masajidahlehadeesdawah.com/',
    features: [
      'Mosque locator',
      'Prayer time calculations',
      'Qibla direction',
      'Community reviews',
      'Offline access',
    ],
  },
]
