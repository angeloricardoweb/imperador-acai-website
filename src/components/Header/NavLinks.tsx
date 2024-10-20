'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import useNavLinks from '@/hooks/useNavLinks'
import { Facebook, Instagram } from 'lucide-react'

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()
  const { navLinks } = useNavLinks()

  return (
    <>
      <div className="flex gap-6">
        {navLinks?.map((link: any) => {
          return (
            <Link key={link.name} href={link.route}>
              <span
                className={`${segment === link.route.replace('/', '') ? 'font-bold' : 'font-normal'} cursor-pointer hover:opacity-70`}
                suppressHydrationWarning
              >
                {link.name}
              </span>
            </Link>
          )
        })}
      </div>
      <a href="/" rel="noreferrer" target="_blank">
        <Facebook className="text-brand-green" />
      </a>
      <a href="/" rel="noreferrer" target="_blank">
        <Instagram className="text-brand-green" />
      </a>
    </>
  )
}
