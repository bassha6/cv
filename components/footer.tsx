import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex-none text-xl font-semibold dark:text-white" aria-label="Brand">Ebrahim Shefawe</Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
             Fullstack Developer | UI/UX Designer
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="mt-3 grid grid-cols-5 gap-2">
            
             
              <a className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900" href="https://www.linkedin.com/in/ebrahim-shefawe" aria-label="LinkedIn">
                <Linkedin className="size-4" />
              </a>
            
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 text-center dark:border-neutral-700">
          <p className="text-sm text-gray-600 dark:text-neutral-400">© 2024 Ebrahim Shefawe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}