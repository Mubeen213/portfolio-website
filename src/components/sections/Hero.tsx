import { Mail, Github, Linkedin, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <header
      className={`relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen flex items-center`}
    >
      {/* Animated Background */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-100/20 to-transparent' />
      </div>

      {/* Content */}
      <div className='relative container mx-auto px-6 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-4xl mx-auto space-y-12'>
          {/* Main Content */}
          <div className='space-y-8 text-center sm:text-left'>
            <div className='space-y-4'>
              <h2 className='text-lg sm:text-xl text-blue-300/90 font-medium tracking-wide animate-fade-in'>
                Hi, I'm
              </h2>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in'>
                Md Mubeen
              </h1>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold'>
                Software Engineer
              </h2>
            </div>

            <p className='text-lg sm:text-xl text-gray-300/90 leading-relaxed max-w-2xl mx-auto sm:mx-0'>
              Crafting robust and scalable solutions with modern technologies.
              Specialized in backend engineering with deep expertise in Java
              ecosystem and cloud infrastructure.
            </p>

            {/* Social Links */}
            <div className='flex flex-wrap justify-center sm:justify-start gap-4'>
              {[
                {
                  icon: <Mail className='w-5 h-5' />,
                  text: 'Email',
                  href: 'mailto:mdmubeen1307@gmail.com',
                },
                {
                  icon: <Github className='w-5 h-5' />,
                  text: 'GitHub',
                  href: 'https://github.com/Mubeen213',
                },
                {
                  icon: <Linkedin className='w-5 h-5' />,
                  text: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/md-mubeen-8994311a0/',
                },
              ].map(({ icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target='_blank'
                  className='group flex items-center gap-3 px-5 py-2.5 rounded-full 
                    bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all
                    border border-white/10 hover:border-white/20'
                >
                  {icon}
                  <span className='text-sm font-medium'>{text}</span>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
              <a
                href='#projects'
                className='px-8 py-3 rounded-full bg-blue-600/90 hover:bg-blue-600 
                  transition-colors font-medium text-white shadow-lg shadow-blue-500/25'
              >
                View Projects
              </a>
              <a
                href='#contact'
                className='px-8 py-3 rounded-full border border-white/20 
                  hover:bg-white/5 transition-colors font-medium'
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
