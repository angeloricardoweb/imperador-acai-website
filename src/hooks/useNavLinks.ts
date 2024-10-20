import useLang from './useLang'
import { langData } from '@/location/langData'

export default function useNavLinks() {
  const { stringData } = useLang()

  const navLinks: any = [
    {
      route: '/',
      name: stringData(langData.Home),
    },
    {
      route: '/quem-somos',
      name: stringData(langData.About),
    },
    {
      route: '/produtos',
      name: stringData(langData.Products),
    },
    {
      route: '/certificacoes',
      name: stringData(langData.Certifications),
    },
    {
      route: '/blog',
      name: stringData(langData.Blog),
    },
    {
      route: '/fale-conosco',
      name: stringData(langData.ContactUs),
    },
  ]

  return {
    navLinks,
  }
}
