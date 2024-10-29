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
        <div className="md:grid grid-cols-7 gap-4 py-10">
          <div className="col-span-2">
            <img
              src="/img/logo-imperador.png"
              data-fancybox
              data-caption="Single image"
              alt="Logo"
              className="w-32 cursor-pointer mx-auto md:mx-0"
            />
            <div className="mt-5 flex items-center gap-3 justify-center md:justify-start">
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
          <div className="col-span-2 mt-5">
            <p className="font-bold text-center md:text-start text-white">
              {certifications?.data.titulo}
            </p>
            {
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {certifications?.data.itens.map((certification) => {
                  return (
                    <img
                      src={certification.certificacao.url as string}
                      key={certification.certificacao.url}
                      alt="Certificação"
                      width={60}
                      height={60}
                    />
                  )
                })}
              </div>
            }
          </div>
          <div className="flex flex-col gap-3 mt-5 md:mt-0">
            {navLinks.map((link: any) => {
              return (
                <Link
                  href={link.route}
                  key={link.name}
                  passHref
                  prefetch={false}
                  className="text-center md:text-start"
                >
                  <p className="font-bold text-white">{link.name}</p>
                </Link>
              )
            })}
          </div>
          <div className="col-span-2 flex flex-col items-center md:text-start gap-5 md:gap-0">
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
              <strong>{stringData(langData.WorkWithUs)}</strong>
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
