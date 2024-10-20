'use client'

import Link from 'next/link'
import { Container } from '../Partials/Container'
import { Copyright } from './Copyright'
import Icon from '../Adapters/Icon'
import useLang from '@/hooks/useLang'
import { langData } from '@/location/langData'
import useNavLinks from '@/hooks/useNavLinks'
import useSWR from 'swr'
import { getCertifications } from '@/services/prismicData/getCertifications'
import { getInfos } from '@/services/prismicData/getInfos'

export default function Footer() {
  const { stringData } = useLang()
  const { navLinks } = useNavLinks()

  const { data: certifications, error } = useSWR(
    'getCertifications',
    async () => {
      const response = await getCertifications()
      return response
    },
  )
  const { data: infos } = useSWR('getInfos', async () => {
    const response = await getInfos()
    return response
  })

  if (error) return null

  return (
    <footer className="border-t bg-brand-green text-white">
      <Container>
        <div className="grid grid-cols-7 gap-4 py-10">
          <div className="col-span-2">
            <img
              src="/img/logos/logo-imperador-branca 1.png"
              data-fancybox
              data-caption="Single image"
              alt="Logo"
              className="w-32 cursor-pointer"
            />
            <div className="mt-5 flex items-center gap-3">
              <p className="font-bold text-white">
                {stringData(langData.FollowUs)}
              </p>
              {infos?.data.facebook && (
                <a href={infos?.data.facebook} rel="noreferrer" target="_blank">
                  <Icon icon="mdi:facebook" className="text-2xl" />
                </a>
              )}
              {infos?.data.instagram && (
                <a
                  href={infos?.data.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon icon="mdi:instagram" className="text-2xl" />
                </a>
              )}
              {infos?.data.linkedin && (
                <a href={infos?.data.linkedin} rel="noreferrer" target="_blank">
                  <Icon icon="mdi:linkedin" className="text-2xl" />
                </a>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <p className="font-bold text-center md:text-start text-white">
              {certifications?.data.titulo}
            </p>
            {
              <div className="flex items-center gap-3">
                {certifications?.data.itens.map((certification) => {
                  return (
                    <img
                      src={certification.certificacao.url as string}
                      key={certification.certificacao.url}
                      alt="Certificação"
                    />
                  )
                })}
              </div>
            }
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              return (
                <Link href={link.route} key={link.name}>
                  <strong>{link.name}</strong>
                </Link>
              )
            })}
          </div>
          <div className="col-span-2">
            <p className="font-bold text-white">
              {stringData(langData.Atendment)}
            </p>
            {infos?.data.email && (
              <p className="text-white">{infos?.data.email}</p>
            )}
            {infos?.data.telefone && (
              <p className="text-white">{infos?.data.telefone}</p>
            )}
            <Link href="/fale-conosco">
              <strong>{stringData(langData.WorkWithUs)} </strong>
            </Link>
            <Link href="/#faq">
              <strong>{stringData(langData.FrequentlyAskedQuestions)} </strong>
            </Link>
          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
