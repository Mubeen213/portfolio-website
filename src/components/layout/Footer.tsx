import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-8 md:mb-0'>
            <h3 className='text-2xl font-bold'>Md Mubeen</h3>
            <p className='text-gray-400 mt-2'>Software Engineer</p>
          </div>

          <div className='flex space-x-6'>
            <a
              href='https://github.com/Mubeen213'
              className='hover:text-blue-400'
            >
              <Github size={24} />
            </a>
            <a
              href='https://www.linkedin.com/in/md-mubeen-8994311a0/'
              className='hover:text-blue-400'
            >
              <Linkedin size={24} />
            </a>
            <a
              href='mailto:mdmubeen1307@gmail.com'
              className='hover:text-blue-400'
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Md Mubeen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
