import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/Mubeen213',
      label: 'GitHub Profile',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/md-mubeen-8994311a0/',
      label: 'LinkedIn Profile',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:mdmubeen1307@gmail.com',
      label: 'Email Contact',
    },
  ]

  return (
    <footer className='bg-slate-900 text-white py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-8 md:mb-0 text-center md:text-left'>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent'>
              Md Mubeen
            </h3>
            <p className='text-gray-400 mt-2'>Software Engineer</p>
          </div>

          <div className='flex space-x-6'>
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-blue-400'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-white/10 text-center'>
          <p className='text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Md Mubeen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
