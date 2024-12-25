import { Mail, Phone, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <header className='relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white'>
      <div className='absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]' />
      <div className='relative container mx-auto px-6 py-32'>
        <div className='max-w-3xl'>
          <h1 className='text-5xl font-bold mb-4 animate-fade-in'>Md Mubeen</h1>
          <h2 className='text-3xl text-blue-200 mb-6'>Software Engineer</h2>
          <p className='text-xl mb-8 text-blue-100 leading-relaxed'>
            Building secure, scalable solutions with modern technologies.
            Specialized in Backend Engineering.
          </p>
          <div className='flex flex-wrap gap-6'>
            {[
              {
                icon: <Mail size={20} />,
                text: 'Email',
                href: 'mailto:mdmubeen1307@gmail.com',
              },
              {
                icon: <Phone size={20} />,
                text: 'Phone',
                href: 'tel:7097008749',
              },
              {
                icon: <Github size={20} />,
                text: 'GitHub',
                href: 'https://github.com/Mubeen213',
              },
              {
                icon: <Linkedin size={20} />,
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/in/md-mubeen-8994311a0/',
              },
            ].map(({ icon, text, href }) => (
              <a
                key={text}
                href={href}
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              >
                {icon}
                <span>{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
