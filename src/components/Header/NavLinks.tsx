'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import useNavLinks from '@/hooks/useNavLinks'
import useSWR from 'swr'

import { getInfos } from '@/services/prismicData/getInfos'
import Icon from '../Adapters/Icon'
export default function NavLinks() {
  const segment = useSelectedLayoutSegment()
  const { navLinks } = useNavLinks()

  const { data: infos } = useSWR('getInfos', async () => {
    const response = await getInfos()
    return response
  })

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
      {infos?.data.facebook && (
        <a href={infos?.data.facebook} rel="noreferrer" target="_blank">
          <Icon icon="mdi:facebook" className="text-2xl text-brand-green" />
        </a>
      )}
      {infos?.data.instagram && (
        <a href={infos?.data.instagram} rel="noreferrer" target="_blank">
          <Icon icon="mdi:instagram" className="text-2xl text-brand-green" />
        </a>
      )}
      {infos?.data.linkedin && (
        <a href={infos?.data.linkedin} rel="noreferrer" target="_blank">
          <Icon icon="mdi:linkedin" className="text-2xl text-brand-green" />
        </a>
      )}
    </>
  )
}
